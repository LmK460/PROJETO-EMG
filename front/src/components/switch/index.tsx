import { useContext } from "react";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import { Theme } from "../../context/themeProvider";

export default function Switch() {
  const { theme, setTheme } = useContext(Theme);

  const handleChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex items-center gap-3">
      {theme === "dark" ? (
        <BsFillMoonStarsFill className="text-white" />
      ) : (
        <BsSunFill className="text-yellow-500" />
      )}
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
          onChange={handleChange}
        />
        <div
          className="w-11 h-6 bg-gray-200
        peer-focus:outline-none peer-focus:ring-4 
        peer-focus:ring-blue-300 
        dark:peer-focus:ring-blue-800 
        rounded-full peer dark:bg-yellow-500 
        peer-checked:after:translate-x-full 
        peer-checked:after:border-white after:content-[''] 
        after:absolute after:top-[2px] after:left-[2px] after:bg-white 
        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
        after:transition-all dark:border-gray-600 
        peer-checked:bg-blue-600"
        ></div>
      </label>
    </div>
  );
}
