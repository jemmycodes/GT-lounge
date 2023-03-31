const Signs = ({ sign, onClick, classes }) => {
  return (
    <div className={classes} onClick={onClick}>
      <p>{sign}</p>
    </div>
  );
};

export default Signs;
