// import './Contact.css'
// import { Mail, ArrowUpRight } from 'lucide-react'

// export default function Contact() {
//   return (
//     <section id="contacto" className="contact-section">
//       <div className="contact-container">
//         <p className="projects-eyebrow">// Disponibilidad</p>
        
//         <h2 className="contact-huge-title">
//           ¿Tienes un proyecto? <br />
//           <span className="text-gradient">Hagámoslo real.</span>
//         </h2>
        
//         <p className="contact-minimal-desc">
//           Ya sea para integrarme en tu equipo de ingeniería de software o para desarrollar un producto SaaS a medida como freelance, estoy listo para aportar valor.
//         </p>

//         <div className="contact-buttons-group">
//           {/* Botón principal: Correo Electrónico */}
//           <a href="mailto:daniverdonabr@gmail.com" className="contact-btn-primary">
//             <Mail size={16} />
//             <span>daniverdonabr@gmail.com</span>
//             <ArrowUpRight size={14} className="arrow-icon" />
//           </a>

//           {/* Botón secundario: LinkedIn con Efecto de Marca */}
//           <a 
//             href="https://www.linkedin.com/in/daniel-verdon-sanchez-275aaa35a/" 
//             target="_blank" 
//             rel="noreferrer" 
//             className="contact-btn-secondary"
//           >
//             <span className="linkedin-brand-icon">
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                 <rect x="2" y="9" width="4" height="12"></rect>
//                 <circle cx="4" cy="4" r="2"></circle>
//               </svg>
//             </span>
//             <span>Conectar en LinkedIn</span>
//             <ArrowUpRight size={14} className="arrow-icon-secondary" />
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }
import './Contact.css'
import { Mail, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <p className="projects-eyebrow">// Disponibilidad</p>

        <h2 className="contact-huge-title">
          ¿Tienes un proyecto? <br />
          <span className="text-gradient">Hagámoslo real.</span>
        </h2>

        <p className="contact-minimal-desc">
          Ya sea para integrarme en tu equipo de ingeniería de software o para desarrollar un
          producto SaaS a medida como freelance, estoy listo para aportar valor.
        </p>

        <div className="contact-buttons-group">
          <a href="mailto:daniverdonabr@gmail.com" className="contact-btn-primary">
            <Mail size={16} />
            <span>daniverdonabr@gmail.com</span>
            <ArrowUpRight size={14} className="arrow-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-verdon-sanchez-275aaa35a/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn-secondary"
          >
            <span className="linkedin-brand-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </span>
            <span>Conectar en LinkedIn</span>
            <ArrowUpRight size={14} className="arrow-icon-secondary" />
          </a>
        </div>
      </div>
    </section>
  )
}