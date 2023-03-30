const Alert = ({ name }) => {
  return (
    <div className="p-2 border border-[#34374b] z-20 rounded-lg bg-lang-card-color text-white fixed top-4 -translate-x-1/2 left-1/2">
      {name} added to cart
    </div>
  );
};
export default Alert;
