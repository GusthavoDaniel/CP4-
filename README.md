# React Native TanStack Query - Lista de Usuários

Este é um aplicativo React Native que demonstra o uso do TanStack Query para consumir dados de uma API pública e exibir uma lista de usuários com interface aprimorada.

## Integrantes do Grupo

- [Gusthavo Daniel de Souza - RM554681]
- [Lucas Miranda Leite - RM555161]
- [Guilherme Damasio Roselli - RM555873]

## Funcionalidades

- ✅ Configuração do TanStack Query (QueryClient e QueryClientProvider)
- ✅ Hook useQuery para buscar dados da API
- ✅ Exibição de nome, email e cidade de cada usuário
- ✅ Tratamento de estados de carregamento e erro
- ✅ Funcionalidade de pull-to-refresh
- ✅ Campo de busca em tempo real
- ✅ Interface moderna com ícones e cores atrativas
- ✅ Cards de usuário com avatars coloridos

## Tecnologias Utilizadas

- React Native com Expo
- TanStack Query (@tanstack/react-query)
- Expo Vector Icons (@expo/vector-icons)
- API pública: https://jsonplaceholder.typicode.com/users

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npx expo start
```

3. Use o Expo Go no seu dispositivo móvel ou um emulador para visualizar o app.

## Estrutura do Projeto

```
src/
├── components/
│   ├── UsersList.js      # Lista principal de usuários com busca
│   ├── UserCard.js       # Card individual do usuário com avatar
│   ├── LoadingSpinner.js # Componente de loading estilizado
│   └── ErrorState.js     # Componente de erro com ícone
├── hooks/
│   └── useUsers.js       # Hook customizado para gerenciar usuários
└── services/
    └── userService.js    # Serviço para buscar dados da API
```

## Critérios Atendidos

- [x] TanStack Query corretamente instalado e configurado (2 pts)
- [x] Hook useQuery utilizado corretamente (2 pts)
- [x] Exibição dos dados na interface (3 pts)
- [x] Tratamento de loading e erro (2 pts)
- [x] Organização e legibilidade do código (1 pt)


