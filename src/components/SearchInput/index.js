/** @jsxImportSource @emotion/react */
import { Container, Icon, Input } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

function SearchInput({ setParent, backup }) {
  const [value, setValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if(value.length === 1) return setIsSearching(true);

    if (isSearching) {
      if(value.length <= 0) setParent(backup);
    }
  }, [value, backup, isSearching, setParent]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setParent(values => values.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return (
    <Container>
      <BsSearch 
        css={Icon}
      />
      <Input
        onChange={handleChange}
        value={value}
        placeholder="Buscar..."
      />
    </Container>
  );
}

export default SearchInput;
