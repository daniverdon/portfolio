// import './Education.css'
// import { Calendar, BookOpen } from 'lucide-react'

// // Mapeo de colores corporativos para destacar los tags técnicos en tu formación
// const eduTechBrandConfig = {
//   'DAM': '#7f77dd',
//   'Java': '#ED8B00',
//   'MySQL': '#4479A1',
//   'Odoo': '#714B67',
//   'React': '#61DAFB',
//   'Vite': '#646CFF',
//   'Flutter': '#02569B',
//   'Spring Boot': '#6DB33F',
//   'Docker': '#2496ED',
//   'Stripe': '#635BFF'
// }

// const estudios = [
//   {
//     title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
//     institution: 'Cesur Cartuja (Sevilla)',
//     date: '2024 - 2026',
//     description: 'Especialización en desarrollo de software cross-platform, programación orientada a objetos con Java, bases de datos relacionales con MySQL, sistemas de gestión empresarial (Odoo) y arquitecturas backend.',
//     current: true,
//     techs: ['DAM', 'Java', 'MySQL', 'Odoo', 'Spring Boot']
//   },
//   {
//     title: 'Desarrollo Frontend & Tecnologías Web',
//     institution: 'Formación Autodidacta Continua',
//     date: '2025 - Presente',
//     description: 'Especialización en la creación de interfaces de usuario modernas y reactivas. Aprendizaje y aplicación práctica de HTML5, CSS3 moderno (Flexbox, Grid) y React con Vite, gestionando estados, hooks y enrutamiento dinámico.',
//     current: true,
//     techs: ['React', 'Vite']
//   },
//   {
//     title: 'Ingeniería de Producto & Ecosistema Cloud',
//     institution: 'Proyectos Propios & Despliegues Reales',
//     date: 'Continuo',
//     description: 'Diseño, arquitectura y despliegue de soluciones SaaS reales en producción. Modelado avanzado con Flutter, Spring Boot (Java 21), Spring Security con JWT, contenedores Docker, proxies Nginx y pasarelas de pago automatizadas con Stripe.',
//     current: true,
//     techs: ['Flutter', 'Spring Boot', 'Docker', 'Stripe']
//   }
// ]

// export default function Education() {
//   return (
//     <section id="formacion" className="education-section">
//       <div className="education-container">
//         <div className="education-header">
//           <p className="projects-eyebrow">Trayectoria</p>
//           <h2 className="projects-title">Formación y Enfoque.</h2>
//         </div>

//         <div className="education-timeline">
//           {estudios.map((edu, i) => (
//             <div key={i} className="timeline-item">
//               <div className="timeline-dot-wrapper">
//                 <div className={`timeline-dot ${edu.current ? 'active' : ''}`} />
//                 {i !== estudios.length - 1 && <div className="timeline-line" />}
//               </div>
              
//               <div className="timeline-content">
//                 <div className="timeline-meta-row">
//                   <div className="timeline-date">
//                     <Calendar size={12} />
//                     <span>{edu.date}</span>
//                   </div>
//                 </div>

//                 <h3 className="timeline-title">{edu.title}</h3>
                
//                 <p className="timeline-institution">
//                   <BookOpen size={13} />
//                   <span>{edu.institution}</span>
//                 </p>
                
//                 <p className="timeline-desc">{edu.description}</p>

//                 <div className="timeline-techs">
//                   {edu.techs.map((tech, idx) => {
//                     const brandColor = eduTechBrandConfig[tech] || 'rgba(255, 255, 255, 0.1)'
//                     return (
//                       <span 
//                         key={idx} 
//                         className="edu-tag"
//                         style={{ '--edu-brand-color': brandColor }}
//                       >
//                         {tech}
//                       </span>
//                     )
//                   })}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import './Education.css'
import { Calendar, BookOpen } from 'lucide-react'

const eduTechBrandConfig = {
  'DAM': '#7f77dd',
  'Java': '#ED8B00',
  'MySQL': '#4479A1',
  'Odoo': '#714B67',
  'React': '#61DAFB',
  'Vite': '#646CFF',
  'Flutter': '#02569B',
  'Spring Boot': '#6DB33F',
  'Docker': '#2496ED',
  'Stripe': '#635BFF'
}

const estudios = [
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    institution: 'Cesur Cartuja (Sevilla)',
    date: '2024 - 2026',
    description: 'Especialización en desarrollo de software cross-platform, programación orientada a objetos con Java, bases de datos relacionales con MySQL, sistemas de gestión empresarial (Odoo) y arquitecturas backend.',
    current: true,
    techs: ['DAM', 'Java', 'MySQL', 'Odoo', 'Spring Boot']
  },
  {
    title: 'Desarrollo Frontend & Tecnologías Web',
    institution: 'Formación Autodidacta Continua',
    date: '2025 - Presente',
    description: 'Especialización en la creación de interfaces de usuario modernas y reactivas. Aprendizaje y aplicación práctica de HTML5, CSS3 moderno (Flexbox, Grid) y React con Vite, gestionando estados, hooks y enrutamiento dinámico.',
    current: true,
    techs: ['React', 'Vite']
  },
  {
    title: 'Ingeniería de Producto & Ecosistema Cloud',
    institution: 'Proyectos Propios & Despliegues Reales',
    date: 'Continuo',
    description: 'Diseño, arquitectura y despliegue de soluciones SaaS reales en producción. Modelado avanzado con Flutter, Spring Boot (Java 21), Spring Security con JWT, contenedores Docker, proxies Nginx y pasarelas de pago automatizadas con Stripe.',
    current: true,
    techs: ['Flutter', 'Spring Boot', 'Docker', 'Stripe']
  }
]

export default function Education() {
  return (
    <section id="formacion" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <p className="projects-eyebrow">Trayectoria</p>
          <h2 className="projects-title">Formación y Enfoque.</h2>
        </div>

        <div className="education-timeline">
          {estudios.map((edu, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className={`timeline-dot ${edu.current ? 'active' : ''}`} />
                {i !== estudios.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-content">
                <div className="timeline-meta-row">
                  <div className="timeline-date">
                    <Calendar size={12} />
                    <span>{edu.date}</span>
                  </div>
                </div>

                <h3 className="timeline-title">{edu.title}</h3>

                <p className="timeline-institution">
                  <BookOpen size={13} />
                  <span>{edu.institution}</span>
                </p>

                <p className="timeline-desc">{edu.description}</p>

                <div className="timeline-techs">
                  {edu.techs.map((tech, idx) => {
                    const brandColor = eduTechBrandConfig[tech] || 'rgba(255, 255, 255, 0.1)'
                    return (
                      <span
                        key={idx}
                        className="edu-tag"
                        style={{ '--edu-brand-color': brandColor }}
                      >
                        {tech}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}