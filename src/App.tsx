import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ThemeProvider } from './components/ThemeProvider';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Fleet } from './pages/Fleet';
import { Destinations } from './pages/Destinations';
import { Packages } from './pages/Packages';
import { Contact } from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="ashapura-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="fleet" element={<Fleet />} />
              <Route path="destinations" element={<Destinations />} />
              <Route path="packages" element={<Packages />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
