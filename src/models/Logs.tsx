export type ServerLog = {
	id: string
	level: string
	date: string
	message: string
	extra: string
	tags?: string[]
}

export type ParsedLog = {
	id: string
	date: string
	from: string
	level: string
	levelColor: string
	message: string
	tags?: string[]
}