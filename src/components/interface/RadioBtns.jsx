function RadioBtns({ id, value }) {
  return (
    <div>
      <input
        type="radio"
        name="choose-lang"
        className="accent-gold"
        id={id}
        value={value}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
}
export default RadioBtns;
