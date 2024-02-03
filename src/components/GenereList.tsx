import React from "react";
import useGeneres from "../hooks/useGeneres";

const GenereList = () => {
  const { genres } = useGeneres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
