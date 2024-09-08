const obtenerValor = () => {
    let inputTexto = document.getElementById('pokemonInput');
    let valor = inputTexto.value.toLowerCase(); // Convertir a minúsculas para evitar errores de búsqueda
    peticionApi(valor);
}

const peticionApi = (pokemonName) => {
    const baseUrl = 'https://pokeapi.co/api/v2/';
    const endpoint = `pokemon/${pokemonName}`;
    const url = `${baseUrl}${endpoint}`;

    axios.get(url)
    .then(res => printData(res.data))
    .catch(err => console.log('Pokémon no encontrado o error en la solicitud:', err));
}  

const printData = (data) => {
    document.getElementById('pokemonName').innerText = `Nombre: ${data.name}`;
    document.getElementById('pokemonInfo').innerHTML = `
        <p>Altura: ${data.height / 10} m</p>  
        <p>Peso: ${data.weight / 10} kg</p>   
    `;
    document.querySelector('.pokemon-data img').src = data.sprites.front_default;
}