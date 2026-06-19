// import './Hero.css'
// import { ArrowDown, MapPin, Terminal as TerminalIcon } from 'lucide-react'
// import miFoto from '../assets/profile.jpg'

// export default function Hero() {
//   return (
//     <section id="hero" className="hero">
//       {/* Efectos de iluminación ambiental de fondo */}
//       <div className="hero-blur-one" aria-hidden="true" />
//       <div className="hero-blur-two" aria-hidden="true" />
//       <div className="hero-grid-mesh" aria-hidden="true" />

//       <div className="hero-inner">
//         <div className="hero-content">
          
//           {/* Badge estilo terminal interactiva */}
//           <div className="hero-badge">
//             <TerminalIcon size={12} className="terminal-anim" />
//             <span className="mono-text">daniverdon.dev // fullstack</span>
//           </div>

//           <h1 className="hero-title">
//             Desarrollo de <br />
//             <span className="text-gradient">Software & Producto</span>
//           </h1>

//           {/* Integración limpia de MapPin para dar contexto geográfico inmediato */}
//           <p className="hero-subtitle">
//             Creación de sistemas con enfoque <em>End-to-End</em>: desde el diseño de interfaces y la arquitectura del backend, hasta la optimización de la infraestructura y su despliegue en producción.
//             <span className="hero-location">
//               <MapPin size={14} className="location-icon" /> Sevilla, España.
//             </span>
//           </p>

//           <p className="hero-status">
//             <span className="pulse-dot" /> Actualmente desplegando <a href="https://dogenda.es" target="_blank" rel="noreferrer" className="status-link">Dogenda.es</a>
//           </p>

//           <div className="hero-actions">
//             <a href="#proyectos" className="cta-main">Ver Proyectos</a>
//             <a href="#contacto" className="cta-secondary">Hablemos</a>
//           </div>
//         </div>

//         {/* Showcase Profesional Rediseñado (Sin Ventana Mac) */}
//         <div className="hero-showcase">
//           <div className="image-container-premium">
//             <div className="image-accent-glow" aria-hidden="true" />
//             <img src={miFoto} alt="Daniel Verdón" className="profile-img-clean" />
//           </div>
//         </div>
//       </div>

//       <a href="#sobre" className="scroll-indicator" aria-label="Ir hacia abajo">
//         <ArrowDown size={14} />
//       </a>
//     </section>
//   )
// }
import './Hero.css'
import { ArrowDown, MapPin, Terminal as TerminalIcon } from 'lucide-react'
import miFoto from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-blur-one" aria-hidden="true" />
      <div className="hero-blur-two" aria-hidden="true" />
      <div className="hero-grid-mesh" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">

          <div className="hero-badge">
            <TerminalIcon size={12} className="terminal-anim" />
            <span className="mono-text">daniverdon.dev // fullstack</span>
          </div>

          <h1 className="hero-title">
            Desarrollo de <br />
            <span className="text-gradient">Software & Producto</span>
          </h1>

          <p className="hero-subtitle">
            Creación de sistemas con enfoque <em>End-to-End</em>: desde el diseño de interfaces
            y la arquitectura del backend, hasta la optimización de la infraestructura y su
            despliegue en producción.
            <span className="hero-location">
              <MapPin size={14} className="location-icon" /> Sevilla, España.
            </span>
          </p>

          <p className="hero-status">
            <span className="pulse-dot" /> Actualmente desplegando{' '}
            <a href="https://dogenda.es" target="_blank" rel="noreferrer" className="status-link">
              Dogenda.es
            </a>
          </p>

          <div className="hero-actions">
            <a href="#proyectos" className="cta-main">Ver Proyectos</a>
            <a href="#contacto" className="cta-secondary">Hablemos</a>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="image-container-premium">
            <div className="image-accent-glow" aria-hidden="true" />
            <img src={miFoto} alt="Daniel Verdón" className="profile-img-clean" />
          </div>
        </div>
      </div>

      <a href="#sobre" className="scroll-indicator" aria-label="Ir hacia abajo">
        <ArrowDown size={14} />
      </a>
    </section>
  )
}