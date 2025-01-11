import type { ReactNode } from "react";
import style from "./programForm.module.css";

type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

function ProgramForm({ children, defaultValue, onSubmit }: ProgramFormProps) {
  return (
    <form
      className={style.form}
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const title = formData.get("title") as string;
        const synopsis = formData.get("synopsis") as string;
        const poster = formData.get("poster") as string;
        const country = formData.get("country") as string;
        const year = Number(formData.get("year"));
        const category_id = Number(formData.get("category_id"));

        onSubmit({
          title,
          synopsis,
          poster,
          country,
          year,
          category_id,
        });
      }}
    >
      <label>
        Titre
        <input type="text" name="title" defaultValue={defaultValue.title} />
      </label>
      <label>
        Synopsis
        <input
          type="text"
          name="synopsis"
          defaultValue={defaultValue.synopsis}
        />
      </label>
      <label>
        Poster
        <input type="text" name="poster" defaultValue={defaultValue.poster} />
      </label>
      <label>
        Ville
        <input type="text" name="country" defaultValue={defaultValue.country} />
      </label>
      <label>
        Année
        <input type="text" name="year" defaultValue={defaultValue.year} />
      </label>
      <label>
        Catégorie
        <input
          type="text"
          name="category_id"
          defaultValue={defaultValue.category_id}
        />
      </label>
      <button type="submit">{children}</button>
    </form>
  );
}

export default ProgramForm;
