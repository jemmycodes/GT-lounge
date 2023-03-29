const Input = () => {
  return (
    <input
      type="number"
      value={1}
      className="  text-gold border border-gold bg-transparent focus:outline-none focus:border-2 max-w-[2rem]  rounded-md text-center"
      //   onChange={(e) => setQuantity(e.target.value)}
      required
    />
  );
};

export default Input;
