import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import axios from 'axios'

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { useAuthentication } from '../../../context/AuthContext';

const AuthLogin = ({ title, subtitle, subtext }) => {

    const { login } = useAuthentication();
    const navigate = useNavigate();

    const [credentials, setCrendentials] = useState({
        email: '12',
        password: '12',
    });

    const handleSubmit = async (e) => {
        console.log(credentials);
        e.preventDefault();
        
        try {
            console.log("proses auth");
            const response = await axios.post('http://127.0.0.1:5173/login', credentials);
            console.log('response', response);
            if (response.status === 200) {
                await login(response.data);
                navigate('/dashboard', { replace: true });
            } else {
                console.log('login salah');
            }
        } catch (error) {
            console.error('error', error);
        }
    };
    return (
    <>
        <Stack>
            <Box>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px">Email</Typography>
                <CustomTextField 
                    id="email" 
                    variant="outlined" 
                    fullWidth
                    onChange={(e) =>
                        setCrendentials({
                            ...credentials,
                            email: e.target.value
                        })
                    }/>
            </Box>
            <Box mt="25px">
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                <CustomTextField 
                    id="password" 
                    type="password" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) =>
                        setCrendentials({
                            ...credentials,
                            password: e.target.value
                        })
                    }/>
            </Box>
        </Stack>
        <Box mt="24px">
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                onClick={handleSubmit}
            >
                Sign In
            </Button>
        </Box>
        {subtitle}
    </>
)};

export default AuthLogin;
