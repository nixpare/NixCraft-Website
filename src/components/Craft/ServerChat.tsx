import './ServerChat.css'

import { useEffect, useState, useRef } from "react";
import SendCommand from './SendCommand';
import { ChatMessage, ParsedLog } from '../../models/Logs';
import { User } from '../../models/User';
import { getProfileImage, ProfileImageType } from '../../utils/ProfileImageCache';
import { InRelief } from '../UI/InRelief';

type ServerChatProps = {
    serverName: string;
    chat: ChatMessage[];
    show: boolean;
    showMessage: (message: string) => void;
}

export default function ServerChat({ serverName, chat, show, showMessage }: ServerChatProps) {
    const serverChatEl = useRef<HTMLDivElement>(null);
    const [scrollAtBottom, setScrollAtBottom] = useState(true)

    useEffect(() => {
        if (!scrollAtBottom)
            return

        setTimeout(() => {
            serverChatEl.current?.scroll({ top: serverChatEl.current.scrollHeight, behavior: 'smooth' })
        }, 100)
    }, [show, chat])

    const onChatScroll = (ev: React.UIEvent<HTMLDivElement>) => {
        if (ev.currentTarget.scrollTop + ev.currentTarget.clientHeight < ev.currentTarget.scrollHeight) {
            setScrollAtBottom(false)
        } else {
            setScrollAtBottom(true)
        }
    }

    const sendMessage = async (message: string) => {
        const resp = await fetch(`/${serverName}/message`, {
            method: 'POST',
            body: message
        }).catch((err: Error) => {
            showMessage(err.message);
        });

        if (!resp) return;

        if (!resp.ok) {
            showMessage(await resp.text());
            return;
        }
    }

    const sendBroadcast = async (message: string) => {
        const resp = await fetch(`/${serverName}/broadcast`, {
            method: 'POST',
            body: message
        }).catch((err: Error) => {
            showMessage(err.message);
        });

        if (!resp) return;

        if (!resp.ok) {
            showMessage(await resp.text());
            return;
        }
    }

    return (
        <div style={!show ? { display: 'none' } : undefined}>
            <div className="send-broadcast">
                <SendCommand label="Broadcast Message" sendFunc={sendBroadcast} />
            </div>
            
            <InRelief reversed className="server-chat" onScroll={onChatScroll} innerRef={serverChatEl}>
                <div className="chat">
                    {chat.map(message => (
                        <Message key={message.id} message={message} />
                    ))}
                </div>
            </InRelief>
            
            <div className="send-message">
                <SendCommand label="Message" sendFunc={sendMessage} />
            </div>
        </div>
    );
}

function Message({ message }: { message: ChatMessage }) {
    const [profilePicture, setProfilePicture] = useState<string | null>(null)
    useEffect(() => {
        getProfileImage(message.from, ProfileImageType.HEADHELM)
            .then(image => {
                setProfilePicture(URL.createObjectURL(image))
            });
    }, []);

    let date = message.date.slice(message.date.indexOf('\n') + 1)
    date = date.slice(0, date.lastIndexOf(':'))

    return <div className={`message ${message.self ? 'self' : ''}`}>
        <div className="from">
            {profilePicture && <img src={profilePicture} />}
            <div>{message.from}</div>
        </div>
        <div className="content">{message.message}</div>
        <div className="date">{date}</div>
    </div>
}

export function parseChatMessage(user: User, log: ParsedLog, chat: ChatMessage[]) {
    let message = log.message
    if (log.tags?.includes('chat')) {
        message = message.slice(message.indexOf('\n') + 1)
    }

    if (!message.trim().startsWith('<'))
        return

    let from = message.slice(1, message.indexOf('>'))
    message = message.slice(message.indexOf('>') + 2, message.length);

    chat.push({
        id: log.id, date: log.date,
        from: from, message: message,
        self: from == user.name
    });
}
