import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProgramDeleteForm from "../../components/programDelete/ProgramDeleteForm";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

export default function ProgramDetail() {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | Program);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <>
        <h2>{program.title}</h2>
        <img src={program.poster} alt={program.title} />
        <h3>{program.country}</h3>
        <h3>{program.year}</h3>
        <p>{program.synopsis}</p>
        <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
        <ProgramDeleteForm id={program.id}>Supprimer</ProgramDeleteForm>
      </>
    )
  );
}
