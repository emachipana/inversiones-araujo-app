/** @jsxImportSource @emotion/react */
import { FaAngleDown } from "react-icons/fa6";
import { COLORS, FlexRow, Text } from "../../styles"
import { useLocation } from "react-router-dom"; 

function TextItem({ dropDown, setDropDown, weight, css, name }) {
  const { pathname } = useLocation();

  return (
    <FlexRow
      onClick={() => setDropDown(!dropDown)}
      style={{color: (dropDown || pathname === "/tienda") ? COLORS.persian : ""}}
      css={css}
    >
      <Text
        weight={weight}
      >
        { name }
      </Text>
      <FaAngleDown
        size={15}
      />
    </FlexRow>
  );
}

export default TextItem
