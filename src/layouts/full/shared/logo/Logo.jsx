import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
const LazyImage = lazy(() => import('./LazyImage'));

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#ffffff',
}));

const Logo = () => {
  // const svgStyle = {
  //   mixBlendMode: 'multiply',
  // };
  return (
    <LinkStyled to="/">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyImage />
      </Suspense>
      Career Development Center
    </LinkStyled>
  );
};

export default Logo;
