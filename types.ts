/* 
  Copyright (c) 2026 Ikenna Rita. 
  Todos os direitos reservados.
  Este código é proprietário e não pode ser copiado sem permissão.
*/

// Define a estrutura de dados para uma 'Tendência' (Trend)
export interface Trend {
  id: string;          // Identificador único da tendência
  title: string;       // Título descritivo
  audioName: string;   // Nome do áudio relacionado
  format: string;      // Formato do vídeo (ex: POV, Transição)
  reasons: string[];   // Lista de motivos da popularidade
  growthScore: number; // Pontuação de crescimento
}

// Define a estrutura para um 'Gancho' (Hook) gerado
export interface Hook {
  category: string;    // Categoria (ex: Curiosidade, Medo)
  text: string;        // O texto do gancho em si
  explanation: string; // Explicação de por que funciona
}

// Define um passo individual do roteiro
export interface ScriptStep {
  text: string;   // Texto falado (Voiceover)
  visual: string; // Descrição visual da cena
}

// Define o roteiro completo gerado
export interface FullScript {
  hook: string;         // O gancho inicial
  steps: ScriptStep[];  // Array de passos do desenvolvimento
  cta: string;          // Chamada para ação final (Call to Action)
}

// Define dados analisados de um concorrente
export interface CompetitorData {
  username: string;    // Nome de usuário do concorrente
  strategy: string;    // Descrição da estratégia usada
  topPosts: string[];  // Lista dos posts de maior sucesso
  keyTakeaway: string; // Principal lição a tirar
}

// Define os tipos possíveis para a aba ativa na navegação
export type ActiveTab = 'dashboard' | 'trends' | 'hooks' | 'scheduler' | 'competitors' | 'script';
