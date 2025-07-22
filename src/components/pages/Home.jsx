import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Users, Trophy, Target } from 'lucide-react'
import logoJuventus from '../../assets/logo-juventus.jpg'

const Home = () => {
  // Dados mockados para demonstração
  const proximasRodadas = [
    { id: 1, data: '12/01/2025', rodada: 'Rodada 1', status: 'Próxima' },
    { id: 2, data: '19/01/2025', rodada: 'Rodada 2', status: 'Agendada' },
    { id: 3, data: '26/01/2025', rodada: 'Rodada 3', status: 'Agendada' }
  ]

  const ultimosResultados = [
    { id: 1, data: '05/01/2025', resultado: 'Time A 3 x 2 Time B' },
    { id: 2, data: '29/12/2024', resultado: 'Time C 1 x 4 Time D' },
    { id: 3, data: '22/12/2024', resultado: 'Time E 2 x 2 Time F' }
  ]

  const estatisticas = [
    { icon: Users, label: 'Atletas Cadastrados', valor: '24' },
    { icon: Calendar, label: 'Rodadas Realizadas', valor: '3' },
    { icon: Target, label: 'Gols Marcados', valor: '47' },
    { icon: Trophy, label: 'Temporada Atual', valor: '2025' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--juventus-dark)] to-[var(--juventus-green)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={logoJuventus} 
              alt="Racha do Juventus" 
              className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Seja bem vindo ao Racha do Juventus
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            O melhor futebol de final de semana do Conjunto Ceará
          </p>
          <Link to="/area-socio">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Faça parte do nosso time!
            </Button>
          </Link>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Sobre o Racha do Juventus</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              O Racha do Juventus é mais que um simples grupo de futebol. Somos uma família unida pela paixão pelo esporte mais popular do mundo. Todos os domingos nos reunimos para viver momentos únicos de competição, amizade e diversão.
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Estatísticas da Temporada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {estatisticas.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-[var(--juventus-green)]" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.valor}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Próximas Rodadas e Últimos Resultados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Próximas Rodadas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-[var(--juventus-green)]" />
                  Próximas Rodadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {proximasRodadas.map((rodada) => (
                    <div key={rodada.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold">{rodada.rodada}</div>
                        <div className="text-sm text-gray-600">{rodada.data}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        rodada.status === 'Próxima' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {rodada.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="/temporada">
                    <Button variant="outline" className="w-full">
                      Ver Calendário Completo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Últimos Resultados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-[var(--juventus-green)]" />
                  Últimos Resultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ultimosResultados.map((resultado) => (
                    <div key={resultado.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold">{resultado.resultado}</div>
                      <div className="text-sm text-gray-600">{resultado.data}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="/temporada">
                    <Button variant="outline" className="w-full">
                      Ver Todos os Resultados
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[var(--juventus-dark)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para entrar em campo?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Cadastre-se na Área do Sócio e participe da Temporada 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/area-socio">
              <Button size="lg" variant="secondary">
                Criar Conta
              </Button>
            </Link>
            <Link to="/atletas">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[var(--juventus-dark)]">
                Conhecer Atletas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

