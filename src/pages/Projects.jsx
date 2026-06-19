// import './Projects.css'
// import { ExternalLink, Code2, Sparkles, AppWindow, ShieldCheck } from 'lucide-react'

// // Configuración unificada de marcas: SVGs oficiales y sus colores corporativos exactos
// const techBrandConfig = {
//   'Flutter': { color: '#02569B', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37M21.684 8.297L10.39 19.59 6.69 15.89l11.31-11.31h3.684zM21.684 15.703L17.985 19.4l3.699 3.699h3.697l-5.411-5.411 1.715-1.688z"/></svg> },
//   'Spring Boot': { color: '#6DB33F', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm.512 18.46c-.524.316-1.12.512-1.72.512-1.804 0-3.264-1.46-3.264-3.264 0-.828.308-1.584.82-2.164l4.164 4.916zm3.432-3.432l-4.916-4.164c.58-.512 1.336-.82 2.164-.82 1.804 0 3.264 1.46 3.264 3.264 0 .6-.196 1.196-.512 1.72z"/></svg> },
//   'Spring Security': { color: '#6DB33F', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 6c1.66 0 3 1.34 3 3 0 1.09-.59 2.04-1.46 2.56L14 17h-4v-2.44C9.18 14.04 8.6 13.09 8.6 12c0-1.66 1.34-3 3-3z"/></svg> },
//   'React': { color: '#61DAFB', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.975c0 .324-.208.64-.564.918-1.522 1.19-4.004 2.547-7.14 3.633a36.96 36.96 0 011.602 4.12c.11.458.128.87.051 1.21-.137.606-.55 1.002-1.126 1.085-.187.027-.384.04-.587.04-1.009 0-2.228-.31-3.557-1.025-2.822-1.517-5.114-3.79-6.626-6.425-.662-.083-1.3-.178-1.91-.285-3.05-.536-5.223-1.321-6.28-2.268C.141 11.758 0 11.374 0 10.975c0-.323.208-.64.564-.917 1.522-1.19 4.004-2.548 7.14-3.634a36.962 36.962 0 01-1.601-4.12c-.11-.458-.129-.87-.052-1.21.137-.607.55-1.002 1.126-1.086.187-.026.384-.039.587-.039 1.009 0 2.228.311 3.557 1.025 2.822 1.518 5.114 3.79 6.626 6.425.662.083 1.3.178 1.91.286 3.05.535 5.223 1.32 6.28 2.267.282.25.423.634.423 1.033z"/></svg> },
//   'MySQL': { color: '#4479A1', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.142 0 9.25c0 3.232 2.146 6.077 5.447 7.64-.176.314-.422.65-.733.987-1.01 1.096-2.316 1.703-2.345 1.716a.375.375 0 00-.03.655c.038.024.96.586 2.457.586 1.56 0 2.946-.514 3.974-1.464 1.011.411 2.1.64 3.23.64 6.627 0 12-4.142 12-9.25S18.627 0 12 0"/></svg> },
//   'Docker': { color: '#2496ED', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.99c0-.102-.084-.186-.186-.186h-2.119a.186.186 0 00-.186.186v1.902c0 .102.084.185.186.185m-2.954 0h2.118c.103 0 .186-.083.186-.185V8.99a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.902c0 .102.083.185.185.185m-2.964 0h2.119c.102 0 .185-.083.185-.185V8.99a.185.185 0 00-.185-.186H8.065a.185.185 0 00-.185.186v1.902c0 .102.083.185.185.185m-2.954 0h2.119c.103 0 .186-.083.186-.185V8.99a.186.186 0 00-.186-.186H5.11a.186.186 0 00-.186.186v1.902c0 .102.084.185.186.185m2.954-2.955h2.119c.102 0 .185-.083.185-.186V6.034a.185.185 0 00-.185-.186H8.065a.185.185 0 00-.185.186v1.902c0 .103.083.186.185.186m-2.954 0h2.119c.103 0 .186-.083.186-.186V6.034a.186.186 0 00-.186-.186H5.11a.186.186 0 00-.186.186v1.902c0 .103.084.186.186.186m2.954-2.964h2.119c.102 0 .185-.083.185-.186V3.07a.186.186 0 00-.185-.186H8.065a.185.185 0 00-.185.186v1.902c0 .102.083.186.185.186m5.918 5.928h2.119c.102 0 .185-.083.185-.185V8.99a.185.185 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.902c0 .102.084.185.186.185m-2.954-2.955h2.118c.103 0 .186-.083.186-.186V6.034a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.902c0 .103.083.186.185.186M23.99 9.93c-.121-.047-1.393-.51-3.233-.51-2.484 0-3.954 1.419-4.019 1.484V20.22c0 .083.07.153.153.153h1.03c.534 0 .973-.426 1.002-.955a5.4 5.4 0 015.394-5.086h.52c.083 0 .153-.07.153-.153V10.1c0-.083-.042-.144-.1-.17"/></svg> },
//   'Nginx': { color: '#009639', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 5.5l-9-4.5L3.5 5.5v13l9 4.5 9-4.5v-13zM12.5 17H11v-4.5L7.5 17H6V7h1.5v4.5L11 7h1.5v10zm5.5-3.5c0 2-1 3.5-3 3.5h-1.5V7H15c2 0 3 1.5 3 3.5v3zM15 8.5v3.5h.5c1 0 1.5-.5 1.5-1.7V10c-.1-1.1-.6-1.5-1.5-1.5H15z"/></svg> }
// }

