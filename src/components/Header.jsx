import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, User, LogOut } from 'lucide-react'
import logoJuventus from '../assets/logo-juventus.jpg'

const Header = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/')
  }

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Temporada 2025', path: '/temporada' },
    { name: 'Atletas', path: '/atletas' },
    { name: 'Área do Sócio', path: '/area-socio' }
  ]

  return (
    <header className="bg-[var(--juventus-dark)] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logoJuventus} 
              alt="Racha do Juventus" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold">Racha do Juventus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-[var(--juventus-green)] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/area-atleta">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-[var(--juventus-green)]">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                  className="text-white hover:bg-red-600"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Link to="/area-socio">
                <Button variant="secondary" size="sm">
                  Entrar
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-600">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-[var(--juventus-green)] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <div className="flex flex-col space-y-2 pt-3 border-t border-gray-600">
                  <Link 
                    to="/area-atleta"
                    className="flex items-center space-x-2 hover:text-[var(--juventus-green)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    <span>{user.name}</span>
                  </Link>
                  <button 
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="flex items-center space-x-2 text-red-400 hover:text-red-300"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sair</span>
                  </button>
                </div>
              ) : (
                <Link 
                  to="/area-socio"
                  className="pt-3 border-t border-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="secondary" size="sm" className="w-full">
                    Entrar
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

