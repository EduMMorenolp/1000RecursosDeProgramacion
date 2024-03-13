

import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx';

export default function Home() {
  return (
    <div>
      <Navbar />

      <Section title="Seccion Inicial">
        {/* Aquí puedes agregar tus recursos destacados */}
      </Section>

      <Footer />
    </div>
  );
}
