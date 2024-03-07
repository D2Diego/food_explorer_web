import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("@foodexplorer:favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  function addDishToFavorite(data) {
    const isAlreadyFavorite = favorites.some(
      (favorite) => favorite.id === data.id
    );
    if (!isAlreadyFavorite) {
      setFavorites((prevFavorites) => [...prevFavorites, data]);
    }
  }

  function removeDishFromFavorite(data) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((dish) => dish.id !== data.id)
    );
  }

  useEffect(() => {
    localStorage.setItem("@foodexplorer:favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addDishToFavorite,
        removeDishFromFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}

export { FavoritesProvider, useFavorites };
