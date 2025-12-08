const artists = [
  {
    id: 0,
    name: 'Aurora Ribeiro',
    bio: 'Cantora e compositora de MPB, conhecida por suas letras poéticas e voz suave. Sua música transita entre a bossa nova e o samba, sempre com um toque pessoal e introspectivo. Com dois álbuns lançados, Aurora já foi indicada a diversos prêmios da música brasileira. Ela busca inspiração na natureza e nas relações humanas para compor.',
    genres: ['MPB', 'Acústico']
  },
  {
    id: 1,
    name: 'Diego “Strings”',
    bio: 'Guitarrista virtuoso, mestre do blues e do rock clássico. Diego começou a tocar aos 12 anos e desde então não parou mais. Suas performances são marcadas por solos improvisados e uma energia contagiante. Ele já dividiu o palco com grandes nomes do blues nacional e internacional.',
    genres: ['Blues', 'Rock']
  },
  {
    id: 2,
    name: 'Lira Martins',
    bio: 'Com uma voz potente, Lira Martins é uma das novas estrelas do pop nacional. Sua carreira decolou após vencer um famoso concurso de talentos na TV. Desde então, ela emplacou vários hits nas paradas de sucesso. Suas músicas falam sobre amor, empoderamento e a vida nas grandes cidades.',
    genres: ['Pop', 'MPB']
  },
  {
    id: 3,
    name: 'Maestro Renato Alvim',
    bio: 'Regente de orquestra com vasta experiência em repertórios clássicos e contemporâneos. O maestro já regeu orquestras renomadas em todo o mundo. Sua paixão pela música é evidente em cada concerto. Ele é conhecido por sua interpretação única de obras de compositores como Villa-Lobos e Tom Jobim.',
    genres: ['Clássico', 'Contemporâneo']
  },
  {
    id: 4,
    name: 'Alberto Nunes Quartet',
    bio: 'Quarteto de jazz que explora novas sonoridades e improvisações. Formado por músicos experientes, o quarteto mistura elementos do jazz tradicional com influências da música brasileira. O resultado é um som único e vibrante. Suas apresentações são uma viagem musical cheia de surpresas.',
    genres: ['Jazz', 'Fusion']
  },
  {
    id: 5,
    name: 'Thunder Wolves',
    bio: 'Banda de rock que traz riffs pesados e energia contagiante para o palco. Inspirados em bandas clássicas dos anos 70 e 80, eles fazem um som pesado e sem frescuras. Suas letras falam sobre liberdade, estrada e rock and roll. A banda é conhecida por seus shows explosivos e cheios de atitude.',
    genres: ['Rock', 'Hard Rock']
  }
];

const events = [
  {
    id: 0,
    title: 'Aurora Ribeiro - Live in Ingleses',
    artist: 'Aurora Ribeiro',
    artistId: 0,
    date: '05/12/2025',
    time: '20:00',
    desc: 'Performance intimista da cantora Aurora Ribeiro, apresentando músicas autorais e versões acústicas.',
    lat: -27.439306,
    lng: -48.492401,
    address: 'Rua César Nascimento, Jurerê, Florianópolis - SC',
    image: 'images/blog-10.webp'
  },
  {
    id: 1,
    title: 'Encontro de Músicos',
    artist: 'Diego “Strings”',
    artistId: 1,
    date: '07/12/2025',
    time: '18:30',
    desc: 'Jam session liderada pelo guitarrista Diego “Strings”. Traga seus instrumentos e participe!',
    lat: -27.599931,
    lng: -48.520032,
    address: 'Centro de eventos da UFSC, Florianópolis - SC',
    image: 'images/alabe_oni_2016_by_joel_vargas__1_-1660470.webp'
  },
  {
    id: 2,
    title: 'Stage Music Park: Festival MPB',
    artist: 'Lira Martins',
    artistId: 2,
    date: '12/12/2025',
    time: '22:00',
    desc: 'A cantora Lira Martins é a principal atração da noite, acompanhada de diversas bandas locais.',
    lat: -27.587648,
    lng: -48.576371,
    address: 'Avenida Cláudio Alvin Barbosa 398, Estreito, Florianópolis',
    image: 'images/Curiosidades-do-MPB-–-Duplas-de-Compositores-que-Deram-Muito-Certo.png.png'
  },
  {
    id: 3,
    title: 'Concerto',
    artist: 'Maestro Renato Alvim',
    artistId: 3,
    date: '15/12/2025',
    time: '19:00',
    desc: 'A orquestra local apresenta peças clássicas sob regência do maestro Renato Alvim.',
    lat: -27.615877,
    lng: -48.627598,
    address: 'Praça Hercílio Luz, Centro Histórico, São José - SC',
    image: 'images/SINFONICA_SERGIPE.jpg'
  },
  {
    id: 4,
    title: 'Festival de Jazz',
    artist: 'Alberto Nunes Quartet',
    artistId: 4,
    date: '20/12/2025',
    time: '17:00',
    desc: 'O quarteto liderado pelo saxofonista Alberto Nunes traz uma fusão moderna do jazz contemporâneo.',
    lat: -27.595,
    lng: -48.545,
    address: 'Avenida Hercilio Luz, 1077, Florianópolis, Florianópolis - SC',
    image: 'images/jazz-Festival-in-switzerland.jpg'
  },
  {
    id: 5,
    title: 'Palhoça RockFest',
    artist: 'Thunder Wolves',
    artistId: 5,
    date: '22/12/2025',
    time: '21:00',
    desc: 'A banda Thunder Wolves apresenta um set explosivo com rock autoral e clássicos energéticos.',
    lat: -27.645442,
    lng: -48.667633,
    address: 'Praça 7 de Setembro, Centro, Palhoça - SC',
    image: 'images/9°edicao-semana-do-rock-santa-catarina.jpg'
  }
];
