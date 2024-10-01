import "bootstrap/dist/css/bootstrap.min.css";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

export function Button2({ children, isLoading, onClick }: Props) {
  //Aqui defines los estilos del boton
  const className = [`btn btn-${isLoading ? "secondary" : "primary"}`].join(
    " "
  );

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      // className={[styles.button, styles.padded].join(" ")}
      className={className}
    >
      {/* nombre luego de hacerle click al boton */}
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

