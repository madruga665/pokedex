const fetchPokemon = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    return appendPokemon(data);
  } catch (error) {
    console.log(`Deu Ruim: ${error}`);
  }
};

const clearCard = () => {
  const img = document.querySelector(".img");
  const name = document.querySelector(".name");
  const type = document.querySelector(".type");
  const id = document.querySelector(".id");
  const error = document.querySelector(".error");

  if (id !== null || error !== null) {
    img.remove();
    id.remove();
    name.remove();
    type.remove();
  }
};

const search = () => {
  const searchBtn = document.querySelector("#search-btn");
  const input = document.querySelector("#input");

  searchBtn.addEventListener("click", () => {
    const pokemonName = input.value;
    clearCard();
    fetchPokemon(pokemonName.toLowerCase());
  });
};

search();

const backgroundCondition = (pokemon) => {
  card.className = "";
  if (pokemon.types[0].type.name === "electric") {
    card.classList.toggle("card-electric");
  }

  if (pokemon.types[0].type.name === "fire") {
    card.classList.toggle("card-fire");
  }

  if (pokemon.types[0].type.name === "fairy") {
    card.classList.toggle("card-fairy");
  }

  if (pokemon.types[0].type.name === "grass") {
    card.classList.toggle("card-grass");
  }

  if (pokemon.types[0].type.name === "water") {
    card.classList.toggle("card-water");
  }
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const appendPokemon = (pokemon) => {
  const img = document.createElement("img");
  const name = document.createElement("span");
  const type = document.createElement("span");
  const id = document.createElement("span");
  const card = document.querySelector("#card");
  const info = document.querySelector(".infos");

  // img.src = `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`
  img.src = pokemon.sprites.other.dream_world.front_default;
  id.innerHTML = `ID: ${pokemon.id}`;
  name.innerHTML = `Nome: ${capitalize(pokemon.name)}`;
  type.innerHTML = `Tipo: ${capitalize(pokemon.types[0].type.name)}`;

  backgroundCondition(pokemon);

  img.className = "img";
  id.className = "id";
  name.className = "name";
  type.className = "type";

  card.appendChild(img);
  info.appendChild(id);
  info.appendChild(name);
  info.appendChild(type);
};

window.onload = () => {
  fetchPokemon("pikachu");
};
