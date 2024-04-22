import React from 'react';
import { styled, Container, Box, AppBar, Toolbar, Stack, MenuList, MenuItem, Button, Link as LinkButton, Popper, Paper, ClickAwayListener, Grow } from '@mui/material';

import Logo from './shared/logo/Logo';
import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

const MainWrapper = styled('div')(() => ({
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
}));

const PageWrapper = styled('div')(() => ({
    display: 'flex',
    flexGrow: 1,
    paddingBottom: '60px',
    flexDirection: 'column',
    zIndex: 1,
    backgroundColor: 'transparent',
}));

const LinkRouter = styled(Link)(() => ({
    textDecoration: "none",
    color: '#ffffff',
  }));

const LandingPage = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

  // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    const AppBarStyled = styled(AppBar)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        boxShadow: 'none',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        background: theme.palette.primary.main,
        border: 'none',
        [theme.breakpoints.up('lg')]: {
            minHeight: '70px',
        },
    }));
    const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
        width: '100%',
        color: theme.palette.text.secondary,
    }));

    return (
        <MainWrapper className="mainwrapper">
            <PageWrapper className="page-wrapper">
                <AppBarStyled position="sticky">
                    <ToolbarStyled>
                        <Stack>
                            <Logo />
                        </Stack>
                        <Box flexGrow={1} />
                        <Stack spacing={4} direction="row" alignItems="center">
                            <LinkRouter to="/lowongan-pekerjaan" component={<NavLink />} color={'#ffffff'} underline='hover'>Lowongan Kerja</LinkRouter>
                            <LinkRouter to="/tracer-studi" color={'#ffffff'} underline='hover'>Laporan Tracer Study</LinkRouter>
                            <LinkRouter to="/alumni" color={'#ffffff'} underline='hover'>Alumni</LinkRouter>
                            <LinkRouter to="" color={'#ffffff'} underline='hover'>Contact</LinkRouter>
                            <LinkRouter to="/auth/login" color={'#ffffff'} underline='hover'>Login</LinkRouter>
                            
                            {/* <Profile /> */}
                        </Stack>
                    </ToolbarStyled>
                </AppBarStyled>
                <Container
                    sx={{
                        paddingTop: '20px',
                    }}
                >
                <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
                    {/* {children} */}
                    <Outlet />
                </Box>
                </Container>
            </PageWrapper>
        </MainWrapper>
    )
}

export default LandingPage;