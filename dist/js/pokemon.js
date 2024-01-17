import { Pokemon } from "./models/constructor.js";
const pokemonLista = [
    new Pokemon(132, "Ditto", 101, 3, 40, false, new Date("2023-01-12"), [{ ability: "limber " }, { ability: "imposter " }], [{ base_stat: 48, stat: "hp" }, { base_stat: 48, stat: "attack" }, { base_stat: 48, stat: "defense" }])
];
function exibirPokemons() {
    pokemonLista.forEach(pokemon => {
        const pPokemonId = document.querySelector(`#pokemon_id`);
        const pokemonId = pokemon.id.toString();
        pPokemonId.textContent = pokemonId;
        const pPokemonBE = document.querySelector(`#pokemon_base_experience`);
        const pokemonBaseExperience = pokemon.base_experience.toString();
        pPokemonBE.textContent = pokemonBaseExperience;
        const pPokemonName = document.querySelector(`#pokemon_name`);
        const pokemonName = pokemon.name;
        pPokemonName.textContent = pokemonName;
        const pPokemonH = document.querySelector(`#pokemon_height`);
        const pokemonHeight = pokemon.height.toString();
        pPokemonH.textContent = pokemonHeight;
        const pPokemonW = document.querySelector(`#pokemon_weight`);
        const pokemonWeight = pokemon.weight.toString();
        pPokemonW.textContent = pokemonWeight;
        const pPokemonl = document.querySelector('#pokemon_legendary');
        for (const pokemon of pokemonLista) {
            const pokemon_Legendary = pokemon.legendary;
            pPokemonl.innerHTML = pokemon_Legendary.toString();
        }
        const pPokemonFA = document.querySelector(`#pokemon_firstAppearance`);
        const pokemonFirstAppearance = pokemon.firstAppearance.toLocaleDateString();
        pPokemonFA.textContent = pokemonFirstAppearance;
        const pPokemonAbility = document.querySelector('#pokemon_ability');
        for (const pokemon of pokemonLista) {
            for (const ability of pokemon.abilities) {
                pPokemonAbility.appendChild(document.createTextNode(ability.ability));
            }
        }
        const pPokemonStat_hp = document.querySelector('#pokemon_stat_hp');
        for (const pokemon of pokemonLista) {
            for (const stat of pokemon.stats) {
                pPokemonStat_hp.textContent = stat.base_stat.toString();
            }
        }
        const pPokemonStat_attack = document.querySelector('#pokemon_stat_attack');
        for (const pokemon of pokemonLista) {
            for (const stat of pokemon.stats) {
                pPokemonStat_attack.textContent = stat.base_stat.toString();
            }
        }
        const pPokemonStat_defense = document.querySelector('#pokemon_stat_defense');
        for (const pokemon of pokemonLista) {
            for (const stat of pokemon.stats) {
                pPokemonStat_defense.textContent = stat.base_stat.toString();
            }
        }
    });
}
window.addEventListener('DOMContentLoaded', exibirPokemons);
