import { useState } from "react";
import "./App.css";
import { Button1, Button2, Card, CardBody, List } from "./components";

export function App() {

  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading);

  // const list: string[] = ["Goku", "Tangiro", "Chanchito Feliz"];
  // const handleSelect = (elemento: string) => {
  //   console.log("imprimiendo", elemento);
  // };

  // return (
  //   <Card>
  //     <CardBody title="Hola Mundo!" text="Este es el texto" />
  // {
  //   list.length !== 0 ? (
  //     <List data={list} onSelect={handleSelect} />
  //   ) : (
  //     "No hay contenido"
  //   );
  // }
  //     <Button isLoading={isLoading} onClick={handleClick}>Hola Mundo</Button>
  //   </Card>
  // );

  // const list: string[] = ["Goku", "Tangiro","Chanchito Feliz"];


// Array de data
  const [data, setData] = useState(["Goku", "Tangiro", "Chanchito Feliz"]);

// Estado para el nuevo nombre
  const [newName, setNewName] = useState(""); 
  const addName = () => {
    if (newName.trim()) {
      // Verifica que no esté vacío
      setData([...data, newName]);
      // Limpia el input después de agregar
      setNewName("");
    }
  };

  //Eliminacion del dato
  const delDato = () => setData(data.slice(0, -1));

  //Reestablecimiento de la data por defecto
  const defaultData = () => setData(["Goku", "Tangiro", "Chanchito Feliz"]);

  //Boton 2 funcionamieno
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  return (
    <Card>
      <CardBody title="Inicializandome en React" text="Estos es mi formulario, lista, mis botones he intereacciones de boton Loading. Tambien empiezo a comprender los hooks" />
      <input
        type="text"
        value={newName}
        // Actualiza el estado con el input
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Escribe un algo: "
      />
      <Button1 onAdd={addName} onDelete={delDato} onDefault={defaultData} />
      <List data={data} />

      {/* Aqui se le cambia el contenido al boton2 despues de hacerle click */}

      <Button2 isLoading={isLoading} onClick={handleClick}>Continue</Button2>
    </Card>
  );
}

