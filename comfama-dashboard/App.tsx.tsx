import React, { useState, useMemo } from 'react';
import CategoryCard from './components/CategoryCard';
import { CATEGORIES_DATA, SECTOR_DATA } from './constants';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    return CATEGORIES_DATA.filter(cat => 
      cat.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-indigo-500/30 pb-20 overflow-x-hidden">
      {/* Immersive Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      {/* Header Section */}
      <header className="relative pt-20 pb-16 px-6 text-center z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block animate-float mb-6">
            <div className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              Reporte de Inteligencia de Datos
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Radiografía de <br/>
            <span className="text-gradient">Originación de Crédito</span>
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Análisis profundo del comportamiento crediticio en el segmento de <span className="text-white font-semibold">Salario Mínimo</span> para el año 2024.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="glass-card px-8 py-4 rounded-3xl flex items-center gap-4 border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
              <span className="text-2xl">📈</span>
              <div className="text-left">
                <div className="text-2xl font-black">+23%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Aumento Salarial</div>
              </div>
            </div>
            <div className="glass-card px-8 py-4 rounded-3xl flex items-center gap-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/10">
              <span className="text-2xl">✅</span>
              <div className="text-left">
                <div className="text-2xl font-black">66.5%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Aprobación General</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 relative z-10 space-y-16">
        {/* Statistics Grid */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <OverviewStat label="Total Solicitudes" value="306,455" icon="📑" />
          <OverviewStat label="Usuarios Únicos" value="162,807" icon="👥" />
          <OverviewStat label="Afiliación Prom." value="41.92m" icon="📅" />
          <OverviewStat label="Tasa Rechazo" value="21.1%" icon="❌" />
          <OverviewStat label="Categoría A" value="90%" icon="⭐" />
          <OverviewStat label="Antigüedad Prom." value="42m" icon="⌛" />
        </section>

        {/* Categories Analysis with Search */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black mb-2">Perfiles de <span className="text-indigo-400">Usuario</span></h2>
              <p className="text-slate-400">Desglose detallado por sub-segmentos de 1 SMMLV</p>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                🔍
              </div>
              <input 
                type="text" 
                placeholder="Buscar segmento..."
                className="w-full md:w-80 bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat) => (
                <CategoryCard key={cat.id} data={cat} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center glass-card rounded-[2.5rem]">
                <p className="text-slate-500 text-lg">No se encontraron perfiles para "{searchTerm}"</p>
              </div>
            )}
          </div>
        </section>

        {/* Economic Sector Table */}
        <section className="glass-card rounded-[3rem] p-8 md:p-12 border-white/5 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-3xl shadow-xl shadow-cyan-500/20">
                🏢
              </div>
              <div>
                <h2 className="text-4xl font-black">Sectores Económicos</h2>
                <p className="text-slate-400">Distribución de originación por actividad y tamaño de empresa</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-slate-400">
                Data 2024
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  <th className="pb-6 px-4 font-bold">Actividad Económica</th>
                  <th className="pb-6 text-center font-bold">1-20 Emp. (%)</th>
                  <th className="pb-6 text-center font-bold">21-50 Emp. (%)</th>
                  <th className="pb-6 text-center font-bold">50+ Emp. (%)</th>
                  <th className="pb-6 text-right font-bold pr-4">Peso Total (%)</th>
                </tr>
              </thead>
              <tbody>
                {SECTOR_DATA.map((row, idx) => (
                  <SectorRow key={idx} {...row} />
                ))}
              </tbody>
              <tfoot>
                <tr className="text-white">
                  <td className="py-8 px-6 font-black text-xl rounded-l-3xl bg-indigo-500/10">TOTAL GENERAL</td>
                  <td className="py-8 text-center bg-indigo-500/10">
                    <div className="text-slate-400 text-xs mb-1">61,819</div>
                    <div className="font-bold">20.2%</div>
                  </td>
                  <td className="py-8 text-center bg-indigo-500/10">
                    <div className="text-slate-400 text-xs mb-1">37,548</div>
                    <div className="font-bold">12.3%</div>
                  </td>
                  <td className="py-8 text-center bg-indigo-600/20">
                    <div className="text-indigo-300 text-xs mb-1">207,620</div>
                    <div className="font-black text-indigo-400 text-lg">67.7%</div>
                  </td>
                  <td className="py-8 text-right px-6 rounded-r-3xl bg-indigo-500/10">
                    <div className="text-slate-400 text-xs mb-1">Solicitudes</div>
                    <div className="text-3xl font-black text-gradient">306,455</div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Strategic Conclusions */}
        <section className="pb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Insights <span className="text-indigo-500">Estratégicos</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Resumen ejecutivo de los hallazgos más relevantes del análisis de originación.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ConclusionItem 
              icon="💡" 
              title="Predominio del Segmento Base" 
              desc="El 43% de la originación total pertenece a usuarios de 1 SMMLV, consolidando la cuota monetaria como el producto estrella con aprobaciones superiores al 90%." 
            />
            <ConclusionItem 
              icon="🛡️" 
              title="Estabilidad como Filtro" 
              desc="La antigüedad promedio de 42 meses es el mayor mitigante de riesgo detectado. Los usuarios estables compensan la limitación de ingresos base." 
            />
            <ConclusionItem 
              icon="📈" 
              title="Oportunidad Manufacturera" 
              desc="1 de cada 5 solicitudes proviene del sector manufacturero. Fomentar convenios en empresas de +50 empleados en este sector es clave para el crecimiento." 
            />
            <ConclusionItem 
              icon="⚡" 
              title="Riesgo de Sobreendeudamiento" 
              desc="El rechazo masivo en perfiles de '1 SMMLV + Consumos' (53%) alerta sobre la necesidad de educación financiera previa al otorgamiento." 
            />
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-black tracking-tighter">COMFAMA <span className="text-indigo-500">ANALYTICS</span></div>
            <div className="h-4 w-px bg-white/10 hidden md:block"></div>
            <p className="text-slate-500 text-xs">Radiografía de Originación Crédito 2024</p>
          </div>
          <div className="text-slate-500 text-xs text-center md:text-right">
            Metodología: Basado en datos reales de solicitudes 2024. <br/>
            Corte: Diciembre 2024 • Reservados todos los derechos.
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Helper Components ---

