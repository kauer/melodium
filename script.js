// Basic UI: tabs, sample data injection, simple interactivity

document.addEventListener('DOMContentLoaded', () => {
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

  // Populate events
  const events = [
    {title:'Show 1', desc:'Descrição rápida do evento — data, horário e local aproximado.'},
    {title:'Encontro de músicos', desc:'Jam session aberta, traga instrumentos!'},
    {title:'Stage Music Park: Show Ana Castela', desc:'Headliner + bandas locais. Ingressos vendidos online.'},
    {title:'Concerto', desc:'Apresentação instrumental com orquestra local.'}
  ];

  const eventList = document.getElementById('eventList');
  events.forEach(ev => {
    const div = document.createElement('div');
    div.className='event';
    div.innerHTML = `<h3>${ev.title}</h3><p>${ev.desc}</p>`;
    eventList.appendChild(div);
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
