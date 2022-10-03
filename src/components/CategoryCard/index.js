/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Button } from "reactstrap";
import { Buttons, Container, Form, IconStyle, Name, Section, SubCategories } from "./styles";
import { BiEdit, BiTrash, BiCheck } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { update } from "../../services";
import { AiOutlineArrowDown, AiOutlinePlus } from "react-icons/ai";
import DeleteModal from "../DeleteModal";
import SubCategoryCard from "./sub-category-card";
import FormCheck from "./FormCheck";

function CategoryCard({ id, name, subCategories, handleDeleteCategory, handleDeleteSubCategory, handleSubmitSubCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [categoryName, setCategoryName] = useState(name);
  const [backup, setBackup] = useState(name);
  const [modal, setModal] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState("");

  const description = `
    ¿Estas seguro de eliminar esta categoría?
    Recuerda que si eliminas esta categoría, también
    se eliminaran las sub categorias y productos asociados a la misma.
  `;

  const handleChangeSubCategory = (e) => setNewSubCategory(e.target.value);

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
            <FormCheck
              Icon={BiCheck}
              handleChange={handleChange}
              inputValue={categoryName}
              placeholder="Categoría"
            />
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
      <hr 
        style={{width: "100%", border: "1px solid gray"}}
      />
      {
        subCategories.length > 0
        &&
        <SubCategories>
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
      <Form
        onSubmit={e => handleSubmitSubCategory(e, newSubCategory, id, setNewSubCategory)}
        style={{
          backgroundColor: "white",
          padding: "0.5rem",
          boxShadow: "0px 0px 3px 2px rgba(0, 0, 0, .2)",
          borderRadius: "0.5rem",
          margin: "0.8rem 0"
        }}
      >
        <FormCheck
          Icon={AiOutlinePlus}
          handleChange={handleChangeSubCategory}
          inputValue={newSubCategory}
          placeholder="Sub Categoría..."
          rounded
        />
      </Form>
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