const SectorRow: React.FC<{
  label: string; d1: string; p1: string; d2: string; p2: string; d3: string; p3: string; total: string; pTotal: string; color: string;
}> = ({ label, d1, p1, d2, p2, d3, p3, total, pTotal, color }) => (
  <tr className="group transition-all duration-300">
    <td className="py-5 px-6 font-bold text-slate-300 glass-card rounded-l-2xl border-r-0">{label}</td>
    <td className="py-5 text-center bg-white/[0.02] border-y border-white/5">
      <div className="text-[10px] text-slate-500 mb-0.5">{d1}</div>
      <div className="font-bold text-sm">{p1}%</div>
    </td>
    <td className="py-5 text-center border-y border-white/5">
      <div className="text-[10px] text-slate-500 mb-0.5">{d2}</div>
      <div className="font-bold text-sm">{p2}%</div>
    </td>
    <td className="py-5 text-center bg-indigo-500/[0.03] border-y border-white/5">
      <div className="text-[10px] text-indigo-400/60 mb-0.5">{d3}</div>
      <div className="font-black text-indigo-400">{p3}%</div>
    </td>
    <td className="py-5 text-right px-6 glass-card rounded-r-2xl border-l-0">
      <div className="font-black text-white text-lg leading-none mb-1">{total}</div>
      <div className="flex items-center justify-end gap-3">
        <div className="w-20 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className={`h-full ${color} opacity-80 group-hover:opacity-100 transition-opacity`} style={{ width: `${pTotal}%` }}></div>
        </div>
        <span className="text-[10px] font-black text-indigo-400">{pTotal}%</span>
      </div>
    </td>
  </tr>
);

const OverviewStat: React.FC<{ label: string; value: string; icon: string }> = ({ label, value, icon }) => (
  <div className="glass-card p-8 rounded-[2rem] text-center group hover:scale-[1.02] active:scale-95">
    <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300 grayscale group-hover:grayscale-0">{icon}</div>
    <div className="text-2xl font-black text-white mb-1 tracking-tight">{value}</div>
    <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-black">{label}</div>
  </div>
);

const ConclusionItem: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-8 p-10 rounded-[2.5rem] glass-card group hover:bg-indigo-500/[0.03]">
    <div className="w-20 h-20 shrink-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center text-4xl group-hover:rotate-12 transition-all duration-500">
      {icon}
    </div>
    <div>
      <h4 className="text-2xl font-black mb-3 text-white group-hover:text-indigo-400 transition-colors">{title}</h4>
      <p className="text-slate-400 leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);

export default App;