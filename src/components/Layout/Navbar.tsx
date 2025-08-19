import Logo from '@components/ui/Logo'
import { Link, NavLink } from 'react-router-dom'

const linkStyle: React.CSSProperties = { marginLeft: 16 }

export default function Navbar() {
  return (
    <nav style={{ display:'flex', alignItems:'center', padding:'12px 16px', borderBottom:'1px solid #eee' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems:'center', textDecoration:'none', color:'inherit' }}>
        <Logo />
      </Link>
      <div style={{ marginLeft: 'auto' }}>
        <NavLink to="/skills" style={linkStyle}>Skills</NavLink>
        <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
        <NavLink to="/algorithms" style={linkStyle}>Algorithms</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </div>
    </nav>
  )
}
