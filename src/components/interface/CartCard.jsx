const CartCard = ({ image, price, name, quantity }) => {
  return (
    <hgroup className="bg-lang-card-color justify-between flex items-center text-white p-4 gap-2 rounded-xl">
      <div className="flex gap-2 items-center">
        <figure>
          <img
            src={image}
            alt=""
            height={30}
            width={70}
            className="rounded-full aspect-square"
          />
        </figure>
        <span className="flex gap-2 flex-col">
          <h3 className="font-semibold whitespace-pre-wrap">{name}</h3>
          <span className="flex gap-4 items-center">
            <p>{price}</p>
            <p className="text-gray-300 text-sm">x{quantity}</p>
          </span>
        </span>
      </div>
      <span className="flex flex-col bg-gray-700 p-1 gap-1 rounded-xl items-center ">
        <div>
          <p
            className="menu-btns"
            // onClick={() => {
            //   if (quantity <= 0) return;
            //   setQuantity((prevState) => prevState - 1);
            // }}
          >
            +
          </p>
        </div>

        <div>
          <p
            className="menu-btns"
            // onClick={() => {
            //   if (quantity <= 0) return;
            //   setQuantity((prevState) => prevState + 1);
            // }}
          >
            -
          </p>
        </div>
      </span>
    </hgroup>
  );
};

export default CartCard;
