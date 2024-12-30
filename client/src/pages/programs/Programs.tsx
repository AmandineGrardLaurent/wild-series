import { useEffect, useState } from "react";

type ProgramType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  return (
    <div>
      <h1>Liste des séries : </h1>
      <ul>
        {programs.map((program: ProgramType) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <img src={program.poster} alt={program.title} />
            <h3>{program.country}</h3>
            <h3>{program.year}</h3>
            <p>{program.synopsis}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
