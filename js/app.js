const api = "https:/pokeapi.co/api/v2/pokemon/";
const btn = document.querySelector("#generate")

let randomNumber = Math.random(1000) + 1;

function pudateUi(pokeInfo) {
    console.log(pokeInfo);
    console.log("hp", pokeInfo.stats[0].base_stats);
    console.log("attack", pokeInfo.stats[1].base_stats);
    console.log("defend", pokeInfo.stats[2].base_stats);
    console.log("speed", pokeInfo.stats[5].base_stats);
    console.log("type" , pokeInfo.types[0].type.name);
    console.log("img url" , pokeInfo.sprites.other.dream_world.front_default ?? pokeInfo.sprites.front_default);
    console.log(pokeInfo.name);
}

async function getData(api) {
    
}

