document.getElementById('searchButton').addEventListener('click', function() {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemonName').textContent = data.name.toUpperCase();
            document.getElementById('pokemonImage').src = data.sprites.front_default;
            document.getElementById('pokemonInfo').textContent = `Peso(Libras): ${data.weight} | Altura(Pies): ${data.height}`;
        })
        .catch(error => {
            document.getElementById('pokemonName').textContent = 'Pokémon no encontrado';
            document.getElementById('pokemonImage').src = '';
            document.getElementById('pokemonInfo').textContent = '';
        });
});
