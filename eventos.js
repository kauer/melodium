document.addEventListener('DOMContentLoaded', () => {
  // Map initialization
  const mapElement = document.getElementById('map');
  if (!mapElement) return; // Do not run if map element is not on the page

  const map = L.map(mapElement).setView([-27.5969, -48.5495], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  let userLocation = null;
  const distanceSlider = document.getElementById('distance-slider');
  const distanceValue = document.getElementById('distance-value');
  let radiusCircle = null;

  // Use user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = [position.coords.latitude, position.coords.longitude];
        map.setView(userLocation, 13);
        L.marker(userLocation)
          .addTo(map)
          .bindPopup('Você está aqui.')
          .openPopup();
        
        // Draw initial radius circle
        radiusCircle = L.circle(userLocation, {
          radius: distanceSlider.value * 1000, // meters
          color: '#1e90ff',
          fillColor: '#1e90ff',
          fillOpacity: 0.1
        }).addTo(map);

        // Enable slider now that we have a location
        if(distanceSlider) distanceSlider.disabled = false;
        filterEventsByDistance(); // Initial filter
      },
      () => {
        console.log("Geolocation failed or was denied. Using default location.");
        // Keep slider disabled if location is not available
      }
    );
  }




  const eventList = document.getElementById('eventList');
  const eventDetailsContainer = document.getElementById('event-details');
  const markers = []; // Array to hold markers
  const eventElements = []; // Array to hold event DOM elements

  // Function to display event details
  function displayEventDetails(event) {
    if (event) {
      eventDetailsContainer.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="event-details-image" style="width: 70%; height: 350px; object-fit: cover; object-position: 50% 25%;">
        <h3>${event.title}</h3>
        <p>${event.desc}</p>
        <p><strong>Data:</strong> ${event.date}</p>
        <p><strong>Horário:</strong> ${event.time}</p>
        <p><strong>Endereço:</strong> ${event.address}</p>
      `;
      eventDetailsContainer.style.display = 'block';
    }
  }

  if (eventList) {
    events.forEach(ev => {
      // Create and add event to the list
      const div = document.createElement('div');
      div.className='event';
      div.innerHTML = `<h3>${ev.title}</h3><strong>${ev.date} às ${ev.time}</strong><p>${ev.desc}</p>`;
      // Add data attributes for interactivity
      div.dataset.lat = ev.lat;
      div.dataset.lng = ev.lng;
      div.dataset.id = ev.id;
      eventElements.push(div);
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
  }

  // --- Distance Filter Logic ---

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  }

  function filterEventsByDistance() {
    if (!userLocation || !distanceSlider) return;

    const radius = distanceSlider.value;
    if (distanceValue) distanceValue.textContent = `${radius} km`;

    // Update circle radius on map
    if (radiusCircle) {
      radiusCircle.setRadius(radius * 1000); // convert km to meters
    }

    events.forEach((event, index) => {
      const distance = calculateDistance(
        userLocation[0], userLocation[1],
        event.lat, event.lng
      );

      const eventElement = eventElements[index];
      const marker = markers[index];

      if (distance <= radius) {
        eventElement.style.display = 'block';
        if (!map.hasLayer(marker)) {
          marker.addTo(map);
        }
      } else {
        eventElement.style.display = 'none';
        if (map.hasLayer(marker)) {
          marker.removeFrom(map);
        }
      }
    });
  }

  if (distanceSlider) {
    distanceSlider.addEventListener('input', filterEventsByDistance);
  }
});
