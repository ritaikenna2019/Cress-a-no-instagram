/* 
  Copyright (c) 2026 Ikenna Rita. 
  Todos os direitos reservados.
  Este código é proprietário e não pode ser copiado sem permissão.
*/

import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar estado
import {
  TrendingUp,
  Zap,
  Calendar,
  Users,
  LayoutDashboard,
  Menu,
  X,
  Instagram,
  ArrowRight,
  FileText
} from 'lucide-react'; // Importa ícones da biblioteca lucide-react para usar na interface

// Importa os componentes filhos da aplicação
import Dashboard from './components/Dashboard';
import Trends from './components/Trends';
import HookGenerator from './components/HookGenerator';
import Scheduler from './components/Scheduler';
import Competitors from './components/Competitors';
import ScriptBuilder from './components/ScriptBuilder';
import { ActiveTab } from './types'; // Importa a definição de tipo para as abas

// Componente principal da aplicação
const App: React.FC = () => {
  // Estado para controlar qual aba está ativa na navegação (inicia em 'dashboard')
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');

  // Estado para controlar se a barra lateral (sidebar) está aberta no mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Estado para armazenar um gancho selecionado para passar para o criador de roteiros
  const [selectedHook, setSelectedHook] = useState<{ niche: string, topic: string, text: string } | null>(null);

  // Lista de itens de navegação para desenhar o menu dinamicamente
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'trends', label: 'Tendências', icon: TrendingUp },
    { id: 'hooks', label: 'Gerador de Ganchos', icon: Zap },
    { id: 'script', label: 'Roteirista', icon: FileText },
    { id: 'scheduler', label: 'Otimizador de Horários', icon: Calendar },
    { id: 'competitors', label: 'Concorrentes', icon: Users },
  ];

  // Função auxiliar para navegar do Gerador de Ganchos para o Criador de Roteiros
  const handleCreateScriptFromHook = (niche: string, topic: string, hookText: string) => {
    setSelectedHook({ niche, topic, text: hookText }); // Salva os dados do gancho
    setActiveTab('script'); // Muda a aba ativa para 'script'
  };

  // Função que decide qual componente renderizar baseado na aba ativa
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard onNavigate={setActiveTab} />; // Passa função de navegação para o Dashboard
      case 'trends': return <Trends />;
      case 'hooks': return <HookGenerator onCreateScript={handleCreateScriptFromHook} />; // Passa callback
      case 'script': return <ScriptBuilder initialData={selectedHook} />; // Passa dados iniciais se houver
      case 'scheduler': return <Scheduler />;
      case 'competitors': return <Competitors />;
      default: return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    // Container principal da aplicação. min-h-screen garante altura total, bg-[#0f172a] é a cor de fundo
    <div className="flex min-h-screen bg-[#0f172a] text-slate-200">

      {/* Botão de abrir/fechar sidebar (apenas visível em mobile 'lg:hidden') */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 glass rounded-lg lg:hidden"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />} {/* Alterna ícone entre Menu e X */}
      </button>

      {/* Sidebar (Barra Lateral) de Navegação */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 glass transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} /* Controla visibilidade no mobile */
      `}>
        {/* Cabeçalho da Sidebar com Logo */}
        <div className="flex items-center gap-3 p-6 mb-8">
          <div className="p-2 ig-gradient rounded-xl">
            <Instagram className="text-white" size={24} />
          </div>
          <h1 className="text-xl font-bold tracking-tight">InstaFlow <span className="text-pink-500">AI</span></h1>
        </div>

        {/* Links de Destaque / Menu */}
        <nav className="px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id as ActiveTab); // Define a aba ativa
                setIsSidebarOpen(false); // Fecha o menu no mobile ao clicar
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                /* Estilização condicional baseada se é o item ativo */
                ${activeTab === item.id
                  ? 'bg-gradient-to-r from-pink-600/20 to-purple-600/20 text-pink-500 border border-pink-500/30'
                  : 'hover:bg-white/5 text-slate-400'}
              `}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Card de Dica 'Pro' f fixado no rodapé da sidebar */}
        <div className="absolute bottom-8 left-0 w-full px-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-700 text-white">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1">Dica Pro</p>
            <p className="text-sm leading-relaxed">Vídeos com áudios em alta têm 40% mais alcance.</p>
          </div>
        </div>
      </aside>

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 lg:ml-64 p-6 lg:p-10">
        {/* Cabeçalho Superior da Direita */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 mt-12 lg:mt-0">
          <div>
            {/* Título da Página Atual */}
            <h2 className="text-3xl font-bold text-white mb-2">
              {navItems.find(i => i.id === activeTab)?.label}
            </h2>
            <p className="text-slate-400">Impulsionando sua presença digital com inteligência artificial.</p>
          </div>
          {/* Perfil do Usuário */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium">Conta Basic</p>
              <p className="text-xs text-slate-500">Plano Pro em breve</p>
            </div>
            <img src="https://picsum.photos/seed/user/40/40" alt="Profile" className="w-10 h-10 rounded-full border-2 border-pink-500" />
          </div>
        </header>

        {/* Renderiza o conteúdo dinâmico da aba */}
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
