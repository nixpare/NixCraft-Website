import axios, { AxiosError } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Snackbar, Stack } from '@mui/material';
import { StrictMode, useState } from 'react';
import Navbar from '../components/Navbar';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CraftLogin />
  </StrictMode>,
)

type FormValues = {
  username: string;
  password: string;
}

function CraftLogin() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
      const response = await axios.post(location.href, {
        username: data.username,
        passcode: data.password
      }).catch((error: AxiosError) => {
        console.log(error)
        setErrorMessage(`${error.message}`);
        setOpenSnackbar(true)
      });

      if (response == undefined || response.status >= 400)
        return

      localStorage.setItem('username', data.username)
      window.location.href = '/'
    }

  return (
    <>
      <Navbar />
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <input {...register("username")} className='form-control' placeholder='Username'/>
          <input type={"password"} {...register("password")} className='form-control' placeholder='Password'/>
          <input type="submit" value={"Login"} className="btn btn-primary shadow d-block w-100"/>
        </Stack>

      </form>
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