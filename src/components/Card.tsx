import { ReactNode } from "react";

interface Props {
    //Reemplazamos body porque cuando se pasa una propiedad a otra podemos
    //'children'
    //El String lo reemplazamos por ReactNode
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}
interface CardBodyProps {
  title: string;
  //Este signo de pregunta quiere decir que el texto es opcional
  text?: string;
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text} </p>
    </>
  );
}

export default Card;