// const listaProyectos = [
//   {
//     name: 'Dogenda',
//     tagline: 'SaaS / Producto Comercial Completo',
//     icon: Sparkles,
//     desc: 'Sistemas en producción para la gestión integral de peluquerías caninas. Diseñado desde cero: arquitectura backend tolerante a fallos, app móvil nativa y pasarela de pagos automatizada.',
//     features: ['Pagos con Stripe', 'Notificaciones Push', 'Multiplataforma (iOS/Android)'],
//     tags: ['Flutter', 'Spring Boot', 'React', 'MySQL', 'Docker', 'Nginx'],
//     linkWeb: 'https://dogenda.es',
//     linkCode: null,
//     badge: 'En Producción 🔥'
//   },
//   {
//     name: 'FitCore',
//     tagline: 'Aplicación IoT & Asistente Inteligente',
//     icon: AppWindow,
//     desc: 'Software de rendimiento deportivo enfocado en la automatización de rutinas mediante un motor de reglas. Proyecto final de grado calificado con la máxima nota por el tribunal.',
//     features: ['Seguridad JWT Avanzada', 'Arquitectura Limpia', 'Sincronización en tiempo real'],
//     tags: ['Flutter', 'Spring Boot', 'Spring Security', 'Java 21', 'MySQL'],
//     linkWeb: null,
//     linkCode: 'https://github.com/tu-usuario/fitcore',
//     badge: 'Proyecto DAM 🎓'
//   }
// ]

// export default function Projects() {
//   return (
//     <section id="proyectos" className="projects-section">
//       <div className="projects-container">
//         <div className="projects-header">
//           <p className="projects-eyebrow">Sistemas Desplegados</p>
//           <h2 className="projects-title">Proyectos con impacto.</h2>
//         </div>

//         <div className="projects-grid">
//           {listaProyectos.map((p, idx) => {
//             const IconoComponente = p.icon
//             return (
//               <div key={idx} className="project-card">
//                 <div className="card-top">
//                   <div className="project-icon-box">
//                     <IconoComponente size={20} />
//                   </div>
//                   <span className="project-badge">{p.badge}</span>
//                 </div>

//                 <div className="card-body">
//                   <h3 className="project-name">{p.name}</h3>
//                   <p className="project-tagline">{p.tagline}</p>
//                   <p className="project-desc">{p.desc}</p>
                  
//                   <ul className="project-features">
//                     {p.features.map((f, i) => (
//                       <li key={i}>
//                         <ShieldCheck size={14} className="feature-check" />
//                         <span>{f}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="card-footer">
//                   <div className="project-tags">
//                     {p.tags.map((t, i) => {
//                       const brand = techBrandConfig[t] || { color: 'rgba(255, 255, 255, 0.4)', svg: null }
//                       return (
//                         <span 
//                           key={i} 
//                           className="tech-tag"
//                           style={{ '--tag-brand-color': brand.color }}
//                         >
//                           {brand.svg && (
//                             <span className="tag-brand-icon">
//                               {brand.svg}
//                             </span>
//                           )}
//                           <span className="tag-text">{t}</span>
//                         </span>
//                       )
//                     })}
//                   </div>
                  
