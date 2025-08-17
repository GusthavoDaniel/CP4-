const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Busca todos os usuários da API
 * @returns {Promise<Array>} Lista de usuários
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    
    
    if (!Array.isArray(data)) {
      throw new Error('Formato de dados inválido recebido da API');
    }
    
    return data;
  } catch (error) {
    
    console.error('Erro ao buscar usuários:', error);
    
    
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Erro de conexão. Verifique sua internet e tente novamente.');
    }
    
    throw new Error(`Erro ao carregar usuários: ${error.message}`);
  }
};

/**
 * Busca um usuário específico por ID
 * @param {number} userId - ID do usuário
 * @returns {Promise<Object>} Dados do usuário
 */
export const fetchUserById = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`Usuário não encontrado: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw new Error(`Erro ao carregar usuário: ${error.message}`);
  }
};

