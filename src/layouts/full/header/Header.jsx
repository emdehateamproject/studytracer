import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Link } from '@mui/material';
import PropTypes from 'prop-types';

// components
import Profile from './Profile';
import { IconMenu } from '@tabler/icons-react';
import { useAuthentication } from '../../../../src/context/AuthContext';

const Header = (props) => {
  const { authenticated } = useAuthentication();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
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
    <AppBarStyled position="sticky">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'inline',
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>
        <Box flexGrow={1} />
        <Stack spacing={4} direction="row" alignItems="center">
          <Link color={'#ffffff'}>Lowongan Kerja</Link>
          <Link color={'#ffffff'}>Laporan Tracer Study</Link>
          <Link color={'#ffffff'}>Alumni</Link>
          <Link color={'#ffffff'}>Contact</Link>
          <Profile auth={authenticated}/>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
