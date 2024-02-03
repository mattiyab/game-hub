import useGeneres from "../hooks/useGeneres";

const GenereList = () => {
  // const { genres } = useGeneres();
  //const { data } = useData<Genre>("/genres");
  const { data } = useGeneres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
