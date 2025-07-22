import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[var(--juventus-dark)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Racha do Juventus</h3>
            <p className="text-gray-300 text-sm">
              O melhor futebol de final de semana da região. Somos uma família unida pela paixão pelo esporte mais popular do mundo.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-[var(--juventus-green)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/temporada" className="text-gray-300 hover:text-[var(--juventus-green)] transition-colors">
                  Temporada 2025
                </a>
              </li>
              <li>
                <a href="/atletas" className="text-gray-300 hover:text-[var(--juventus-green)] transition-colors">
                  Atletas
                </a>
              </li>
              <li>
                <a href="/area-socio" className="text-gray-300 hover:text-[var(--juventus-green)] transition-colors">
                  Área do Sócio
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>Email: contato@rachadojuventus.com</p>
              <p>WhatsApp: (11) 99999-9999</p>
              <p>Jogos: Domingos às 8h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-300 text-sm flex items-center justify-center">
            Feito com <Heart className="h-4 w-4 mx-1 text-red-500" /> para o Racha do Juventus
          </p>
          <p className="text-gray-400 text-xs mt-2">
            © 2025 Racha do Juventus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

