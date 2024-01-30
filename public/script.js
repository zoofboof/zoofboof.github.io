// public/script.js
async function getPokemon() {
    const inputElement = document.getElementById('pokemonInput');
    const pokemonName = inputElement.value.toLowerCase();
    const url = `/pokemon/${pokemonName}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        displayPokemonStats(data);
      } else {
        alert(`Error: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data. Please try again.');
    }
  }
  
  function displayPokemonStats(data) {
    const pokemonStatsElement = document.getElementById('pokemonStats');
    pokemonStatsElement.innerHTML = `<h2>${data.name}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Height: ${data.height} dm</p>
      <p>Weight: ${data.weight} hg</p>
      <h3>Base Stats:</h3>
      <ul>
        <li>HP: ${data.stats[0].base_stat}</li>
        <li>Attack: ${data.stats[1].base_stat}</li>
        <li>Defense: ${data.stats[2].base_stat}</li>
        <li>Special Attack: ${data.stats[3].base_stat}</li>
        <li>Special Defense: ${data.stats[4].base_stat}</li>
        <li>Speed: ${data.stats[5].base_stat}</li>
      </ul>`;
  }
  