document.addEventListener('DOMContentLoaded', () => {
  const artistGrid = document.getElementById('artistGrid');
  const tagsContainer = document.getElementById('tags');

  function renderArtists(artistsToRender) {
    artistGrid.innerHTML = ''; // Clear existing cards
    artistsToRender.forEach(artist => {
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

  if (tagsContainer) {
    const allGenres = ['Todos', ...new Set(artists.flatMap(artist => artist.genres))];
    tagsContainer.innerHTML = '';

    allGenres.forEach(genre => {
      const tagButton = document.createElement('button');
      tagButton.type = 'button';
      tagButton.className = 'tag';
      tagButton.textContent = genre;
      if (genre === 'Todos') {
        tagButton.classList.add('active');
      }
      tagsContainer.appendChild(tagButton);
    });

    tagsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('tag')) {
        const selectedGenre = e.target.textContent;
        
        tagsContainer.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));
        e.target.classList.add('active');

        if (selectedGenre === 'Todos') {
          renderArtists(artists);
        } else {
          const filteredArtists = artists.filter(artist => artist.genres.includes(selectedGenre));
          renderArtists(filteredArtists);
        }
      }
    });
  }

  if (artistGrid) {
    renderArtists(artists);
  }

  const pages = document.querySelectorAll('.page');
  pages.forEach(p => {
    p.addEventListener('click', () => {
      pages.forEach(pp => pp.classList.remove('active'));
      p.classList.add('active');
    })
  });
});
