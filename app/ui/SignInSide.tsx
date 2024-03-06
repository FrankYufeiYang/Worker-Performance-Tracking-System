import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import LoginForm from './login/manager-login-form';
import Link from 'next/link';

export default function SignInSide() {
  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          // backgroundColor: (t) =>
          //   t.palette.mode === 'light'
          //     ? t.palette.grey[50]
          //     : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            className=' drop-shadow-2xl shadow-blue-900 mb-8'
            src={'/Outlook-Logos.png'}
            width={500}
            height={500}
            alt='HNL Lab Medicine'
            priority
          />
          <div className=' flex flex-col items-center justify-center text-blue-500 h-[10vh]'>
            <div className=' text-center '>
              <h1 className='text-xl md:text-2xl font-extrabold'>
                Worker Performance Tracking System
              </h1>
            </div>
          </div>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <LoginForm />
          <Image
            className='w-40 sm:w-44  md:w-auto mt-12 md:mt-24'
            width={160}
            height={80}
            src={'/crothall.png'}
            alt='logo'
          />
          <Copyright sx={{ mt: 1 }} />
        </Box>
      </Grid>
    </Grid>
  );
}

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href=''>
        Crothall
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
