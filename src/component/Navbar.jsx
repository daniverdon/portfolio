import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#sobre' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquear el scroll del cuerpo cuando el menú móvil está activo
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="nav-logo" onClick={() => setOpen(false)}>
          Daniel<span>.dev</span>
        </a>

        {/* Capa oscura de fondo al abrir el menú en móviles */}
        <div className={`nav-overlay ${open ? 'active' : ''}`} onClick={() => setOpen(false)} />

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button 
          className={`nav-burger ${open ? 'open' : ''}`} 
          onClick={() => setOpen(!open)} 
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}