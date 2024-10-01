import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elementos: string) => void;
};

//Esta lista es un elemento funcional
export function List({ data, onSelect }: Props) {
  //useState podemos modificar variables en nuestros componentes funcionales
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

