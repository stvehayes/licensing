import { ThemeProvider, BaseStyles, Box } from '@primer/react';
import { Navigation } from './components/Navigation/Navigation';
import { Copilot } from './components/Copilot/Copilot';
import { SideNav } from './components/SideNav/SideNav';
import ColorModeSwitcher from './ColorModeSwitcher';

function App() {
  return (
    <ThemeProvider colorMode='light'>
      <BaseStyles>
        <Navigation />
        <Box
          sx={{
            display: 'flex',
            height: '100vh',
            bg: 'canvas.default',
          }}
        >
          <SideNav />
          <Box
            sx={{
              mt: [3, 0],
              p: [3, 5],
              display: 'inline-flex',
              width: '100%',
            }}
          >
            <Copilot />
          </Box>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
