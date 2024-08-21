type HeaderProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>
};

export default function Header({ name, setName }: HeaderProps) {
  return (
    <div style={{}}>
      <h1>{name}</h1>
      <button onClick={() => setName("András")}>Nyomd meg</button>
    </div>
  );
}
