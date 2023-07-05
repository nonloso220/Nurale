export const ROUTES =
{
  Login: "/",
  RecuperoPassword: "/RecuperoPassword",
  Home: "/Home",
  InserimentoVel:'/InserimentoVeloce',
  Commesse:'/Commesse',
  Ordini:'/Ordini',
  Attività:'/Attività',
  Clienti:'/Clienti',
  Fornitori:'/Fornitori',
  Risorse:'/Risorse',
  SkillsDelleRisorse:'/SkillsDelleRisorse',
  FatturaDiAcquisto:'/FatturaDiAcquisto',
  FatturaDiAcquistoAttività:'/FatturaDiAcquistoAttività',
  FattureDiVendita:'/FattureDiVendita',
  Scadenze:'/Scadenze',
  Pianificazione:'/Pianificazione',
  Skills:'/Skills',
  TipiDiPagamento:'/TipiDiPagamento',
  Utenti:'/users',
  Timesheet:'/Timesheet',
  Report:'/Report',
};
export type icons='homeIcon'|'inserimentoVel'|'commesseIcon'|'anagraficheIcon'|'settingsIcon' |'timesheetIcon'|'logoutIcon'|'darkmodeIcon'|'campanelloIcon'|'accountIcon'|'sidebarIcon'|'dropdownIcon'|'dropdownUpIcon'|'sidebarReverseIcon'|'rightArrowIcon'|'leftArrowIcon'|'editIcon'|'deleteIcon'


interface sidebar{
  name: string
  nameotherIcon?: icons
  href?:string
  current?: boolean
  sublinkVerification: boolean
  icon: icons
  sublink?: {name: string
    href:string
    current: boolean}[]
} 

export const SIDEBAR: sidebar[]=
[
  // { name: "Login", href: ROUTES.Login, current: true,sublinkVerification:false },
  // { name: "RecuperoPassword", href: ROUTES.RecuperoPassword, current: true,sublinkVerification:false },
  { name: "Home", href: ROUTES.Home, current: true,sublinkVerification:false,icon:'homeIcon' },
  { name: "Inserimento veloce", href: ROUTES.InserimentoVel, current: true,sublinkVerification:false,icon:'inserimentoVel' },
  {name:'Commesse',sublinkVerification:true,icon:'commesseIcon',nameotherIcon:'dropdownIcon',sublink:[
    { name: "Commesse", href: ROUTES.Commesse, current: true },
    { name: "Ordini", href: ROUTES.Ordini, current: true },
    { name: "Attività", href: ROUTES.Attività, current: true },
  ]},
  {name:'Anagrafiche',sublinkVerification:true,icon:'anagraficheIcon',nameotherIcon:'dropdownIcon',sublink:[
    { name: "Clienti", href: ROUTES.Clienti, current: true },
    { name: "Fornitori", href: ROUTES.Fornitori, current: true },
    { name: "Risorse", href: ROUTES.Risorse, current: true },
    { name: "Skills delle Risorse", href: ROUTES.SkillsDelleRisorse, current: true },
  ]},
  {name:'Acquisti',sublinkVerification:true,icon:'commesseIcon',nameotherIcon:'dropdownIcon',sublink:[
    { name: "Fattura di acquisto", href: ROUTES.FatturaDiAcquisto, current: true },
    { name: "Fattura di acquisto attività", href: ROUTES.FatturaDiAcquistoAttività, current: true },
  ]},
  {name:'Vendite',sublinkVerification:true,icon:'commesseIcon',nameotherIcon:'dropdownIcon',sublink:[
    { name: "Fatture di vendita", href: ROUTES.FattureDiVendita, current: true },
  ]},
  {name:'Scadenziario',sublinkVerification:true,icon:'commesseIcon',nameotherIcon:'dropdownIcon',sublink:[
    { name: "Scadenze", href: ROUTES.Scadenze, current: true },
    { name: "Pianificazione", href: ROUTES.Pianificazione, current: true },
  ]},
  {name:'Settings',sublinkVerification:true,icon:'settingsIcon',nameotherIcon:'dropdownIcon',sublink:[
    { name: "Skills", href: ROUTES.Skills, current: true },
    { name: "Tipi di pagamento", href: ROUTES.TipiDiPagamento, current: true },
    { name: "Utenti", href: ROUTES.Utenti, current: true },
  ]},
  {name:'Timesheet',sublinkVerification:true,icon:'timesheetIcon',nameotherIcon:'dropdownIcon',sublink:[
    { name: "Timesheet", href: ROUTES.Timesheet, current: true },
    { name: "Report", href: ROUTES.Report, current: true },
  ]}
];

export *from './auth'
export *from './urls'
