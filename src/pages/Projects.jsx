
import './Projects.css'
import { ExternalLink, Code2, Sparkles, AppWindow, ShieldCheck, Car } from 'lucide-react'
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
    name: 'The Beetle Wedding Experience',
    tagline: 'Landing Page Premium & Modular',
    icon: ExternalLink, // Un icono de enlace externo o puedes importar uno de coche si tienes en lucide
    desc: 'Sitio web exclusivo para el alquiler de un Volkswagen Beetle clásico para bodas y eventos. Migrado de una plantilla estática a React para modularizar componentes e integrar variables de entorno seguras.',
    features: ['Diseño 100% Responsivo', 'Efecto Parallax Nativo', 'Variables de Entorno (.env)'],
    tags: ['React', 'Vite', 'CSS'], // Asegúrate de que coincidan con tus claves de techBrandConfig
    linkWeb: 'https://beetle-wedding-landing.vercel.app',
    linkCode: 'https://github.com/daniverdon/beetle-wedding-landing',
    badge: 'Desplegado 🚀'
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