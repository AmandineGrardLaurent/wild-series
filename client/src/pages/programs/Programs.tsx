import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ProgramType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

export default function Programs() {
  const [programs, setPrograms] = useState([] as ProgramType[]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  return (
    <div>
      <h1>Liste des séries : </h1>
      <Link to={"/programs/new"}>Ajouter</Link>
      <ul>
        {programs.map((program: ProgramType) => (
          <li key={program.id}>
            <Link to={`/programs/${program.id}`}>
              <h2>{program.title}</h2>
            </Link>
            <img src={program.poster} alt={program.title} />
            <h3>{program.country}</h3>
            <h3>{program.category_id}</h3>
            <h3>{program.year}</h3>
            <p>{program.synopsis}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
