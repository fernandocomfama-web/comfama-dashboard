import React from 'react';
import CategoryCard from './components/CategoryCard';
import { CATEGORIES_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 pb-20 overflow-x-hidden">
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f6,transparent_50%)]"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Header Section */}
      <header className="relative pt-16 pb-12 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            Radiografía de la <span className="text-gradient bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Originación de Crédito</span>
          </h1>
          <p className="text-xl text-slate-400 font-light mb-8">Segmento: Usuarios con Salario Mínimo</p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card border-indigo-500/30 text-indigo-300 font-semibold shadow-xl shadow-indigo-500/5">
            <span className="text-lg">🔺</span>
            Aumento Salarial: +23%
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 relative z-10 space-y-12">
        {/* Overview Stats */}
        <section className="glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] -z-10"></div>
          
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/20">
              📊
            </div>
            <h2 className="text-3xl font-bold">Panorama General</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
            <OverviewStat label="Solicitudes" value="306,455" />
            <OverviewStat label="Usuarios" value="162,807" />
            <OverviewStat label="Afiliación Prom." value="41.92m" />
            <OverviewStat label="Aprobación" value="66.5%" />
            <OverviewStat label="Rechazo" value="21.1%" />
            <OverviewStat label="Categoría A" value="90%" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DetailList 
              title="⏱️ Antigüedad Laboral" 
              items={[
                { label: "> 12 meses", value: "76.65%", sub: "Prom: 51 meses" },
                { label: "< 12 meses", value: "23.35%", sub: "Prom: 10 meses" }
              ]} 
            />
            <DetailList 
              title="🏢 Distribución Empresarial" 
              items={[
                { label: "> 50 empleados", value: "67.63%", sub: "Prom: 45 meses" },
                { label: "1-20 empleados", value: "20.14%", sub: "Prom: 36 meses" }
              ]} 
            />
            <DetailList 
              title="💳 Mezcla de Portafolio" 
              items={[
                { label: "Cuota Monetaria", value: "63.6%", progress: 63.6, color: "from-indigo-500 to-blue-500" },
                { label: "Consumos", value: "33.7%", progress: 33.7, color: "from-pink-500 to-orange-400" }
              ]} 
            />
          </div>
        </section>

        {/* New Detailed Table Section based on Image */}
        <section className="glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/20">
                🏢
              </div>
              <div>
                <h2 className="text-3xl font-bold">Concentración por Sector Económico</h2>
                <p className="text-slate-400 text-sm">Distribución de solicitudes según rango de empleados y actividad</p>
              </div>
            </div>
            <div className="hidden md:block glass-card px-4 py-2 rounded-xl text-xs font-bold text-indigo-400 uppercase tracking-widest border-indigo-500/20">
              Total solicitudes: 306,455
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-slate-500 border-b border-white/5">
                  <th className="py-4 font-bold">Sección Económica</th>
                  <th className="py-4 font-bold text-center bg-white/5">De 1 a 20 (%)</th>
                  <th className="py-4 font-bold text-center">De 21 a 50 (%)</th>
                  <th className="py-4 font-bold text-center bg-white/5">Mayor a 50 (%)</th>
                  <th className="py-4 font-bold text-right text-indigo-400">Total Solicitudes (%)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <SectorRow label="Industrias Manufactureras" d1="11,168" p1="3.6" d2="9,370" p2="3.1" d3="42,919" p3="14.0" total="63,412" pTotal="20.7" color="bg-indigo-500" />
                <SectorRow label="Comercio y Rep. Automotores" d1="16,065" p1="5.2" d2="9,006" p2="2.9" d3="21,820" p3="7.1" total="46,764" pTotal="15.3" color="bg-blue-500" />
                <SectorRow label="Serv. Admin y de Apoyo" d1="2,897" p1="0.9" d2="1,887" p2="0.6" d3="28,365" p3="9.3" total="33,136" pTotal="10.8" color="bg-cyan-500" />
                <SectorRow label="Construcción" d1="4,266" p1="1.4" d2="3,864" p2="1.3" d3="15,105" p3="4.9" total="23,205" pTotal="7.6" color="bg-teal-500" />
                <SectorRow label="Agricultura, Caza y Pesca" d1="2,238" p1="0.7" d2="1,310" p2="0.4" d3="18,503" p3="6.0" total="22,039" pTotal="7.2" color="bg-emerald-500" />
                <SectorRow label="Actv. Profesionales / Técnicas" d1="4,439" p1="1.4" d2="2,395" p2="0.8" d3="12,771" p3="4.2" total="19,594" pTotal="6.4" color="bg-purple-500" />
                <SectorRow label="Atención de la Salud" d1="1,998" p1="0.7" d2="1,072" p2="0.3" d3="13,344" p3="4.4" total="16,414" pTotal="5.4" color="bg-rose-500" />
              </tbody>
              <tfoot className="border-t-2 border-indigo-500/20">
                <tr className="font-black text-white bg-indigo-500/5">
                  <td className="py-6 px-4 rounded-bl-3xl">TOTAL GENERAL</td>
                  <td className="py-6 text-center">61,819 <span className="text-indigo-400 ml-1 text-xs">(20.2%)</span></td>
                  <td className="py-6 text-center">37,548 <span className="text-indigo-400 ml-1 text-xs">(12.3%)</span></td>
                  <td className="py-6 text-center bg-indigo-500/10">207,620 <span className="text-indigo-300 ml-1 text-xs">(67.7%)</span></td>
                  <td className="py-6 text-right px-4 rounded-br-3xl text-xl text-gradient bg-gradient-to-r from-indigo-400 to-pink-400">306,455 <span className="text-xs font-medium">(100%)</span></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Hero Divider */}
        <section className="relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-slate-900/40 mix-blend-overlay"></div>
          <div className="absolute inset-0 glass-card flex items-center p-8 md:p-16 border-y-2 border-indigo-500/20">
             <div className="flex flex-col md:flex-row items-center gap-10 w-full">
                <div className="text-center md:text-left flex-1">
                  <div className="text-6xl md:text-8xl font-black text-gradient bg-gradient-to-r from-indigo-400 to-pink-400 leading-none mb-4">
                    43.08%
                  </div>
                  <p className="text-xl md:text-2xl text-slate-300 font-medium">
                    de las solicitudes corresponden a <br/>
                    <strong className="text-white">Usuarios con 1 Salario Mínimo</strong>
                  </p>
                </div>
                <div className="hidden lg:grid grid-cols-2 gap-4 w-1/3">
                  <HeroStat label="Solicitudes" value="132,010" />
                  <HeroStat label="Usuarios" value="73,773" />
                  <HeroStat label="Afiliación" value="33.59m" />
                  <HeroStat label="Aprobación" value="70.8%" />
                </div>
             </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES_DATA.map((cat) => (
            <CategoryCard key={cat.id} data={cat} />
          ))}
        </section>

        {/* Conclusions Section */}
        <section className="pt-12 pb-20">
          <h2 className="text-4xl font-black text-center mb-16">
            Conclusiones <span className="text-indigo-500">Clave</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConclusionItem 
              icon="🚀" 
              title="Impacto del Salario Mínimo" 
              desc="El segmento de 1 SMMLV representa casi la mitad de la originación, mostrando una dinámica robusta en créditos de cuota monetaria." 
            />
            <ConclusionItem 
              icon="⚠️" 
              title="Riesgo en Consumos" 
              desc="Se observa una alta tasa de rechazo (53.1%) en créditos de consumo para este segmento, sugiriendo un alto nivel de endeudamiento previo." 
            />
            <ConclusionItem 
              icon="🛡️" 
              title="Estabilidad Laboral" 
              desc="Más del 70% de los solicitantes tienen más de 12 meses de antigüedad, lo cual es un factor determinante para la aprobación del 70.8%." 
            />
            <ConclusionItem 
              icon="🏢" 
              title="Predominio de Grandes Empresas" 
              desc="El 67.7% de las solicitudes provienen de empresas con más de 50 empleados, siendo la industria manufacturera la más relevante con el 20.7% del total." 
            />
          </div>
        </section>
      </main>

      <footer className="text-center py-10 text-slate-600 text-sm border-t border-white/5">
        &copy; 2024 Radiografía de Originación • Comfama Analytics
      </footer>
    </div>
  );
};

