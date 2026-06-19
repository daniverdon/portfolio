// import './Stack.css'
// import { Smartphone, Cpu, Globe, Cloud, Wrench } from 'lucide-react'

// const categories = [
//   {
//     label: 'Mobile Systems',
//     icon: Smartphone,
//     color: '#38bdf8', // Color general de la categoría (Sky)
//     items: [
//       { 
//         name: 'Flutter', 
//         note: 'Ecosistema iOS & Android', 
//         brandColor: '#02569B',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37M21.684 8.297L10.39 19.59 6.69 15.89l11.31-11.31h3.684zM21.684 15.703L17.985 19.4l3.699 3.699h3.697l-5.411-5.411 1.715-1.688z"/></svg>
//       },
//       { 
//         name: 'Dart', 
//         note: 'Arquitectura y lenguajes', 
//         brandColor: '#0175C2',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.1 5.43L1.4 12l2.7 6.57 6.57 2.7L17.24 20l5.36-5.36L24 12l-1.4-2.64-5.36-5.36-6.57 1.43zM12 1.4L5.43 4.1l-1.43 6.57L5.43 17.24 12 22.6l6.57-2.7 1.43-6.57-1.43-6.57z"/></svg>
//       },
//       { 
//         name: 'Firebase', 
//         note: 'Auth · FCM · Crashlytics', 
//         brandColor: '#FFCA28',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.572L6.012 2.19a.521.521 0 01.964-.162l2.3 4.292L3.89 15.572zm16.147-1.39l-2.59-13.06a.521.521 0 00-.916-.231L3.083 18.732l13.344-7.498 3.61 2.948a.52.52 0 00.831-.383z"/></svg>
//       },
//     ],
//   },
//   {
//     label: 'Backend & Core',
//     icon: Cpu,
//     color: '#4ade80', // Verde Spring
//     items: [
//       { 
//         name: 'Spring Boot', 
//         note: 'Java 21 Enterprise', 
//         brandColor: '#6DB33F',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm.512 18.46c-.524.316-1.12.512-1.72.512-1.804 0-3.264-1.46-3.264-3.264 0-.828.308-1.584.82-2.164l4.164 4.916zm3.432-3.432l-4.916-4.164c.58-.512 1.336-.82 2.164-.82 1.804 0 3.264 1.46 3.264 3.264 0 .6-.196 1.196-.512 1.72z"/></svg>
//       },
//       { 
//         name: 'Spring Security', 
//         note: 'JWT · Control de acceso', 
//         brandColor: '#6DB33F',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 6c1.66 0 3 1.34 3 3 0 1.09-.59 2.04-1.46 2.56L14 17h-4v-2.44C9.18 14.04 8.6 13.09 8.6 12c0-1.66 1.34-3 3-3z"/></svg>
//       },
//       { 
//         name: 'Flyway', 
//         note: 'Control de versiones DB', 
//         brandColor: '#CC0000',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L2 6v12l10 6 10-6V6L12 0zm0 3.3l6.7 4V11H14V9.2l-2-1.2-2 1.2V11H5.3V7.3l6.7-4zM10 13h4v5.3l-2 1.2-2-1.2V13z"/></svg>
//       },
//       { 
//         name: 'Stripe API', 
//         note: 'Suscripciones y webhooks', 
//         brandColor: '#635BFF',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.998 8.171c0-.585.512-.767 1.272-.767 1.144 0 2.548.334 3.555.864l.654-2.836c-1.127-.47-2.613-.706-4.072-.706-2.993 0-5.006 1.554-5.006 4.195 0 4.113 5.617 3.456 5.617 5.253 0 .668-.61 1.04-1.503 1.04-1.42 0-3.033-.51-4.237-1.157l-.67 2.898c1.378.636 3.272.936 4.793.936 3.125 0 5.244-1.47 5.244-4.236 0-4.32-5.647-3.6-5.647-5.517z"/></svg>
//       },
//     ],
//   },
//   {
//     label: 'Web Frontend',
//     icon: Globe,
//     color: '#22d3ee', // Cyan React
//     items: [
//       { 
//         name: 'React', 
//         note: 'Vite · SPA · Custom Hooks', 
//         brandColor: '#61DAFB',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.975c0 .324-.208.64-.564.918-1.522 1.19-4.004 2.547-7.14 3.633a36.96 36.96 0 011.602 4.12c.11.458.128.87.051 1.21-.137.606-.55 1.002-1.126 1.085-.187.027-.384.04-.587.04-1.009 0-2.228-.31-3.557-1.025-2.822-1.517-5.114-3.79-6.626-6.425-.662-.083-1.3-.178-1.91-.285-3.05-.536-5.223-1.321-6.28-2.268C.141 11.758 0 11.374 0 10.975c0-.323.208-.64.564-.917 1.522-1.19 4.004-2.548 7.14-3.634a36.962 36.962 0 01-1.601-4.12c-.11-.458-.129-.87-.052-1.21.137-.607.55-1.002 1.126-1.086.187-.026.384-.039.587-.039 1.009 0 2.228.311 3.557 1.025 2.822 1.518 5.114 3.79 6.626 6.425.662.083 1.3.178 1.91.286 3.05.535 5.223 1.32 6.28 2.267.282.25.423.634.423 1.033z"/></svg>
//       },
//       { 
//         name: 'HTML5 / CSS3', 
//         note: 'Diseño modular y variables', 
//         brandColor: '#E34F26',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.4 6H7.1l.3 3.5h8.1l-.4 4.2-3.1 1-3.1-1-.2-2.1H5.3l.4 5.7 6.3 2.1 6.3-2.1.8-8.8H7.6l-.3-3.5h11l-.2 2.5z"/></svg>
//       },
//       { 
//         name: 'Axios Client', 
//         note: 'Consumo asíncrono REST', 
//         brandColor: '#5A29E4',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h4.5l2.5-5.5h6l2.5 5.5H22L12 2zm-2 11l2-4.5 2 4.5h-4z"/></svg>
//       },
//     ],
//   },
//   {
//     label: 'Cloud & DevOps',
//     icon: Cloud,
//     color: '#f43f5e', // Coral
//     items: [
//       { 
//         name: 'Docker', 
//         note: 'Orquestación de servicios', 
//         brandColor: '#2496ED',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.99c0-.102-.084-.186-.186-.186h-2.119a.186.186 0 00-.186.186v1.902c0 .102.084.185.186.185m-2.954 0h2.118c.103 0 .186-.083.186-.185V8.99a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.902c0 .102.083.185.185.185m-2.964 0h2.119c.102 0 .185-.083.185-.185V8.99a.185.185 0 00-.185-.186H8.065a.185.185 0 00-.185.186v1.902c0 .102.083.185.185.185m-2.954 0h2.119c.103 0 .186-.083.186-.185V8.99a.186.186 0 00-.186-.186H5.11a.186.186 0 00-.186.186v1.902c0 .102.084.185.186.185m2.954-2.955h2.119c.102 0 .185-.083.185-.186V6.034a.185.185 0 00-.185-.186H8.065a.185.185 0 00-.185.186v1.902c0 .103.083.186.185.186m-2.954 0h2.119c.103 0 .186-.083.186-.186V6.034a.186.186 0 00-.186-.186H5.11a.186.186 0 00-.186.186v1.902c0 .103.084.186.186.186m2.954-2.964h2.119c.102 0 .185-.083.185-.186V3.07a.186.186 0 00-.185-.186H8.065a.185.185 0 00-.185.186v1.902c0 .102.083.186.185.186m5.918 5.928h2.119c.102 0 .185-.083.185-.185V8.99a.185.185 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.902c0 .102.084.185.186.185m-2.954-2.955h2.118c.103 0 .186-.083.186-.186V6.034a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.902c0 .103.083.186.185.186M23.99 9.93c-.121-.047-1.393-.51-3.233-.51-2.484 0-3.954 1.419-4.019 1.484V20.22c0 .083.07.153.153.153h1.03c.534 0 .973-.426 1.002-.955a5.4 5.4 0 015.394-5.086h.52c.083 0 .153-.07.153-.153V10.1c0-.083-.042-.144-.1-.17"/></svg>
//       },
//       { 
//         name: 'Nginx Proxy', 
//         note: 'Reverse proxy · Criptografía SSL', 
//         brandColor: '#009639',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 5.5l-9-4.5L3.5 5.5v13l9 4.5 9-4.5v-13zM12.5 17H11v-4.5L7.5 17H6V7h1.5v4.5L11 7h1.5v10zm5.5-3.5c0 2-1 3.5-3 3.5h-1.5V7H15c2 0 3 1.5 3 3.5v3zM15 8.5v3.5h.5c1 0 1.5-.5 1.5-1.7V10c-.1-1.1-.6-1.5-1.5-1.5H15z"/></svg>
//       },
//       { 
//         name: 'MySQL Server 8', 
//         note: 'Modelado relacional', 
//         brandColor: '#4479A1',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.142 0 9.25c0 3.232 2.146 6.077 5.447 7.64-.176.314-.422.65-.733.987-1.01 1.096-2.316 1.703-2.345 1.716a.375.375 0 00-.03.655c.038.024.96.586 2.457.586 1.56 0 2.946-.514 3.974-1.464 1.011.411 2.1.64 3.23.64 6.627 0 12-4.142 12-9.25S18.627 0 12 0"/></svg>
//       },
//       { 
//         name: 'Hetzner Cloud', 
//         note: 'Administración de entornos Linux', 
//         brandColor: '#D50C22',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm15.6 6H8.4v3.6h7.2V6zm0 6H8.4v6h7.2v-6z"/></svg>
//       },
//     ],
//   },
//   {
//     label: 'Herramientas de Control',
//     icon: Wrench,
//     color: '#a78bfa', // Morado
//     items: [
//       { 
//         name: 'Git & GitHub', 
//         note: 'Integridad de código base', 
//         brandColor: '#F05032',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.07.452a1.636 1.636 0 00-2.31 0l-1.92 1.918 3.21 3.21a1.64 1.64 0 012.35 2.35l3.24 3.24a1.64 1.64 0 01-.13 2.29l-3.21 3.21a1.64 1.64 0 01-2.28-.13l-3.24-3.24a1.64 1.64 0 01-2.35-2.35l-3.21-3.21a1.636 1.636 0 000 2.31l10.476 10.477a1.636 1.636 0 002.31 0l10.476-10.476a1.637 1.637 0 000-2.31"/></svg>
//       },
//       { 
//         name: 'Odoo ERP', 
//         note: 'Gestión y procesos corporativos', 
//         brandColor: '#714B67',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.327 0 12 0zm0 18c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z"/></svg>
//       },
//       { 
//         name: 'Codemagic CI', 
//         note: 'Despliegues automatizados', 
//         brandColor: '#F15A24',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L2 5v14l10 5 10-5V5L12 0zm0 4.2l6.5 3.3v7l-6.5 3.3-6.5-3.3v-7l6.5-3.3z"/></svg>
//       },
//       { 
//         name: 'Production Stores', 
//         note: 'Play Store & App Store Connect', 
//         brandColor: '#00A3E0',
//         svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z"/></svg>
//       },
//     ],
//   },
// ]

