import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Input from "../Input";

function Search({ placeholder, backgroundColor, ...props }) {
  const [param, setParam] = useState("");

  const handleChange = (e) => {
    setParam(e.target.value);
  }

  return (
    <div 
      {...props}
      style={{width: "300px"}}
    >
      <Input
        backgroundColor={backgroundColor}
        id="search"
        Icon={IoSearchOutline}
        handleChange={handleChange}
        placeholder={placeholder || "Buscar productos"}
        value={param}
      />
    </div>
  );
}

export default Search;
