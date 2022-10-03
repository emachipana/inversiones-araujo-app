/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Button, Input } from "reactstrap";
import { Buttons, Container, Form, IconStyle, Name, Section, SubCategories } from "./styles";
import { BiEdit, BiTrash, BiCheck } from "react-icons/bi";
import { InputStyle } from "../SessionForm/styles";
import { colors } from "../../styles";
import { MdClose } from "react-icons/md";
import { update } from "../../services";
import { AiOutlineArrowDown } from "react-icons/ai";
import DeleteModal from "../DeleteModal";
import SubCategoryCard from "./sub-category-card";

function CategoryCard({ id, name, subCategories, handleDeleteCategory, handleDeleteSubCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [categoryName, setCategoryName] = useState(name);
  const [backup, setBackup] = useState(name);
  const [modal, setModal] = useState(false);

  const description = `
    ¿Estas seguro de eliminar esta categoría?
    Recuerda que si eliminas esta categoría, también
    se eliminaran las sub categorias y productos asociados a la misma.
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(categoryName === "") return;
    setIsEditing(!isEditing);
    setBackup(categoryName);
    await update("categories", id, { name: categoryName });
  }

  const handleChange = (e) => setCategoryName(e.target.value);
  
  const handleCancel = () => {
    setIsEditing(!isEditing);
    setCategoryName(backup);
  }

  const destroy = () => {
    handleDeleteCategory(id);
    setModal(!modal);
  }

  return (
    <Container
      noSub={subCategories.length <= 0 }
      isOpen={isOpen}
    >
      <Section
        isTitle
      >
        <Form
          onSubmit={handleSubmit}
          isEditing={isEditing}
        >
          {
            isEditing
            ?
            <>
              <Input
                style={{padding: "5px"}}
                value={categoryName}
                onChange={handleChange}
                css={InputStyle}
                id="category_name"
                name="category_name"
              />
              <Button
                type="submit"
                style={{padding: "2px", backgroundColor: colors.green.normal, border: `1px solid ${colors.green.normal}`}}
                size="sm"
              >
                <BiCheck
                  size="22px"
                  css={IconStyle}
                />
              </Button>
            </>
            :
            <Name>{ categoryName }</Name>
          }
        </Form>
        <Buttons>
          {
            !isEditing
            &&
            <Button
              onClick={() => setIsEditing(!isEditing)}
              style={{padding: "3px 5px"}}
              size="sm"
              color="warning"
            >
              <BiEdit
                css={IconStyle}
              />
            </Button>
          }
          <Button
            onClick={() => isEditing ? handleCancel() : setModal(!modal)}
            style={{padding: "3px 5px"}}
            size="sm"
            color="danger"
          >
            {
              isEditing
              ?
              <MdClose 
                css={IconStyle}
              />
              :
              <BiTrash 
                css={IconStyle}
              />
            }
          </Button>
          <Button
            style={{padding: "3px 5px"}}
            onClick={() => setIsOpen(!isOpen)}
            size="sm"
            color="info"
          >
            <AiOutlineArrowDown 
              css={IconStyle}
              style={{transform: `rotate(${isOpen ? "360" : "180"}deg)`, transition: ".3s ease-in"}}
            />
          </Button>
        </Buttons>
      </Section>
      {
        subCategories.length > 0
        &&
        <SubCategories>
          <hr 
            style={{width: "100%", border: "1px solid gray"}}
          />
          {
            subCategories.map(subCategory => (
              <SubCategoryCard
                handleDelete={handleDeleteSubCategory}
                id={subCategory.id}
                Check={BiCheck}
                Close={MdClose}
                Edit={BiEdit}
                Trash={BiTrash}
                key={subCategory.id}
                name={subCategory.name}
              />
            ))
          }
        </SubCategories>
      }
      {
        modal
        &&
        <DeleteModal
          name={categoryName}
          description={description}
          handleClose={() => setModal(!modal)}
          handleDelete={destroy}
        />
      }
    </Container>
  );
}

export default CategoryCard;
