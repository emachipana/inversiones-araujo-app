/** @jsxImportSource @emotion/react */
import { Button, Input } from "reactstrap";
import { InputStyle } from "../SessionForm/styles";
import { IconStyle } from "./styles";

function FormCheck({ inputValue, handleChange, Icon, iconSize, rounded, placeholder }) {
  return (
    <>
      <Input
        style={{padding: "5px"}}
        value={inputValue}
        onChange={handleChange}
        css={InputStyle}
        placeholder={placeholder}
      />
      <Button
        type="submit"
        size="sm"
        color="success"
        style={{
          padding: "2px",
          borderRadius: rounded ? "50%" : "6px"
        }}
      >
        <Icon
          size={iconSize ? iconSize : "22px"}
          css={IconStyle}
        />
      </Button>
    </>
  );
}

export default FormCheck;
