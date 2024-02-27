'use client';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState, useFormStatus } from 'react-dom';
import { managerSignIn } from '@/app/lib/actions';
import { Box, TextField, Button, Grid, Link, Typography } from '@mui/material';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(managerSignIn, undefined);

  return (
    <>
      <Box component='form' noValidate action={dispatch} sx={{ mt: 1 }}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='username'
          label='Username'
          name='username'
          autoComplete='username'
          autoFocus
          defaultValue={'User'}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          defaultValue={'123456'}
        />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className='bg-blue-500'
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        {errorMessage && (
          <>
            <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
            <p className='text-sm text-red-500'>{errorMessage}</p>
          </>
        )}
        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href='#' variant='body2'>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
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
        HNL
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
