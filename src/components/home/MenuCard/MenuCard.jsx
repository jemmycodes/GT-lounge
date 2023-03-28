const MenuCard = () => {
  return (
    <li className="bg-lang-card-color text-gold flex gap-4 relative border rounded-2xl border-[#34374b] py-5 px-8">
      <figure>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/ff/2018-03-04_17_55_48_Large_serving_of_chocolate_soft-serve_ice_cream_at_the_Carvel_off_of_Denow_Road_in_Hopewell_Township%2C_Mercer_County%2C_New_Jersey.jpg"
          alt="food"
          height={50}
          width={80}
          className="rounded-full aspect-square"
        />
      </figure>
      <span className="flex gap-2 flex-col">
        <h3 className="text-xl font-semibold">Ice Cream</h3>
        <h2 className="text-2xl font-bold first-letter:text-lg">$12</h2>
      </span>
      <span className="rounded-tl-2xl text-black rounded-br-2xl font-semibold text-xl bg-gold py-2 px-4  absolute bottom-0 right-0">
        +
      </span>
    </li>
  );
};
export default MenuCard;
