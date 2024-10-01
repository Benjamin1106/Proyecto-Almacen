// import { ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// type Props = {
//   children: ReactNode;
//   isLoading?: boolean;
//   onClick: () => void;
// };


// function Button({ children, isLoading, onClick }: Props) {
//   const className = [
//     `btn btn-${isLoading ? "secondary" : "primary"}`,
//     styles.button,
//   ].join(" ");

//   return (
//     <button
//       onClick={onClick}
//       disabled={isLoading}
//       type="button"
//       // className={[styles.button, styles.padded].join(" ")}
//       className={className}
//     >
//       {isLoading ? "Cargando..." : children}
//     </button>
//   );
// }

// export default Button;
type ButtonProps = {
  onAdd: () => void;
  onDelete: () => void;
  onDefault: () => void;
};

export const Button1: React.FC<ButtonProps> = ({ onAdd, onDelete, onDefault }) => {
  return (
    <>
      <button className="btn btn-primary" onClick={onAdd}>Agregar</button>
      <button className="btn btn-primary" onClick={onDelete}>Eliminar</button>
      <button className="btn btn-primary" onClick={onDefault}>Restablecer</button>
    </>

  );
};

