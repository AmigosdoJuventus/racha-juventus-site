import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, User, MapPin, Calendar, Trophy, Target, Users, AlertTriangle } from 'lucide-react'

const AtletaProfile = () => {
  const { id } = useParams()

  // Dados mockados para demonstração
  const atletas = {
    1: {
      id: 1,
      nomeCompleto: 'João Silva Santos',
      idade: 28,
      dataNascimento: '15/03/1997',
      peso: '75 kg',
      altura: '1.78 m',
      posicao: 'Atacante',
      peDominante: 'Direito',
      localNascimento: 'São Paulo, SP',
      nacionalidade: 'Brasileira',
      membroDesde: '2023',
      foto: null,
      estatisticas: {
        jogos: 15,
        gols: 12,
        assistencias: 5,
        cartoesAmarelos: 2,
        cartoesVermelhos: 0
      }
    },
    2: {
      id: 2,
      nomeCompleto: 'Pedro Santos Oliveira',
      idade: 25,
      dataNascimento: '22/08/1999',
      peso: '70 kg',
      altura: '1.75 m',
      posicao: 'Meio-campo',
      peDominante: 'Esquerdo',
      localNascimento: 'Rio de Janeiro, RJ',
      nacionalidade: 'Brasileira',
      membroDesde: '2024',
      foto: null,
      estatisticas: {
        jogos: 12,
        gols: 8,
        assistencias: 10,
        cartoesAmarelos: 1,
        cartoesVermelhos: 0
      }
    }
  }

  const atleta = atletas[id]

  if (!atleta) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Atleta não encontrado</h1>
          <Link to="/atletas">
            <Button>Voltar para Atletas</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Botão Voltar */}
        <div className="mb-6">
          <Link to="/atletas">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Atletas
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal - Informações do Atleta */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header do Perfil */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  {/* Foto */}
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    {atleta.foto ? (
                      <img 
                        src={atleta.foto} 
                        alt={atleta.nomeCompleto}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-16 w-16 text-gray-400" />
                    )}
                  </div>

                  {/* Informações Básicas */}
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{atleta.nomeCompleto}</h1>
                    <p className="text-xl text-[var(--juventus-green)] font-semibold mb-4">{atleta.posicao}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center justify-center md:justify-start">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{atleta.idade} anos ({atleta.dataNascimento})</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{atleta.localNascimento}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dados Pessoais */}
            <Card>
              <CardHeader>
                <CardTitle>Dados Pessoais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Nome Completo</label>
                    <p className="text-gray-800 font-medium">{atleta.nomeCompleto}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Data de Nascimento</label>
                    <p className="text-gray-800 font-medium">{atleta.dataNascimento}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Idade</label>
                    <p className="text-gray-800 font-medium">{atleta.idade} anos</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Peso</label>
                    <p className="text-gray-800 font-medium">{atleta.peso}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Altura</label>
                    <p className="text-gray-800 font-medium">{atleta.altura}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Nacionalidade</label>
                    <p className="text-gray-800 font-medium">{atleta.nacionalidade}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dados Técnicos */}
            <Card>
              <CardHeader>
                <CardTitle>Dados Técnicos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Posição</label>
                    <p className="text-gray-800 font-medium">{atleta.posicao}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Pé Dominante</label>
                    <p className="text-gray-800 font-medium">{atleta.peDominante}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Local de Nascimento</label>
                    <p className="text-gray-800 font-medium">{atleta.localNascimento}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Membro Desde</label>
                    <p className="text-gray-800 font-medium">{atleta.membroDesde}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna Lateral - Estatísticas */}
          <div className="space-y-6">
            {/* Estatísticas de Desempenho */}
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas de Desempenho</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-blue-500" />
                      <span className="font-medium">Jogos</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">{atleta.estatisticas.jogos}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Target className="h-5 w-5 mr-3 text-green-500" />
                      <span className="font-medium">Gols</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">{atleta.estatisticas.gols}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 mr-3 text-purple-500" />
                      <span className="font-medium">Assistências</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">{atleta.estatisticas.assistencias}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-3 text-yellow-500" />
                      <span className="font-medium">Cartões Amarelos</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">{atleta.estatisticas.cartoesAmarelos}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-3 text-red-500" />
                      <span className="font-medium">Cartões Vermelhos</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">{atleta.estatisticas.cartoesVermelhos}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Médias */}
            <Card>
              <CardHeader>
                <CardTitle>Médias por Jogo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gols por jogo:</span>
                    <span className="font-semibold">
                      {(atleta.estatisticas.gols / atleta.estatisticas.jogos).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assistências por jogo:</span>
                    <span className="font-semibold">
                      {(atleta.estatisticas.assistencias / atleta.estatisticas.jogos).toFixed(2)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ações */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Link to="/temporada" className="block">
                    <Button className="w-full">Ver na Classificação</Button>
                  </Link>
                  <Link to="/atletas" className="block">
                    <Button variant="outline" className="w-full">Outros Atletas</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AtletaProfile

