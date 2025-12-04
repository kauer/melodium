document.addEventListener('DOMContentLoaded', () => {
  // Populate artists (sample cards)
  const artistGrid = document.getElementById('artistGrid');
  // use the other uploaded file as sample thumb
  const thumb = 'images/blog-10.webp';
  if (artistGrid) {
    for(let i=1;i<=8;i++){
      const card = document.createElement('div');
      card.className='card';
      card.innerHTML = `<img src="${thumb}" alt="artista ${i}"><div class="body"><h4>Artista</h4><p>Descrição do artista</p></div>`;
      artistGrid.appendChild(card);
    }
  }

  // Simple tag removal (visual)
  const tags = document.getElementById('tags');
  if (tags) {
    tags.addEventListener('click', (e)=>{
      if(e.target.classList.contains('tag')){
        e.target.remove();
      }
    });
  }

  // Pagination buttons placeholder
  const pages = document.querySelectorAll('.page');
  pages.forEach(p=>{
    p.addEventListener('click', ()=> {
      pages.forEach(pp=>pp.classList.remove('active'));
      p.classList.add('active');
    })
  });
});
