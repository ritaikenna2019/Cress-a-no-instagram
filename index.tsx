/* 
  Copyright (c) 2026 Ikenna Rita. 
  Todos os direitos reservados.
  Este código é proprietário e não pode ser copiado sem permissão.
*/

import React from 'react'; // Importa a biblioteca principal do React
import ReactDOM from 'react-dom/client'; // Importa a biblioteca de renderização para a web (DOM)
import App from './App'; // Importa o componente principal da aplicação (App.tsx)

// Busca o elemento HTML com id 'root' no index.html. É aqui que o React vai se conectar.
const rootElement = document.getElementById('root');

// Verificação de segurança: Se o elemento não existir, lança um erro para avisar o desenvolvedor.
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Cria a "raiz" do React usando a nova API do React 18+ (createRoot)
const root = ReactDOM.createRoot(rootElement);

// Renderiza a aplicação dentro da raiz criada
root.render(
  // StrictMode é uma ferramenta de desenvolvimento que ajuda a identificar problemas no código
  // Ele executa alguns ciclos de vida duas vezes para garantir pureza das funções
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
