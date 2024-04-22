import LogoKampus from '../../../../../src/assets/images/logos/logo.png';

const LazyImage = () => {
  const imgStyle = {
    height: '48px',
    width: '48px',
  };
  return <img src={LogoKampus} alt="Universitas Ahmad Dahlan" style={imgStyle} />;
};

export default LazyImage;
