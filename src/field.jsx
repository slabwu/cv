export default function Field({ name, value, onChange , description }) {
  return (
    <label>
      <p>{name}</p>
      {description ? <textarea name={value} value={value} onChange={onChange}></textarea> : <input name={value} value={value} onChange={onChange} />}
      <br />
    </label>
  );
}