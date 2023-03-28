import { BsCart4 } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";

const Cart = () => {
  return (
    <div className="flex flex-col">
      <header className="bg-white p-6 h-[10vh] flex text-bgBlack justify-between items-center">
        <MdKeyboardBackspace className="text-2xl" />
        <h1 className="text-xl font-semibold">Cart</h1>
        <BsCart4 className="text-2xl font-bold" />
      </header>
      <main className="bg-bgBlack h-[90vh]  flex justify-between flex-col gap-5 rounded-t-3xl p-6 pb-1">
        <section className="flex flex-col gap-6 h-[90%] overflow-y-auto scrollbar-hide">
          <hgroup className="bg-lang-card-color justify-between flex items-center text-gold p-4 rounded-xl">
            <div className="flex gap-7 items-center">
              <figure>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/2018-03-04_17_55_48_Large_serving_of_chocolate_soft-serve_ice_cream_at_the_Carvel_off_of_Denow_Road_in_Hopewell_Township%2C_Mercer_County%2C_New_Jersey.jpg"
                  alt=""
                  height={40}
                  width={80}
                  className="rounded-full aspect-square"
                />
              </figure>
              <span className="flex gap-2 flex-col">
                <h3 className="text-lg font-semibold">Ice Cream</h3>
                <h2 className="text-xl font-bold first-letter:text-sm">$12</h2>
              </span>
            </div>
            <span className="flex gap-3 items-center ">
              <p className="cursor-pointer">+</p>
              <p className="bg-black/50 px-2 py-[.05rem] rounded-lg cursor-pointer">
                5
              </p>
              <p className="cursor-pointer">-</p>
            </span>
          </hgroup>{" "}
          <hgroup className="bg-lang-card-color justify-between flex items-center text-gold p-4 rounded-xl">
            <div className="flex gap-7 items-center">
              <figure>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/2018-03-04_17_55_48_Large_serving_of_chocolate_soft-serve_ice_cream_at_the_Carvel_off_of_Denow_Road_in_Hopewell_Township%2C_Mercer_County%2C_New_Jersey.jpg"
                  alt=""
                  height={40}
                  width={80}
                  className="rounded-full aspect-square"
                />
              </figure>
              <span className="flex gap-2 flex-col">
                <h3 className="text-lg font-semibold">Ice Cream</h3>
                <h2 className="text-xl font-bold first-letter:text-sm">$12</h2>
              </span>
            </div>
            <span className="flex gap-3 items-center ">
              <p className="cursor-pointer">+</p>
              <p className="bg-black/50 px-2 py-[.05rem] rounded-lg cursor-pointer">
                5
              </p>
              <p className="cursor-pointer">-</p>
            </span>
          </hgroup>{" "}
          <hgroup className="bg-lang-card-color justify-between flex items-center text-gold p-4 rounded-xl">
            <div className="flex gap-7 items-center">
              <figure>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/2018-03-04_17_55_48_Large_serving_of_chocolate_soft-serve_ice_cream_at_the_Carvel_off_of_Denow_Road_in_Hopewell_Township%2C_Mercer_County%2C_New_Jersey.jpg"
                  alt=""
                  height={40}
                  width={80}
                  className="rounded-full aspect-square"
                />
              </figure>
              <span className="flex gap-2 flex-col">
                <h3 className="text-lg font-semibold">Ice Cream</h3>
                <h2 className="text-xl font-bold first-letter:text-sm">$12</h2>
              </span>
            </div>
            <span className="flex gap-3 items-center ">
              <p className="cursor-pointer">+</p>
              <p className="bg-black/50 px-2 py-[.05rem] rounded-lg cursor-pointer">
                5
              </p>
              <p className="cursor-pointer">-</p>
            </span>
          </hgroup>{" "}
          <hgroup className="bg-lang-card-color justify-between flex items-center text-gold p-4 rounded-xl">
            <div className="flex gap-7 items-center">
              <figure>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/2018-03-04_17_55_48_Large_serving_of_chocolate_soft-serve_ice_cream_at_the_Carvel_off_of_Denow_Road_in_Hopewell_Township%2C_Mercer_County%2C_New_Jersey.jpg"
                  alt=""
                  height={40}
                  width={80}
                  className="rounded-full aspect-square"
                />
              </figure>
              <span className="flex gap-2 flex-col">
                <h3 className="text-lg font-semibold">Ice Cream</h3>
                <h2 className="text-xl font-bold first-letter:text-sm">$12</h2>
              </span>
            </div>
            <span className="flex gap-3 items-center ">
              <p className="cursor-pointer">+</p>
              <p className="bg-black/50 px-2 py-[.05rem] rounded-lg cursor-pointer">
                5
              </p>
              <p className="cursor-pointer">-</p>
            </span>
          </hgroup>
          <hgroup className="bg-lang-card-color justify-between flex items-center text-gold p-4 rounded-xl">
            <div className="flex gap-7 items-center">
              <figure>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/2018-03-04_17_55_48_Large_serving_of_chocolate_soft-serve_ice_cream_at_the_Carvel_off_of_Denow_Road_in_Hopewell_Township%2C_Mercer_County%2C_New_Jersey.jpg"
                  alt=""
                  height={40}
                  width={80}
                  className="rounded-full aspect-square"
                />
              </figure>
              <span className="flex gap-2 flex-col">
                <h3 className="text-lg font-semibold">Ice Cream</h3>
                <h2 className="text-xl font-bold first-letter:text-sm">$12</h2>
              </span>
            </div>
            <span className="flex gap-3 items-center ">
              <p className="cursor-pointer">+</p>
              <p className="bg-black/50 px-2 py-[.05rem] rounded-lg cursor-pointer">
                5
              </p>
              <p className="cursor-pointer">-</p>
            </span>
          </hgroup>{" "}
          <hgroup className="bg-lang-card-color justify-between flex items-center text-gold p-4 rounded-xl">
            <div className="flex gap-7 items-center">
              <figure>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/2018-03-04_17_55_48_Large_serving_of_chocolate_soft-serve_ice_cream_at_the_Carvel_off_of_Denow_Road_in_Hopewell_Township%2C_Mercer_County%2C_New_Jersey.jpg"
                  alt=""
                  height={40}
                  width={80}
                  className="rounded-full aspect-square"
                />
              </figure>
              <span className="flex gap-2 flex-col">
                <h3 className="text-lg font-semibold">Ice Cream</h3>
                <h2 className="text-xl font-bold first-letter:text-sm">$12</h2>
              </span>
            </div>
            <span className="flex gap-3 items-center ">
              <p className="cursor-pointer">+</p>
              <p className="bg-black/50 px-2 py-[.05rem] rounded-lg cursor-pointer">
                5
              </p>
              <p className="cursor-pointer">-</p>
            </span>
          </hgroup>
        </section>
        <button className="text-center bg-gold rounded-full p-2 font-bold text-white">
          Checkout
        </button>
      </main>
    </div>
  );
};

export default Cart;
