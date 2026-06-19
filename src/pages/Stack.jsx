
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