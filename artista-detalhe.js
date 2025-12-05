document.addEventListener('DOMContentLoaded', () => {
  const artistDetailContainer = document.getElementById('artistDetailContainer');
  const params = new URLSearchParams(window.location.search);
  const artistId = parseInt(params.get('id'));

  const artist = artists.find(a => a.id === artistId);
  const artistEvents = events.filter(e => e.artistId === artistId);

  if (artist && artistDetailContainer) {
    artistDetailContainer.innerHTML = `
      <div class="artist-detail-header" style="background-image: url('${artistEvents[0].image}');">
        <h1>${artist.name}</h1>
      </div>
      <div class="artist-detail-content">
        <h2>Sobre</h2>
        <p>${artist.bio}</p>
        <h2>Gêneros</h2>
        <div class="tags">
          ${artist.genres.map(genre => `<span class="tag">${genre}</span>`).join('')}
        </div>
        <h2>Próximos Eventos</h2>
        <div class="events-list">
          ${artistEvents.map(event => `
            <div class="event-card">
              <div class="event-card-body">
                <h3>${event.title}</h3>
                <p>${event.date} - ${event.time}</p>
                <p>${event.address}</p>
                <a href="evento-detalhe.html?id=${event.id}">Ver detalhes</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else {
    artistDetailContainer.innerHTML = '<p>Artista não encontrado.</p>';
  }
});