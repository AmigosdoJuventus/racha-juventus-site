import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, User, MapPin, Calendar } from 'lucide-react'

const Atletas = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPosition, setSelectedPosition] = useState('all')

  // Dados mockados para demonstração
  const atletas = [
    {
      id: 1,
      nome: 'João Silva',
      idade: 28,
      posicao: 'Atacante',
      localNascimento: 'São Paulo, SP',
      membroDesde: '2023',
      jogos: 15,
      gols: 12,
      assistencias: 5,
      foto: null
    },
    {
      id: 2,
      nome: 'Pedro Santos',
      idade: 25,
      posicao: 'Meio-campo',
      localNascimento: 'Rio de Janeiro, RJ',
      membroDesde: '2024',
      jogos: 12,
      gols: 8,
      assistencias: 10,
      foto: null
    },
    {
      id: 3,
      nome: 'Carlos Oliveira',
      idade: 30,
      posicao: 'Zagueiro',
      localNascimento: 'Belo Horizonte, MG',
      membroDesde: '2022',
      jogos: 18,
      gols: 3,
      assistencias: 2,
      foto: null
    },
    {
      id: 4,
      nome: 'Rafael Costa',
      idade: 27,
      posicao: 'Goleiro',
      localNascimento: 'Salvador, BA',
      membroDesde: '2023',
      jogos: 16,
      gols: 0,
      assistencias: 0,
      foto: null
    },
    {
      id: 5,
      nome: 'Lucas Ferreira',
      idade: 24,
      posicao: 'Lateral',
      localNascimento: 'Curitiba, PR',
      membroDesde: '2024',
      jogos: 10,
      gols: 2,
      assistencias: 6,
      foto: null
    },
    {
      id: 6,
      nome: 'André Souza',
      idade: 29,
      posicao: 'Meio-campo',
      localNascimento: 'Fortaleza, CE',
      membroDesde: '2023',
      jogos: 14,
      gols: 6,
      assistencias: 8,
      foto: null
    },
    {
      id: 7,
      nome: 'Bruno Lima',
      idade: 26,
      posicao: 'Atacante',
      localNascimento: 'Recife, PE',
      membroDesde: '2024',
      jogos: 11,
      gols: 9,
      assistencias: 3,
      foto: null
    },
    {
      id: 8,
      nome: 'Thiago Alves',
      idade: 31,
      posicao: 'Zagueiro',
      localNascimento: 'Porto Alegre, RS',
      membroDesde: '2022',
      jogos: 17,
      gols: 1,
      assistencias: 1,
      foto: null
    }
  ]

  const posicoes = [
    { value: 'all', label: 'Todas as Posições' },
    { value: 'Goleiro', label: 'Goleiro' },
    { value: 'Zagueiro', label: 'Zagueiro' },
    { value: 'Lateral', label: 'Lateral' },
    { value: 'Meio-campo', label: 'Meio-campo' },
    { value: 'Atacante', label: 'Atacante' }
  ]

  // Filtrar atletas
  const atletasFiltrados = atletas.filter(atleta => {
    const matchesSearch = atleta.nome.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPosition = selectedPosition === 'all' || atleta.posicao === selectedPosition
    return matchesSearch && matchesPosition
  })

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nossos Craques</h1>
          <p className="text-xl text-gray-600">
            Conheça os atletas que fazem parte da família Racha do Juventus
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Buscar por nome..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filtrar por posição" />
                    </SelectTrigger>
                    <SelectContent>
                      {posicoes.map((posicao) => (
                        <SelectItem key={posicao.value} value={posicao.value}>
                          {posicao.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid de Atletas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {atletasFiltrados.map((atleta) => (
            <Card key={atleta.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link to={`/atleta/${atleta.id}`}>
                <CardContent className="p-6">
                  {/* Foto do Atleta */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                      {atleta.foto ? (
                        <img 
                          src={atleta.foto} 
                          alt={atleta.nome}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      ) : (
                        <User className="h-10 w-10 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Informações do Atleta */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{atleta.nome}</h3>
                    <p className="text-[var(--juventus-green)] font-medium mb-3">{atleta.posicao}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{atleta.idade} anos</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{atleta.localNascimento}</span>
                      </div>
                    </div>

                    {/* Estatísticas Rápidas */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-lg font-semibold text-gray-800">{atleta.jogos}</div>
                          <div className="text-xs text-gray-600">Jogos</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-gray-800">{atleta.gols}</div>
                          <div className="text-xs text-gray-600">Gols</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-gray-800">{atleta.assistencias}</div>
                          <div className="text-xs text-gray-600">Assist.</div>
                        </div>
                      </div>
                    </div>

                    {/* Membro desde */}
                    <div className="mt-4">
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        Membro desde {atleta.membroDesde}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {atletasFiltrados.length === 0 && (
          <div className="text-center py-12">
            <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum atleta encontrado</h3>
            <p className="text-gray-500">Tente ajustar os filtros de busca</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-[var(--juventus-dark)] text-white">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4">Quer fazer parte do time?</h3>
              <p className="text-gray-200 mb-6">
                Cadastre-se na Área do Sócio e comece a fazer história no Racha do Juventus!
              </p>
              <Link to="/area-socio">
                <Button variant="secondary" size="lg">
                  Cadastrar-se Agora
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Atletas

