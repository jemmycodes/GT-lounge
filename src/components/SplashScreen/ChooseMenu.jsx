import { useMemo } from "react";
import logo from "../../assets/logo.svg";
import { useLanguage } from "../../context/LanguageContext";
import MenuItems from "../interface/MenuItems";

const ChooseMenu = () => {
  const { data } = useLanguage();
  const { language, updateLanguage } = useLanguage();
  const codes = useMemo(
    () => ({
      turkish: "tr.webp",
      english: "gb.webp",
    }),
    []
  );

  return (
    <main className=" w-full h-full bg-bar-bg bg-black justify-between  text-yellow-500 overflow-hidden flex flex-col pt-10 bg-center bg-no-repeat p-4">
      <header className="flex justify-between gap-3">
        <figure className="self-center">
          <img src={logo} alt="" width={150} height={50} />
        </figure>
        <div className="flex gap-3 items-center text-gold whitespace-nowrap">
          <p className="text-sm">Switch to</p>
          <img
            src={`https://flagcdn.com/24x18/${
              language === "turkish" ? codes.english : codes.turkish
            }`}
            className="border p-2 border-[#34374b] rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gold/30"
            onClick={() =>
              updateLanguage(language === "turkish" ? "english" : "turkish")
            }
          />
        </div>
      </header>
      <ul className="flex flex-col gap-3">
        {data?.categories?.map(({ icon, type }) => {
          return <MenuItems key={type} menu={type} icon={icon} href={type} />;
        })}
      </ul>
    </main>
  );
};

export default ChooseMenu;
