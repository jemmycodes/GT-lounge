import { MdDelete, MdDeleteOutline } from "react-icons/md";

const CartCard = ({ image, price, name, quantity }) => {
  return (
    <hgroup className="flex items-center justify-between gap-2 p-4 text-white bg-lang-card-color rounded-xl">
      <div className="flex items-center gap-2">
        <figure>
          <img
            src={image}
            alt=""
            height={30}
            width={70}
            className="rounded-full aspect-square"
          />
        </figure>
        <span className="flex flex-col gap-2">
          <h3 className="font-semibold whitespace-pre-wrap">{name}</h3>
          <span className="flex items-center gap-4">
            <p>{price}</p>
            <p className="text-sm text-gray-300">x{quantity}</p>
          </span>
        </span>
      </div>
      <span className="flex flex-col items-center justify-center gap-1 p-2 bg-gray-700 rounded-xl ">
        <div>
          <p
            className=""
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

          // onClick={() => {
          //   if (quantity <= 0) return;
          //   setQuantity((prevState) => prevState + 1);
          // }}
          >
            -
          </p>
        </div>
        <div className="p-1 rounded-lg bg-gold">
          <MdDelete className="text-2xl " />
        </div>
      </span>
    </hgroup>
  );
};

export default CartCard;
