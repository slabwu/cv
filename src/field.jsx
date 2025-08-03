export default function Field({ name, value, onChange }) {
  return (
    <label>
      <p>{name}</p>
      <input name={value} value={value} onChange={onChange} />
      <br />
    </label>
  );
}