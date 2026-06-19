// import Navbar from './component/Navbar';
// import Hero from './pages/Hero';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Stack from './pages/Stack';
// import Education from './pages/Education';
// import Contact from './pages/Contact';
// import Footer from './component/Footer'; // Importamos el nuevo cierre visual

// function App() {
//   return (
//     <div style={{ background: 'var(--bg)', minHeight: '100vh', width: '100%' }}>
//       {/* Barra de navegación oscura fija */}
//       <Navbar />
      
//       {/* Contenedor unificado para una experiencia Single Page nativa */}
//       <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
//         <Hero />
//         <About />
//         <Projects />
//         <Stack />
//         <Education />
//         <Contact />
//       </main>

//       {/* El Footer cierra el flujo de la página de forma limpia */}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import Navbar from './component/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', width: '100%' }}>
      <Navbar />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;