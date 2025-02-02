


async function fetchPokemon() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase()
        if(!pokemonName){
            alert("Please enter the valid pokemon Name");
            return;
        }
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok){
            alert("Pokemon not found");
            return
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById('pokemonSprite');
        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';

    } catch (error) {
        console.log(error)
        alert("Something went wrong");
    }

 
    
}
