import './login.css'

import { useForm, SubmitHandler } from 'react-hook-form';
import { Snackbar } from '@mui/material';
import { StrictMode, useState } from 'react';
import Navbar from '../components/UI/Navbar';
import { createRoot, hydrateRoot } from 'react-dom/client';
import Footer from '../components/UI/Footer';

const App = (
  <StrictMode>
    <CraftLogin />
  </StrictMode>
)

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrateRoot(rootElement, App)
} else {
  createRoot(rootElement!).render(App)
}

type FormValues = {
  username: string;
  password: string;
}

function CraftLogin() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: localStorage.getItem('username') ?? '',
    }
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const resp = await fetch(location.href, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.username,
        passcode: data.password
      })
    }).catch((err: Error) => {
      setErrorMessage(err.message);
      setOpenSnackbar(true);
    });

    if (!resp) return;

    if (!resp.ok) {
      setErrorMessage(await resp.text());
      setOpenSnackbar(true);
      return;
    }

    localStorage.setItem('username', data.username);
    window.location.href = '/';
  }

  return (
    <>
      <div className="page-wrapper">
        <div>
          <Navbar showLogoutButton={false} onLogout={() => { }} />
          <div className="page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" {...register("username")} className='form-control' placeholder='Username' autoComplete='username' />
              <input type="password" {...register("password")} className='form-control' placeholder='Password' autoComplete='current-password' />
              <button type="submit" className="primary-button">Login</button>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        message={errorMessage}
        autoHideDuration={6000}
        onClose={() => { setOpenSnackbar(false) }}
        onClick={() => { setOpenSnackbar(false) }}
      />
    </>
  )
}