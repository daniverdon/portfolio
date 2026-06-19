// import './About.css'
// import { Rocket, Layers, CircleCheck, Terminal } from 'lucide-react'

// export default function About() {
//   return (
//     <section id="sobre" className="about-section">
//       <div className="about-container">
//         <p className="projects-eyebrow">Sobre mí</p>
        
//         <div className="about-grid">
//           {/* Bloque Izquierdo: Pitch Profesional y Personal */}
//           <div className="about-text">
//             <h2 className="projects-title">Construyo productos,<br />no solo código.</h2>
//             <p>
//               Aúno la rigidez técnica del ciclo superior en **Desarrollo de Aplicaciones Multiplataforma (DAM)** con la agilidad del desarrollo independiente, creando soluciones de software íntegras desde Sevilla, España.
//             </p>
//             <p>
//               No me limito a picar código en una única capa: diseño la arquitectura del backend en **Java (Spring Boot)**, moldeo aplicaciones nativas con **Flutter** y estructuro paneles web interactivos bajo **React**. Mi objetivo es conectar la ingeniería con la usabilidad real.
//             </p>
//             <p>
//               Llevo tiempo construyendo mis propios sistemas con un enfoque claro de negocio: resolver problemas reales del día a día mediante software escalable y monetizable. **Dogenda** es el primer SaaS de este ecosistema, desplegado y optimizado en servidores Linux mediante contenedores **Docker** y proxies inversos con **Nginx**.
//             </p>
//           </div>

//           {/* Bloque Derecho: Cuadrícula de Métricas Bento (Métricas de Ingeniería) */}
//           <div className="about-stats-grid">
//             <div className="about-stat-card">
//               <div className="stat-card-header">
//                 <span className="about-stat-num">02</span>
//                 <div className="stat-icon-wrapper">
//                   <Rocket size={16} />
//                 </div>
//               </div>
//               <span className="about-stat-label">Sistemas Lanzados</span>
//             </div>
            
//             <div className="about-stat-card">
//               <div className="stat-card-header">
//                 <span className="about-stat-num">03</span>
//                 <div className="stat-icon-wrapper">
//                   <Layers size={16} />
//                 </div>
//               </div>
//               <span className="about-stat-label">Capas por Proyecto</span>
//             </div>
            
//             <div className="about-stat-card">
//               <div className="stat-card-header">
//                 <span className="about-stat-num">01</span>
//                 <div className="stat-icon-wrapper">
//                   <CircleCheck size={16} />
//                 </div>
//               </div>
//               <span className="about-stat-label">SaaS en Producción</span>
//             </div>
            
//             <div className="about-stat-card about-accent-card">
//               <div className="stat-card-header">
//                 <span className="about-stat-num">E2E</span>
//                 <div className="stat-icon-wrapper">
//                   <Terminal size={16} />
//                 </div>
//               </div>
//               <span className="about-stat-label">Despliegues Propios</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import './About.css'
import { Rocket, Layers, CircleCheck, Terminal } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <p className="projects-eyebrow">Sobre mí</p>

        <div className="about-grid">
          {/* Bloque Izquierdo: Pitch Profesional y Personal */}
          <div className="about-text">
            <h2 className="projects-title">Construyo productos,<br />no solo código.</h2>
            <p>
              Combino la base técnica del ciclo superior en{' '}
              <strong>Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> con la agilidad
              del desarrollo independiente, creando soluciones de software completas desde Sevilla.
            </p>
            <p>
              No me limito a una sola capa: diseño la arquitectura backend en{' '}
              <strong>Java (Spring Boot)</strong>, desarrollo apps nativas con{' '}
              <strong>Flutter</strong> y construyo paneles web con <strong>React</strong>.
              Mi objetivo es resolver problemas reales con software escalable —{' '}
              <strong>Dogenda</strong> es el primer SaaS de ese ecosistema, desplegado en
              servidores propios con <strong>Docker</strong> y <strong>Nginx</strong>.
            </p>
          </div>

          {/* Bloque Derecho: Cuadrícula de Métricas Bento */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="stat-card-header">
                <span className="about-stat-num">02</span>
                <div className="stat-icon-wrapper">
                  <Rocket size={16} />
                </div>
              </div>
              <span className="about-stat-label">Sistemas Lanzados</span>
            </div>

            <div className="about-stat-card">
              <div className="stat-card-header">
                <span className="about-stat-num">03</span>
                <div className="stat-icon-wrapper">
                  <Layers size={16} />
                </div>
              </div>
              <span className="about-stat-label">Capas por Proyecto</span>
            </div>

            <div className="about-stat-card">
              <div className="stat-card-header">
                <span className="about-stat-num">01</span>
                <div className="stat-icon-wrapper">
                  <CircleCheck size={16} />
                </div>
              </div>
              <span className="about-stat-label">SaaS en Producción</span>
            </div>

            <div className="about-stat-card about-accent-card">
              <div className="stat-card-header">
                <span className="about-stat-num">E2E</span>
                <div className="stat-icon-wrapper">
                  <Terminal size={16} />
                </div>
              </div>
              <span className="about-stat-label">Despliegues Propios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}