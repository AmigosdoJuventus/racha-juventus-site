import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Trophy, Target, Users } from 'lucide-react'

const Temporada = () => {
  const [activeTab, setActiveTab] = useState('calendario')

  // Dados mockados para demonstração
  const rodadas = Array.from({ length: 48 }, (_, i) => {
    const dataInicio = new Date('2025-01-12')
    const dataRodada = new Date(dataInicio.getTime() + (i * 7 * 24 * 60 * 60 * 1000))
    const status = i < 3 ? 'realizada' : i === 3 ? 'proxima' : 'agendada'
    
    return {
      id: i + 1,
      numero: i + 1,
      data: dataRodada.toLocaleDateString('pt-BR'),
      status,
      resultado: status === 'realizada' ? `Time A ${Math.floor(Math.random() * 5)} x ${Math.floor(Math.random() * 5)} Time B` : null
    }
  })

  const classificacao = [
    { posicao: 1, nome: 'João Silva', jogos: 3, gols: 5, assistencias: 2, pontos: 15 },
    { posicao: 2, nome: 'Pedro Santos', jogos: 3, gols: 4, assistencias: 3, pontos: 14 },
    { posicao: 3, nome: 'Carlos Oliveira', jogos: 3, gols: 3, assistencias: 4, pontos: 13 },
    { posicao: 4, nome: 'Rafael Costa', jogos: 3, gols: 3, assistencias: 2, pontos: 11 },
    { posicao: 5, nome: 'Lucas Ferreira', jogos: 3, gols: 2, assistencias: 3, pontos: 10 }
  ]

  const estatisticasGerais = [
    { label: 'Total de Rodadas', valor: '48', icon: Calendar },
    { label: 'Rodadas Realizadas', valor: '3', icon: Trophy },
    { label: 'Gols Marcados', valor: '47', icon: Target },
    { label: 'Atletas Participando', valor: '24', icon: Users }
  ]

  const tabs = [
    { id: 'calendario', label: 'Calendário' },
    { id: 'classificacao', label: 'Classificação' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'estatisticas', label: 'Estatísticas' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'realizada': return 'bg-green-100 text-green-800'
      case 'proxima': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'realizada': return 'Realizada'
      case 'proxima': return 'Próxima'
      default: return 'Agendada'
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Temporada 2025</h1>
          <p className="text-xl text-gray-600">48 Rodadas de Pura Emoção</p>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {estatisticasGerais.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-[var(--juventus-green)]" />
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.valor}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'outline'}
                onClick={() => setActiveTab(tab.id)}
                className="mb-2"
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Conteúdo das Tabs */}
        <div className="space-y-6">
          {/* Calendário */}
          {activeTab === 'calendario' && (
            <Card>
              <CardHeader>
                <CardTitle>Calendário das Rodadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rodadas.map((rodada) => (
                    <div key={rodada.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold">Rodada {rodada.numero}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rodada.status)}`}>
                          {getStatusText(rodada.status)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{rodada.data}</div>
                      {rodada.resultado && (
                        <div className="text-sm font-medium text-gray-800">{rodada.resultado}</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Classificação */}
          {activeTab === 'classificacao' && (
            <Card>
              <CardHeader>
                <CardTitle>Classificação dos Atletas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Pos</th>
                        <th className="text-left py-3 px-2">Atleta</th>
                        <th className="text-center py-3 px-2">Jogos</th>
                        <th className="text-center py-3 px-2">Gols</th>
                        <th className="text-center py-3 px-2">Assist.</th>
                        <th className="text-center py-3 px-2">Pontos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classificacao.map((atleta) => (
                        <tr key={atleta.posicao} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-2 font-semibold">{atleta.posicao}º</td>
                          <td className="py-3 px-2">{atleta.nome}</td>
                          <td className="py-3 px-2 text-center">{atleta.jogos}</td>
                          <td className="py-3 px-2 text-center">{atleta.gols}</td>
                          <td className="py-3 px-2 text-center">{atleta.assistencias}</td>
                          <td className="py-3 px-2 text-center font-semibold">{atleta.pontos}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Resultados */}
          {activeTab === 'resultados' && (
            <Card>
              <CardHeader>
                <CardTitle>Resultados das Rodadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rodadas.filter(r => r.status === 'realizada').map((rodada) => (
                    <div key={rodada.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">Rodada {rodada.numero}</div>
                          <div className="text-sm text-gray-600">{rodada.data}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{rodada.resultado}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Estatísticas */}
          {activeTab === 'estatisticas' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Artilheiros</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {classificacao.slice(0, 5).map((atleta, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{atleta.nome}</span>
                        <span className="font-semibold">{atleta.gols} gols</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Assistências</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {classificacao.sort((a, b) => b.assistencias - a.assistencias).slice(0, 5).map((atleta, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{atleta.nome}</span>
                        <span className="font-semibold">{atleta.assistencias} assist.</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Temporada

