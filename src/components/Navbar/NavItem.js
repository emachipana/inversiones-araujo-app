/** @jsxImportSource @emotion/react */
import { FaAngleDown } from "react-icons/fa6";
import { COLORS, FlexRow, Text } from "../../styles"

function TextItem({ dropDown, setDropDown, weight, css, name }) {
  return (
    <FlexRow
      onClick={() => setDropDown(!dropDown)}
      style={{color: dropDown ? COLORS.persian : ""}}
      css={css}
    >
      <Text
        weight={weight}
      >
        { name }
      </Text>
      <FaAngleDown 
      />
    </FlexRow>
  );
}

export default TextItem
