/* 
  Copyright (c) 2026 Ikenna Rita. 
  Todos os direitos reservados.
  Este código é proprietário e não pode ser copiado sem permissão.
*/

import path from 'path'; // Importa módulo para manipulação de caminhos de arquivo
import { defineConfig, loadEnv } from 'vite'; // Importa funções de configuração do Vite
import react from '@vitejs/plugin-react'; // Importa o plugin oficial do React para Vite

// Exporta a configuração padrão do Vite
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente do arquivo .env com base no modo atual (development/production)
  const env = loadEnv(mode, '.', '');

  return {
    // Configurações do servidor de desenvolvimento
    server: {
      port: 3000,      // Define a porta como 3000
      host: '0.0.0.0', // Permite acesso externo (útil para containers/deploy)
    },
    // Lista de plugins, neste caso, apenas o React
    plugins: [react()],

    // Definições globais de variáveis
    define: {
      // Injeta a chave da API do Gemini disponível no código cliente via process.env
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    // Resolução de alias para importações, permitindo usar @/ para referenciar a raiz
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
