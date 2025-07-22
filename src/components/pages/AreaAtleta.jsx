import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { User, Camera, Save, Trophy, Target, Users, AlertTriangle } from 'lucide-react'

const AreaAtleta = ({ user }) => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('perfil')
  const [profileData, setProfileData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    peso: '',
    altura: '',
    localNascimento: '',
    nacionalidade: 'Brasileira',
    posicao: '',
    peDominante: '',
    foto: null
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Verificar se o usuário está logado
  useEffect(() => {
    if (!user) {
      navigate('/area-socio')
    }
  }, [user, navigate])

  // Carregar dados do perfil (simulado)
  useEffect(() => {
    if (user) {
      // Simular carregamento de dados do localStorage
      const savedProfile = localStorage.getItem(`profile_${user.id}`)
      if (savedProfile) {
        setProfileData(JSON.parse(savedProfile))
      }
    }
  }, [user])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name, value) => {
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          foto: e.target.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveProfile = () => {
    setIsLoading(true)
    
    // Simular salvamento
    setTimeout(() => {
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(profileData))
      setMessage('Perfil atualizado com sucesso!')
      setIsLoading(false)
      
      // Limpar mensagem após 3 segundos
      setTimeout(() => setMessage(''), 3000)
    }, 1000)
  }

  const posicoes = [
    'Goleiro',
    'Zagueiro',
    'Lateral Direito',
    'Lateral Esquerdo',
    'Volante',
    'Meio-campo',
    'Meia-atacante',
    'Ponta Direita',
    'Ponta Esquerda',
    'Centroavante'
  ]

  const peDominante = ['Direito', 'Esquerdo', 'Ambidestro']

  // Estatísticas mockadas
  const estatisticas = {
    jogos: 15,
    gols: 12,
    assistencias: 5,
    cartoesAmarelos: 2,
    cartoesVermelhos: 0
  }

  const tabs = [
    { id: 'perfil', label: 'Meu Perfil' },
    { id: 'estatisticas', label: 'Minhas Estatísticas' },
    { id: 'historico', label: 'Histórico' }
  ]

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Bem-vindo, {user.name}!
          </h1>
          <p className="text-gray-600">Gerencie seu perfil e acompanhe suas estatísticas</p>
        </div>

        {/* Mensagem de Sucesso */}
        {message && (
          <div className="max-w-4xl mx-auto mb-6">
            <Alert className="bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">{message}</AlertDescription>
            </Alert>
          </div>
        )}

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mb-6">
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

        <div className="max-w-4xl mx-auto">
          {/* Aba Perfil */}
          {activeTab === 'perfil' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Meu Perfil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Foto do Perfil */}
                <div className="text-center">
                  <div className="inline-block relative">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      {profileData.foto ? (
                        <img 
                          src={profileData.foto} 
                          alt="Foto do perfil"
                          className="w-32 h-32 object-cover"
                        />
                      ) : (
                        <User className="h-16 w-16 text-gray-400" />
                      )}
                    </div>
                    <label className="absolute bottom-0 right-0 bg-[var(--juventus-green)] text-white p-2 rounded-full cursor-pointer hover:bg-green-600 transition-colors">
                      <Camera className="h-4 w-4" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Clique no ícone da câmera para alterar sua foto</p>
                </div>

                {/* Dados Pessoais */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Dados Pessoais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                      <Input
                        id="nomeCompleto"
                        name="nomeCompleto"
                        value={profileData.nomeCompleto}
                        onChange={handleInputChange}
                        placeholder="Digite seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                      <Input
                        id="dataNascimento"
                        name="dataNascimento"
                        type="date"
                        value={profileData.dataNascimento}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="peso">Peso (kg)</Label>
                      <Input
                        id="peso"
                        name="peso"
                        type="number"
                        value={profileData.peso}
                        onChange={handleInputChange}
                        placeholder="Ex: 75"
                      />
                    </div>
                    <div>
                      <Label htmlFor="altura">Altura (cm)</Label>
                      <Input
                        id="altura"
                        name="altura"
                        type="number"
                        value={profileData.altura}
                        onChange={handleInputChange}
                        placeholder="Ex: 178"
                      />
                    </div>
                  </div>
                </div>

                {/* Dados Técnicos */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Dados Técnicos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="localNascimento">Local de Nascimento</Label>
                      <Input
                        id="localNascimento"
                        name="localNascimento"
                        value={profileData.localNascimento}
                        onChange={handleInputChange}
                        placeholder="Ex: São Paulo, SP"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nacionalidade">Nacionalidade</Label>
                      <Input
                        id="nacionalidade"
                        name="nacionalidade"
                        value={profileData.nacionalidade}
                        onChange={handleInputChange}
                        placeholder="Ex: Brasileira"
                      />
                    </div>
                    <div>
                      <Label htmlFor="posicao">Posição *</Label>
                      <Select value={profileData.posicao} onValueChange={(value) => handleSelectChange('posicao', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione sua posição" />
                        </SelectTrigger>
                        <SelectContent>
                          {posicoes.map((posicao) => (
                            <SelectItem key={posicao} value={posicao}>
                              {posicao}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="peDominante">Pé Dominante *</Label>
                      <Select value={profileData.peDominante} onValueChange={(value) => handleSelectChange('peDominante', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu pé dominante" />
                        </SelectTrigger>
                        <SelectContent>
                          {peDominante.map((pe) => (
                            <SelectItem key={pe} value={pe}>
                              {pe}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Botão Salvar */}
                <div className="flex justify-end">
                  <Button onClick={handleSaveProfile} disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? 'Salvando...' : 'Salvar Perfil'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Aba Estatísticas */}
          {activeTab === 'estatisticas' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    Minhas Estatísticas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                      <div className="text-2xl font-bold text-gray-800">{estatisticas.jogos}</div>
                      <div className="text-sm text-gray-600">Jogos Disputados</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Target className="h-8 w-8 mx-auto mb-2 text-green-500" />
                      <div className="text-2xl font-bold text-gray-800">{estatisticas.gols}</div>
                      <div className="text-sm text-gray-600">Gols Marcados</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Trophy className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                      <div className="text-2xl font-bold text-gray-800">{estatisticas.assistencias}</div>
                      <div className="text-sm text-gray-600">Assistências</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                      <div className="text-2xl font-bold text-gray-800">{estatisticas.cartoesAmarelos}</div>
                      <div className="text-sm text-gray-600">Cartões Amarelos</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-red-500" />
                      <div className="text-2xl font-bold text-gray-800">{estatisticas.cartoesVermelhos}</div>
                      <div className="text-sm text-gray-600">Cartões Vermelhos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Médias por Jogo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Gols por jogo:</span>
                      <span className="text-xl font-bold text-[var(--juventus-green)]">
                        {(estatisticas.gols / estatisticas.jogos).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Assistências por jogo:</span>
                      <span className="text-xl font-bold text-[var(--juventus-green)]">
                        {(estatisticas.assistencias / estatisticas.jogos).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Aba Histórico */}
          {activeTab === 'historico' && (
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Participação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Temporada 2025</span>
                      <span className="text-sm text-green-600 font-medium">Em andamento</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Membro desde: Janeiro 2025
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Temporada 2024</span>
                      <span className="text-sm text-gray-600 font-medium">Finalizada</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Participação: 42 jogos | 38 gols | 15 assistências
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default AreaAtleta

