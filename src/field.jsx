export default function Field({ name, value, onChange }) {
  return (
    <label>
      {name}
      <br />
      <input name={value} value={value} onChange={onChange} />
      <br />
    </label>
  );
}