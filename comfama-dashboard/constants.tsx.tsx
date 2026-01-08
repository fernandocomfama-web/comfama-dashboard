import { CategoryData, SectorData } from './types';

export const CATEGORIES_DATA: CategoryData[] = [
  {
    id: '1smm',
    title: 'Usuarios 1 Salario Mínimo',
    icon: '👤',
    headerGradient: 'from-cyan-400 to-blue-500',
    approvalRate: 70.8,
    rejectionRate: 20.2,
    isApprovalMain: true,
    requests: '132,010',
    users: '73,773',
    extraStatLabel: 'Cuota Monetaria',
    extraStatValue: '69.3%',
    seniorityMore12: { label: '> 12 meses', value: '71.53%', note: 'Prom: 42 meses', percentage: 71.53 },
    seniorityLess12: { label: '< 12 meses', value: '28.47%', note: 'Prom: 10 meses', percentage: 28.47 },
    companySizeMore50: { label: '> 50 empleados', value: '61.27%', note: 'Prom: 35 meses', percentage: 61.27 },
    footerTag: 'Estabilidad Laboral y Alta Aprobación',
    footerClass: 'border-emerald-500/30 text-emerald-400'
  },
  {
    id: 'consumos',
    title: '1 SMMLV + Consumos',
    icon: '🛒',
    headerGradient: 'from-pink-400 to-orange-400',
    approvalRate: 19.3,
    rejectionRate: 53.1,
    isApprovalMain: false,
    requests: '37,612',
    users: '27,870',
    extraStatLabel: 'Afiliación',
    extraStatValue: '32.77m',
    seniorityMore12: { label: '> 12 meses', value: '79.42%', note: 'Prom: 38 meses', percentage: 79.42 },
    seniorityLess12: { label: '< 12 meses', value: '20.58%', note: 'Prom: 10 meses', percentage: 20.58 },
    companySizeMore50: { label: '> 50 empleados', value: '59.13%', note: 'Prom: 32 meses', percentage: 59.13 },
    footerTag: 'Alto Nivel de Rechazo y Endeudamiento',
    footerClass: 'border-rose-500/30 text-rose-400'
  },
  {
    id: 'cuota',
    title: '1 SMMLV + Cuota Monetaria',
    icon: '💳',
    headerGradient: 'from-teal-400 to-indigo-600',
    approvalRate: 93.7,
    rejectionRate: 6.2,
    isApprovalMain: true,
    requests: '91,625',
    users: '51,092',
    extraStatLabel: 'Afiliación',
    extraStatValue: '33.88m',
    seniorityMore12: { label: '> 12 meses', value: '68.58%', note: 'Prom: 43 meses', percentage: 68.58 },
    seniorityLess12: { label: '< 12 meses', value: '31.42%', note: 'Prom: 9.5 meses', percentage: 31.42 },
    companySizeMore50: { label: '> 50 empleados', value: '62.31%', note: 'Prom: 36 meses', percentage: 62.31 },
    footerTag: 'Portafolio Más Sano y Aprobación Alta',
    footerClass: 'border-cyan-500/30 text-cyan-400'
  },
  {
    id: 'venezolanos',
    title: '1 SMMLV + Venezolanos',
    icon: '🇻🇪',
    headerGradient: 'from-yellow-200 via-blue-400 to-red-500',
    approvalRate: 68.2,
    rejectionRate: 6.5,
    isApprovalMain: true,
    requests: '5,637',
    users: '4,782',
    extraStatLabel: 'Afiliación',
    extraStatValue: '24.67m',
    seniorityMore12: { label: '> 12 meses', value: '76.38%', note: 'Prom: 29 meses', percentage: 76.38 },
    seniorityLess12: { label: '< 12 meses', value: '23.62%', note: 'Prom: 10 meses', percentage: 23.62 },
    companySizeMore50: { label: '> 50 empleados', value: '63.17%', note: 'Prom: 24 meses', percentage: 63.17 },
    footerTag: 'Buena Aprobación, Menor Antigüedad',
    footerClass: 'border-blue-500/30 text-blue-400'
  }
];

export const SECTOR_DATA: SectorData[] = [
  { label: "Industrias Manufactureras", d1: "11,168", p1: "3.6", d2: "9,370", p2: "3.1", d3: "42,919", p3: "14.0", total: "63,412", pTotal: "20.7", color: "bg-indigo-500" },
  { label: "Comercio y Rep. Automotores", d1: "16,065", p1: "5.2", d2: "9,006", p2: "2.9", d3: "21,820", p3: "7.1", total: "46,764", pTotal: "15.3", color: "bg-blue-500" },
  { label: "Serv. Admin y de Apoyo", d1: "2,897", p1: "0.9", d2: "1,887", p2: "0.6", d3: "28,365", p3: "9.3", total: "33,136", pTotal: "10.8", color: "bg-cyan-500" },
  { label: "Construcción", d1: "4,266", p1: "1.4", d2: "3,864", p2: "1.3", d3: "15,105", p3: "4.9", total: "23,205", pTotal: "7.6", color: "bg-teal-500" },
  { label: "Agricultura, Caza y Pesca", d1: "2,238", p1: "0.7", d2: "1,310", p2: "0.4", d3: "18,503", p3: "6.0", total: "22,039", pTotal: "7.2", color: "bg-emerald-500" },
  { label: "Actv. Profesionales / Técnicas", d1: "4,439", p1: "1.4", d2: "2,395", p2: "0.8", d3: "12,771", p3: "4.2", total: "19,594", pTotal: "6.4", color: "bg-purple-500" },
  { label: "Atención de la Salud", d1: "1,998", p1: "0.7", d2: "1,072", p2: "0.3", d3: "13,344", p3: "4.4", total: "16,414", pTotal: "5.4", color: "bg-rose-500" }
];