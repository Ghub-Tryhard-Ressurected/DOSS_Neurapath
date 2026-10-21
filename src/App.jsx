import { Routes, Route } from 'react-router-dom';

import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

import Home          from './pages/Home';
import Fundamentals  from './pages/GitGithub';
import Landscape     from './pages/CICD';
import Breakthroughs from './pages/Docker';
import DailyLife     from './pages/Kubernetes';
import Future        from './pages/Prometheus';
import Careers       from './pages/Grafana';

export default function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/"              element={<Home />}          />
          <Route path="/fundamentals"  element={<Fundamentals />}  />
          <Route path="/landscape"     element={<Landscape />}     />
          <Route path="/breakthroughs" element={<Breakthroughs />} />
          <Route path="/daily-life"    element={<DailyLife />}     />
          <Route path="/future"        element={<Future />}        />
          <Route path="/careers"       element={<Careers />}       />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