// export default function Stack() {
//   return (
//     <section id="stack" className="stack-section">
//       <div className="stack-container">
//         <div className="stack-header">
//           <p className="projects-eyebrow">Ecosistema Técnico</p>
//           <h2 className="projects-title">Stack & Herramientas<span>.</span></h2>
//         </div>

//         <div className="stack-grid">
//           {categories.map((cat) => {
//             const IconComponent = cat.icon
//             return (
//               <div 
//                 key={cat.label} 
//                 className="stack-group"
//                 style={{ '--cat-color': cat.color }}
//               >
//                 <div className="stack-cat-header">
//                   <div className="stack-icon-wrapper">
//                     <IconComponent size={18} />
//                   </div>
//                   <h3 className="stack-cat-title">{cat.label}</h3>
//                 </div>

//                 <ul className="stack-list">
//                   {cat.items.map((item) => (
//                     <li 
//                       key={item.name} 
//                       className="stack-item"
//                       style={{ '--tech-color': item.brandColor }}
//                     >
//                       <div className="stack-item-content">
//                         <div className="stack-tech-title-row">
//                           <div className="tech-brand-icon">
//                             {item.svg}
//                           </div>
//                           <span className="stack-name">{item.name}</span>
//                         </div>
//                         <span className="stack-note">{item.note}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
import './Stack.css'
import { Smartphone, Cpu, Globe, Cloud, Wrench } from 'lucide-react'
import { techBrandConfig } from '../data/brandIcons'

