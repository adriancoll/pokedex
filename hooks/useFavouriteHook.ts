import { useState, useEffect, useRef } from "react";

import { checkIfIsFavorite, toggleFavorite } from "../utils";

import confetti from "canvas-confetti";


export const useFavouriteHook = (id: number) => {
  const [isInFavourite, setIsInFavourite] = useState(false);

  const buttonRef = useRef<HTMLElement>();

  useEffect(() => {
    const onToggle = (ev: any) => {
      toggleFavorite(id);
      setIsInFavourite(!isInFavourite);

      if (isInFavourite) return;

      confetti({
        zIndex: 999,
        particleCount: 200,
        spread: 190,
        angle: -100,
        origin: {
          x: 0.5,
          y: -0.2,
        },
      });

    };

    if (buttonRef.current) {
      buttonRef.current.onclick = onToggle;
    }

    setIsInFavourite(checkIfIsFavorite(id));
  }, [id, isInFavourite]);

  return [isInFavourite, buttonRef];
};
