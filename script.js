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
      // Redraw map if it was hidden
      if(target==='events') {
        map.invalidateSize();
      }
    });
  });

  // Populate events & add map markers
  const events = [
    {id: 0, title:'Show 1', desc:'Descrição rápida do evento — data, horário e local aproximado.', lat: -27.59, lng: -48.54, address: 'Rua Exemplo, 123, Florianópolis', image: 'florianopolis.webp'},
    {id: 1, title:'Encontro de músicos', desc:'Jam session aberta, traga instrumentos!', lat: -27.60, lng: -48.55, address: 'Avenida Teste, 456, São José', image: 'blog-10.webp'},
    {id: 2, title:'Stage Music Park: Show Ana Castela', desc:'Headliner + bandas locais. Ingressos vendidos online.', lat: -27.58, lng: -48.53, address: 'Rodovia SC-402, 789, Florianópolis', image: 'florianopolis.webp'},
    {id: 3, title:'Concerto', desc:'Apresentação instrumental com orquestra local.', lat: -27.61, lng: -48.56, address: 'Praça Principal, 101, Palhoça', image: 'blog-10.webp'},
    {id: 4, title:'Festival de Jazz', desc:'Festival de jazz com artistas renomados.', lat: -27.595, lng: -48.545, address: 'Parque da Cidade, 202, Florianópolis', image: 'florianopolis.webp'},
    {id: 5, title:'Show de Rock', desc:'Show de rock com bandas locais.', lat: -27.605, lng: -48.555, address: 'Bar do Rock, 303, Biguaçu', image: 'blog-10.webp'}
  ];

  const eventList = document.getElementById('eventList');
  const eventDetailsContainer = document.getElementById('event-details');
  const markers = []; // Array to hold markers

  // Function to display event details
  function displayEventDetails(event) {
    if (event) {
      eventDetailsContainer.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="event-details-image">
        <h3>${event.title}</h3>
        <p>${event.desc}</p>
        <p><strong>Endereço:</strong> ${event.address}</p>
      `;
      eventDetailsContainer.style.display = 'block';
    }
  }

  events.forEach(ev => {
    // Create and add event to the list
    const div = document.createElement('div');
    div.className='event';
    div.innerHTML = `<h3>${ev.title}</h3><p>${ev.desc}</p>`;
    // Add data attributes for interactivity
    div.dataset.lat = ev.lat;
    div.dataset.lng = ev.lng;
    div.dataset.id = ev.id;
    eventList.appendChild(div);

    // Add marker to the map and store it
    const marker = L.marker([ev.lat, ev.lng]).addTo(map)
      .bindPopup(`<b>${ev.title}</b>`);
    
    marker.on('click', () => {
      displayEventDetails(ev);
    });

    markers.push(marker);
  });

  // Add click listener to the event list
  eventList.addEventListener('click', (e) => {
    const eventEl = e.target.closest('.event');
    if (eventEl) {
      const { lat, lng, id } = eventEl.dataset;
      if (lat && lng && id) {
        map.flyTo([lat, lng], 15); // Zoom in closer
        markers[id].openPopup();
        displayEventDetails(events[id]);
      }
    }
  });

  // Add hover listener for map popups
  eventList.addEventListener('mouseover', (e) => {
    const eventEl = e.target.closest('.event');
    if (eventEl) {
      const { id } = eventEl.dataset;
      if (id && markers[id]) {
        markers[id].openPopup();
      }
    }
  });
  eventList.addEventListener('mouseout', (e) => {
    const eventEl = e.target.closest('.event');
    if (eventEl) {
      const { id } = eventEl.dataset;
      if (id && markers[id]) {
        map.closePopup();
      }
    }
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