const categories = [
  {
    label: 'Mobile Systems',
    icon: Smartphone,
    color: '#38bdf8',
    items: [
      { name: 'Flutter', note: 'Ecosistema iOS & Android' },
      { name: 'Dart', note: 'Arquitectura y lenguajes' },
      { name: 'Firebase', note: 'Auth · FCM · Crashlytics' },
    ],
  },
  {
    label: 'Backend & Core',
    icon: Cpu,
    color: '#4ade80',
    items: [
      { name: 'Spring Boot', note: 'Java 21 Enterprise' },
      { name: 'Spring Security', note: 'JWT · Control de acceso' },
      { name: 'Flyway', note: 'Control de versiones DB' },
      { name: 'Stripe API', note: 'Suscripciones y webhooks' },
    ],
  },
  {
    label: 'Web Frontend',
    icon: Globe,
    color: '#22d3ee',
    items: [
      { name: 'React', note: 'Vite · SPA · Custom Hooks' },
      { name: 'HTML5 / CSS3', note: 'Diseño modular y variables' },
      { name: 'Axios Client', note: 'Consumo asíncrono REST' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    icon: Cloud,
    color: '#f43f5e',
    items: [
      { name: 'Docker', note: 'Orquestación de servicios' },
      { name: 'Nginx Proxy', note: 'Reverse proxy · Criptografía SSL' },
      { name: 'MySQL Server 8', note: 'Modelado relacional' },
      { name: 'Hetzner Cloud', note: 'Administración de entornos Linux' },
    ],
  },
  {
    label: 'Herramientas de Control',
    icon: Wrench,
    color: '#a78bfa',
    items: [
      { name: 'Git & GitHub', note: 'Integridad de código base' },
      { name: 'Odoo ERP', note: 'Gestión y procesos corporativos' },
      { name: 'Codemagic CI', note: 'Despliegues automatizados' },
      { name: 'Production Stores', note: 'Play Store & App Store Connect' },
    ],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="stack-section">
      <div className="stack-container">
        <div className="stack-header">
          <p className="projects-eyebrow">Ecosistema Técnico</p>
          <h2 className="projects-title">Stack & Herramientas<span>.</span></h2>
        </div>

        <div className="stack-grid">
          {categories.map((cat) => {
            const IconComponent = cat.icon
            return (
              <div
                key={cat.label}
                className="stack-group"
                style={{ '--cat-color': cat.color }}
              >
                <div className="stack-cat-header">
                  <div className="stack-icon-wrapper">
                    <IconComponent size={18} />
                  </div>
                  <h3 className="stack-cat-title">{cat.label}</h3>
                </div>

                <ul className="stack-list">
                  {cat.items.map((item) => {
                    const brand = techBrandConfig[item.name] || { color: 'rgba(255,255,255,0.4)', svg: null }
                    return (
                      <li
                        key={item.name}
                        className="stack-item"
                        style={{ '--tech-color': brand.color }}
                      >
                        <div className="stack-item-content">
                          <div className="stack-tech-title-row">
                            {brand.svg && (
                              <div className="tech-brand-icon">{brand.svg}</div>
                            )}
                            <span className="stack-name">{item.name}</span>
                          </div>
                          <span className="stack-note">{item.note}</span>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}