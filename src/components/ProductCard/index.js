/** @jsxImportSource @emotion/react */
import { Container, Description, FlexRow, Icon, Image, Section, Text } from "./styles";
import { VscArchive } from "react-icons/vsc";
import { colors } from "../../styles";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiCategory, BiEdit, BiTrash } from "react-icons/bi";
import { Badge, Button } from "reactstrap";
import { IconStyle } from "../CategoryCard/styles";
import { useState } from "react";
import DeleteModal from "../DeleteModal";
import { GiPencilRuler } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, name, image, brand, handleDelete, unit_metric, description, stock, price, category, isAdmin }) {
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const modalDescription = `
    ¿Estas seguro de eliminar este producto?
    Asegurate de que sea el correcto.
  `;

  const destroy = () => {
    handleDelete(id);
    setModal(!modal);
  }

  return(
    <Container>
      <Section>
        <Image src={image}/>
      </Section>
      <hr />
      <Section>
        <FlexRow
          style={{justifyContent: "space-between"}}
        >
          <Text
            brand
          >
            { brand || "desconocida" }
          </Text>
          <Badge
              color={stock <= 0 ? "danger" : "success"}
            >
            { stock <= 0 ? "Agotado" : "Disponible" }
          </Badge>
        </FlexRow>
        <Text>{ name }</Text>
        <Description>
          { description }
        </Description>
        {
          isAdmin
          &&
          <>
            <FlexRow>
              <Icon>
                <VscArchive 
                  size="17px"
                  color={colors.gray.bold}
                />
                <span>{ stock }</span>
              </Icon>
              <Icon>
                <BsCurrencyDollar 
                  size="17px"
                  color={colors.gray.bold}
                />
                <span>S/. { price }</span>
              </Icon>
              <Icon>
                <GiPencilRuler 
                  size="17px"
                  color={colors.gray.bold}
                />
                <span style={{textTransform: "capitalize"}}>{ unit_metric }</span>
              </Icon>
            </FlexRow>
            <Icon>
              <BiCategory 
                size="17px"
                color={colors.gray.bold}
              />
              <span>{ category }</span>
            </Icon>
          </>
        }
      </Section>
      {
        isAdmin
        &&
        <Section
          style={{margin: "0.5rem 0.2rem 0.2rem 0"}}
        >
          <FlexRow
            style={{alignSelf: "end"}}
          >
            <Button
              style={{padding: "3px 5px"}}
              size="sm"
              onClick={() => navigate(`edit/${id}`)}
              color="warning"
            >
              <BiEdit 
                css={IconStyle}
              />
            </Button>
            <Button
              onClick={() => setModal(!modal)}
              style={{padding: "3px 5px"}}
              size="sm"
              color="danger"
            >
              <BiTrash 
                css={IconStyle}
              />
            </Button>
          </FlexRow>
        </Section>
      }
      {
        modal
        &&
        <DeleteModal
          name={name}
          description={modalDescription}
          handleClose={() => setModal(!modal)}
          handleDelete={destroy}
        />
      }
    </Container>
  )
}

export default ProductCard;
