document.addEventListener('DOMContentLoaded', () => {
  const artistGrid = document.getElementById('artistGrid');
  if (artistGrid) {
    artistGrid.innerHTML = ''; // Clear existing cards

    artists.forEach(artist => {
      const artistEvent = events.find(e => e.artistId === artist.id);
      const imageUrl = artistEvent ? artistEvent.image : 'images/placeholder.png';

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<img src="${imageUrl}" alt="${artist.name}"><div class="body"><h4>${artist.name}</h4><p>${artist.bio}</p></div>`;
      
      card.addEventListener('click', () => {
        window.location.href = `artista-detalhe.html?id=${artist.id}`;
      });

      artistGrid.appendChild(card);
    });
  }

  // Simple tag removal (visual)
  const tags = document.getElementById('tags');
  if (tags) {
    tags.addEventListener('click', (e) => {
      if (e.target.classList.contains('tag')) {
        e.target.remove();
      }
    });
  }

  // Pagination buttons placeholder
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => {
    p.addEventListener('click', () => {
      pages.forEach(pp => pp.classList.remove('active'));
      p.classList.add('active');
    })
  });
});