// --- Helper Components ---

const SectorRow: React.FC<{
  label: string; d1: string; p1: string; d2: string; p2: string; d3: string; p3: string; total: string; pTotal: string; color: string;
}> = ({ label, d1, p1, d2, p2, d3, p3, total, pTotal, color }) => (
  <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
    <td className="py-4 font-medium text-slate-200">{label}</td>
    <td className="py-4 text-center bg-white/5">
      <div className="text-xs text-slate-400">{d1}</div>
      <div className="font-bold">{p1}%</div>
    </td>
    <td className="py-4 text-center">
      <div className="text-xs text-slate-400">{d2}</div>
      <div className="font-bold">{p2}%</div>
    </td>
    <td className="py-4 text-center bg-white/5">
      <div className="text-xs text-slate-400">{d3}</div>
      <div className="font-bold text-emerald-400">{p3}%</div>
    </td>
    <td className="py-4 text-right">
      <div className="font-black text-white">{total}</div>
      <div className="flex items-center justify-end gap-2">
        <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
          <div className={`h-full ${color}`} style={{ width: `${pTotal}%` }}></div>
        </div>
        <span className="text-xs font-bold text-indigo-400">{pTotal}%</span>
      </div>
    </td>
  </tr>
);

const OverviewStat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="glass-card p-6 rounded-3xl text-center border-white/5 hover:border-indigo-500/20 transition-colors">
    <div className="text-2xl md:text-3xl font-black text-gradient bg-gradient-to-br from-indigo-300 to-white mb-1">
      {value}
    </div>
    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{label}</div>
  </div>
);

const DetailList: React.FC<{ title: string; items: any[] }> = ({ title, items }) => (
  <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
    <h3 className="text-indigo-400 text-sm font-bold mb-6 flex items-center gap-2">
      {title}
    </h3>
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm font-medium text-slate-300">{item.label}</span>
            <span className="text-lg font-bold text-white">{item.value}</span>
          </div>
          {item.progress ? (
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
               <div className={`h-full rounded-full bg-gradient-to-r ${item.color}`} style={{ width: `${item.progress}%` }}></div>
            </div>
          ) : (
            <p className="text-xs text-slate-500">{item.sub}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

const HeroStat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
    <div className="text-xl font-bold text-white">{value}</div>
    <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">{label}</div>
  </div>
);

const ConclusionItem: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-6 p-8 rounded-3xl glass-card border-white/5 hover:border-indigo-500/30 transition-all duration-300 group">
    <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default App;
