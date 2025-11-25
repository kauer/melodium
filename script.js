document.addEventListener('DOMContentLoaded', () => {
  // Map initialization
  const map = L.map('map').setView([-27.5969, -48.5495], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Tab switching
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      document.querySelectorAll('.tabcontent').forEach(tc => tc.classList.remove('active'));
      const panel = document.getElementById(target);
      if(panel) panel.classList.add('active');
    });
  });

  // Populate events & add map markers
  const events = [
    {title:'Show 1', desc:'Descrição rápida do evento — data, horário e local aproximado.', lat: -27.59, lng: -48.54},
    {title:'Encontro de músicos', desc:'Jam session aberta, traga instrumentos!', lat: -27.60, lng: -48.55},
    {title:'Stage Music Park: Show Ana Castela', desc:'Headliner + bandas locais. Ingressos vendidos online.', lat: -27.58, lng: -48.53},
    {title:'Concerto', desc:'Apresentação instrumental com orquestra local.', lat: -27.61, lng: -48.56}
  ];

  const eventList = document.getElementById('eventList');
  events.forEach(ev => {
    const div = document.createElement('div');
    div.className='event';
    div.innerHTML = `<h3>${ev.title}</h3><p>${ev.desc}</p>`;
    eventList.appendChild(div);

    // Add marker to the map
    L.marker([ev.lat, ev.lng]).addTo(map)
      .bindPopup(`<b>${ev.title}</b>`);
  });

  // Populate artists (sample cards)
  const artistGrid = document.getElementById('artistGrid');
  // use the other uploaded file as sample thumb
  const thumb = 'blog-10.webp';
  for(let i=1;i<=8;i++){
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = `<img src="${thumb}" alt="artista ${i}"><div class="body"><h4>Artista</h4><p>Descrição do artista</p></div>`;
    artistGrid.appendChild(card);
  }

  // Simple tag removal (visual)
  document.getElementById('tags')?.addEventListener('click', (e)=>{
    if(e.target.classList.contains('tag')){
      e.target.remove();
    }
  });

  // Pagination buttons placeholder
  document.querySelectorAll('.page').forEach(p=>{
    p.addEventListener('click', ()=> {
      document.querySelectorAll('.page').forEach(pp=>pp.classList.remove('active'));
      p.classList.add('active');
    })
  });
});
