//just a foolish lookup of known suffixes
const Adj = 'Adjective'
const Inf = 'Infinitive'
const Pres = 'PresentTense'
const Sing = 'Singular'
const Past = 'PastTense'
const Avb = 'Adverb'
const Plrl = 'Plural'
const Actor = 'Actor'
const Vb = 'Verb'
const Noun = 'Noun'
const Prop = 'ProperNoun'
const Last = 'LastName'
const Modal = 'Modal'
const Place = 'Place'
const Prt = 'Participle'

export default [
  null,
  null,
  {
    //2-letter
    ea: Sing,
    ia: Noun,
    ic: Adj,
    ly: Avb,
    "'n": Vb,
    "'t": Vb,
  },
  {
    //3-letter
    oed: Past,
    ued: Past,
    xed: Past,
    ' so': Avb,
    "'ll": Modal,
    "'re": 'Copula',
    azy: Adj,
    eer: Noun,
    end: Vb,
    ped: Past,
    ffy: Adj,
    ify: Inf,
    ing: 'Gerund',
    ize: Inf,
    ibe: Inf,
    lar: Adj,
    mum: Adj,
    nes: Pres,
    nny: Adj,
    // oid: Adj,
    ous: Adj,
    que: Adj,
    ger: Noun,
    ber: Noun,
    rol: Sing,
    sis: Sing,
    ogy: Sing,
    oid: Sing,
    ian: Sing,
    zes: Pres,
    eld: Past,
    ken: Prt, //awoken
    ven: Prt, //woven
    ten: Prt, //brighten
    ect: Inf,
    ict: Inf,
    // ide: Inf,
    ign: Inf,
    oze: Inf,
    ful: Adj,
    bal: Adj,
    ton: Noun,
    pur: Place,
  },
  {
    //4-letter
    amed: Past,
    aped: Past,
    ched: Past,
    lked: Past,
    rked: Past,
    reed: Past,
    nded: Past,
    mned: Adj,
    cted: Past,
    dged: Past,
    ield: Sing,
    akis: Last,
    cede: Inf,
    chuk: Last,
    czyk: Last,
    ects: Pres,
    iend: Sing,
    ends: Vb,
    enko: Last,
    ette: Sing,
    iary: Sing,
    wner: Sing, //owner
    fies: Pres,
    fore: Avb,
    gate: Inf,
    gone: Adj,
    ices: Plrl,
    ints: Plrl,
    ruct: Inf,
    ines: Plrl,
    ions: Plrl,
    ners: Plrl,
    pers: Plrl,
    lers: Plrl,
    less: Adj,
    llen: Adj,
    made: Adj,
    nsen: Last,
    oses: Pres,
    ould: Modal,
    some: Adj,
    sson: Last,
    ians: Plrl,
    // tage: Inf,
    tion: Sing,
    tage: Noun,
    ique: Sing,
    tive: Adj,
    tors: Noun,
    vice: Sing,
    lier: Sing,
    fier: Sing,
    wned: Past,
    gent: Sing,
    tist: Actor,
    pist: Actor,
    rist: Actor,
    mist: Actor,
    yist: Actor,
    vist: Actor,
    ists: Actor,
    lite: Sing,
    site: Sing,
    rite: Sing,
    mite: Sing,
    bite: Sing,
    mate: Sing,
    date: Sing,
    ndal: Sing,
    vent: Sing,
    uist: Actor,
    gist: Actor,
    note: Sing,
    cide: Sing, //homicide
    ence: Sing, //absence
    wide: Adj, //nationwide
    // side: Adj,//alongside
    vide: Inf, //provide
    ract: Inf,
    duce: Inf,
    pose: Inf,
    eive: Inf,
    lyze: Inf,
    lyse: Inf,
    iant: Adj,
    nary: Adj,
    ghty: Adj,
    uent: Adj,
    erer: Actor, //caterer
    bury: Place,
    dorf: Noun,
    esty: Noun,
    wych: Place,
    dale: Place,
    folk: Place,
    vale: Place,
    abad: Place,
    sham: Place,
    wick: Place,
    view: Place,
  },
  {
    //5-letter
    elist: Actor,
    holic: Sing,
    phite: Sing,
    tized: Past,
    urned: Past,
    eased: Past,
    ances: Plrl,
    bound: Adj,
    ettes: Plrl,
    fully: Avb,
    ishes: Pres,
    ities: Plrl,
    marek: Last,
    nssen: Last,
    ology: Noun,
    osome: Sing,
    tment: Sing,
    ports: Plrl,
    rough: Adj,
    tches: Pres,
    tieth: 'Ordinal',
    tures: Plrl,
    wards: Avb,
    where: Avb,
    archy: Noun,
    pathy: Noun,
    opoly: Noun,
    embly: Noun,
    phate: Noun,
    ndent: Sing,
    scent: Sing,
    onist: Actor,
    anist: Actor,
    alist: Actor,
    olist: Actor,
    icist: Actor,
    ounce: Inf,
    iable: Adj,
    borne: Adj,
    gnant: Adj,
    inant: Adj,
    igent: Adj,
    atory: Adj,
    // ctory: Adj,
    rient: Sing,
    dient: Sing,
    maker: Actor,
    burgh: Place,
    mouth: Place,
    ceter: Place,
    ville: Place,
    hurst: Place,
    stead: Place,
    endon: Place,
    brook: Place,
    shire: Place,
    worth: Noun,
    field: Prop,
    ridge: Place,
  },
  {
    //6-letter
    auskas: Last,
    parent: Sing,
    cedent: Sing,
    ionary: Sing,
    cklist: Sing,
    brooke: Place,
    keeper: Actor,
    logist: Actor,
    teenth: 'Value',
    worker: Actor,
    master: Actor,
    writer: Actor,
    brough: Place,
    cester: Place,
    ington: Place,
    cliffe: Place,
    ingham: Place,
  },
  {
    //7-letter
    chester: Place,
    logists: Actor,
    opoulos: Last,
    borough: Place,
    sdottir: Last, //swedish female
  },
]
