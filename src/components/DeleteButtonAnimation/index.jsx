import React, { useState, useEffect } from "react";
import "./styles.css";

const DeleteButtonAnimation = ({ className, title, onClick, disabled }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  // Aciona o início da animação e a lógica de clique.
  const startDeleting = () => {
    setIsDeleting(true);
    onClick();
  };

  useEffect(() => {
    let timerId;

    // Quando a animação começa e o botão não está desabilitado.
    if (isDeleting && !disabled) {
      // Configura um timer para resetar o estado de 'isDeleting' após a animação.
      timerId = setTimeout(() => {
        setIsDeleting(false);
      }, 3200); // 3200ms = Duração da animação
    }

    // Limpeza do timer ao desmontar ou quando as dependências mudam.
    return () => {
      clearTimeout(timerId);
    };
  }, [isDeleting, disabled]);

  return (
    <button
      className={`button ${isDeleting ? "delete" : ""} ${className}`}
      onClick={!isDeleting && !disabled ? startDeleting : undefined}
      disabled={disabled}
    >
      <div className="trash">
        <div className="top">
          <div className="paper"></div>
        </div>
        <div className="box"></div>
        <div className="check">
          <svg viewBox="0 0 8 6">
            <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
          </svg>
        </div>
      </div>
      <span>{title}</span>
    </button>
  );
};

export default DeleteButtonAnimation;