//                   <div className="project-links">
//                     {p.linkCode && (
//                       <a href={p.linkCode} target="_blank" rel="noreferrer" className="link-btn btn-secondary-card" title="Ver Código">
//                         <Code2 size={16} />
//                       </a>
//                     )}
//                     {p.linkWeb && (
//                       <a href={p.linkWeb} target="_blank" rel="noreferrer" className="link-btn btn-primary-card">
//                         <span>Visitar</span>
//                         <ExternalLink size={14} />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
import './Projects.css'
import { ExternalLink, Code2, Sparkles, AppWindow, ShieldCheck } from 'lucide-react'
import { techBrandConfig } from '../data/brandIcons'

const listaProyectos = [
  {
    name: 'Dogenda',
    tagline: 'SaaS / Producto Comercial Completo',
    icon: Sparkles,
    desc: 'Sistemas en producción para la gestión integral de peluquerías caninas. Diseñado desde cero: arquitectura backend tolerante a fallos, app móvil nativa y pasarela de pagos automatizada.',
    features: ['Pagos con Stripe', 'Notificaciones Push', 'Multiplataforma (iOS/Android)'],
    tags: ['Flutter', 'Spring Boot', 'React', 'MySQL', 'Docker', 'Nginx'],
    linkWeb: 'https://dogenda.es',
    linkCode: null, // Producto comercial, el código se protege
    badge: 'En Producción 🔥'
  },
  {
    name: 'FitCore',
    tagline: 'Aplicación IoT & Asistente Inteligente',
    icon: AppWindow,
    desc: 'Software de rendimiento deportivo enfocado en la automatización de rutinas mediante un motor de reglas. Proyecto final de grado calificado con la máxima nota por el tribunal.',
    features: ['Seguridad JWT Avanzada', 'Arquitectura Limpia', 'Sincronización en tiempo real'],
    tags: ['Flutter', 'Spring Boot', 'Spring Security', 'Java 21', 'MySQL'],
    linkWeb: null,
    linkCode: null, // TODO: añadir URL real cuando esté publicado en GitHub/Vercel
    badge: 'Proyecto DAM 🎓'
  }
]

export default function Projects() {
  return (
    <section id="proyectos" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <p className="projects-eyebrow">Sistemas Desplegados</p>
          <h2 className="projects-title">Proyectos con impacto.</h2>
        </div>

        <div className="projects-grid">
          {listaProyectos.map((p, idx) => {
            const IconoComponente = p.icon
            return (
              <div key={idx} className="project-card">
                <div className="card-top">
                  <div className="project-icon-box">
                    <IconoComponente size={20} />
                  </div>
                  <span className="project-badge">{p.badge}</span>
                </div>

                <div className="card-body">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-tagline">{p.tagline}</p>
                  <p className="project-desc">{p.desc}</p>

                  <ul className="project-features">
                    {p.features.map((f, i) => (
                      <li key={i}>
                        <ShieldCheck size={14} className="feature-check" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="project-tags">
                    {p.tags.map((t, i) => {
                      const brand = techBrandConfig[t] || { color: 'rgba(255, 255, 255, 0.4)', svg: null }
                      return (
                        <span
                          key={i}
                          className="tech-tag"
                          style={{ '--tag-brand-color': brand.color }}
                        >
                          {brand.svg && (
                            <span className="tag-brand-icon">{brand.svg}</span>
                          )}
                          <span className="tag-text">{t}</span>
                        </span>
                      )
                    })}
                  </div>

                  <div className="project-links">
                    {p.linkCode && (
                      <a href={p.linkCode} target="_blank" rel="noreferrer" className="link-btn btn-secondary-card" title="Ver Código">
                        <Code2 size={16} />
                      </a>
                    )}
                    {p.linkWeb && (
                      <a href={p.linkWeb} target="_blank" rel="noreferrer" className="link-btn btn-primary-card">
                        <span>Visitar</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}