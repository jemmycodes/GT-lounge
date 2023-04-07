function RadioButtons({ id, value, language, onLanguageChange }) {
  return (
    <div>
      <input
        checked={language === id}
        className="accent-gold"
        id={id}
        name="choose-lang"
        type="radio"
        onChange={() => onLanguageChange(value.toLowerCase())}
        value={value}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
}

export default RadioButtons;
