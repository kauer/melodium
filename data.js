const artists = [
  {
    id: 0,
    name: 'Aurora Ribeiro',
    bio: 'Cantora e compositora de MPB, conhecida por suas letras poéticas e voz suave.',
    genres: ['MPB', 'Acústico']
  },
  {
    id: 1,
    name: 'Diego “Strings”',
    bio: 'Guitarrista virtuoso, mestre do blues e do rock clássico.',
    genres: ['Blues', 'Rock']
  },
  {
    id: 2,
    name: 'Lira Martins',
    bio: 'Com uma voz potente, Lira Martins é uma das novas estrelas do pop nacional.',
    genres: ['Pop', 'MPB']
  },
  {
    id: 3,
    name: 'Maestro Renato Alvim',
    bio: 'Regente de orquestra com vasta experiência em repertórios clássicos e contemporâneos.',
    genres: ['Clássico', 'Contemporâneo']
  },
  {
    id: 4,
    name: 'Sophie Nunes Quartet',
    bio: 'Quarteto de jazz que explora novas sonoridades e improvisações.',
    genres: ['Jazz', 'Fusion']
  },
  {
    id: 5,
    name: 'Thunder Wolves',
    bio: 'Banda de rock que traz riffs pesados e energia contagiante para o palco.',
    genres: ['Rock', 'Hard Rock']
  }
];

const events = [
  {
    id: 0,
    title: 'Show 1',
    artist: 'Aurora Ribeiro',
    artistId: 0,
    date: '05/12/2025',
    time: '20:00',
    desc: 'Performance intimista da cantora Aurora Ribeiro, apresentando músicas autorais e versões acústicas.',
    lat: -27.581635,
    lng: -48.508401,
    address: 'Rua Exemplo, 123, Florianópolis',
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
    address: 'Avenida Teste, 456, São José',
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
    address: 'Rodovia SC-402, 789, Florianópolis',
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
    lat: -27.594374,
    lng: -48.556806,
    address: 'Praça Principal, 101, Palhoça',
    image: 'images/SINFONICA_SERGIPE.jpg'
  },
  {
    id: 4,
    title: 'Festival de Jazz',
    artist: 'Sophie Nunes Quartet',
    artistId: 4,
    date: '20/12/2025',
    time: '17:00',
    desc: 'O quarteto liderado pela saxofonista Sophie Nunes traz uma fusão moderna do jazz contemporâneo.',
    lat: -27.595,
    lng: -48.545,
    address: 'Parque da Cidade, 202, Florianópolis',
    image: 'images/jazz-Festival-in-switzerland.jpg'
  },
  {
    id: 5,
    title: 'Show de Rock',
    artist: 'Thunder Wolves',
    artistId: 5,
    date: '22/12/2025',
    time: '21:00',
    desc: 'A banda Thunder Wolves apresenta um set explosivo com rock autoral e clássicos energéticos.',
    lat: -27.59,
    lng: -48.552,
    address: 'Bar do Rock, 303, Biguaçu',
    image: 'images/9°edicao-semana-do-rock-santa-catarina.jpg'
  }
];
