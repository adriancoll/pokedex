const STORAGE_NAME = "favourites";

const toggleFavorite = (id: number) => {
  console.log("toggleFavourite llamado");

  let favourites: number[] = JSON.parse(
    localStorage.getItem(STORAGE_NAME) || "[]"
  );

  if (favourites.includes(id)) {
    favourites = favourites.filter((pokeId) => pokeId !== id);
  } else {
    favourites.push(id);
  }

  localStorage.setItem(STORAGE_NAME, JSON.stringify(favourites));
};

const checkIfIsFavorite = (id: number) => {
  let favourites: number[] = JSON.parse(
    localStorage.getItem(STORAGE_NAME) || "[]"
  );

  return favourites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME) || "[]");
};

export { toggleFavorite, checkIfIsFavorite, pokemons };
