import { common } from '@mui/material/colors';
import { MainSection } from './components/MainSection';
import { Navbar } from './components/Navbar';
import { Box } from '@mui/material';
import waveUrl from '../../assets/landing-wave.svg';

export const Landing = () => {
  return (
    <div
      style={{
        backgroundColor: common.white,
      }}
    >
      <div
        style={{
          maxWidth: '86rem',
          margin: '0 auto',
          backgroundColor: common.white,
        }}
      >
        <Navbar />
        <MainSection />
      </div>
      <Box
        sx={{
          height: '70vh',
        }}
      />
      <img
        src={waveUrl}
        alt="person"
        style={{
          position: 'absolute',
        }}
      />
      <Box
        sx={{
          background: 'linear-gradient(90deg,#769b08,#bad377 90%)',
          height: '26vh',
        }}
      />
    </div>
  );
};
