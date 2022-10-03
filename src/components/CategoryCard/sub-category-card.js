/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Button } from "reactstrap";
import { update } from "../../services";
import DeleteModal from "../DeleteModal";
import FormCheck from "./FormCheck";
import { Buttons, Form, IconStyle, Name, Section } from "./styles";

function SubCategoryCard({ id, name, Check, Edit, Close, Trash, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [subName, setSubName] = useState(name);
  const [backup, setBackup] = useState(name);
  const [modal, setModal] = useState(false);

  const description = `
    ¿Estas seguro de eliminar esta sub categoría?
    Recuerda que si eliminas esta sub categoría, también
    se eliminaran los productos asociados a la misma.
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(subName === "") return;
    setIsEditing(!isEditing);
    setBackup(subName);
    await update("sub_categories", id, { name: subName });
  }

  const handleChange = (e) => setSubName(e.target.value);

  const handleCancel = () => {
    setIsEditing(!isEditing);
    setSubName(backup);
  }

  const destroy = () => {
    handleDelete(id);
    setModal(!modal);
  } 

  return(
    <Section>
      <Form
        onSubmit={handleSubmit}
        isEditing={isEditing}
      >
        {
            isEditing
            ?
            <FormCheck
              Icon={Check}
              handleChange={handleChange}
              inputValue={subName}
              iconSize="18px"
              placeholder="Sub Categoría"
            />
            :
            <Name
              style={{fontSize: "15px"}}
            >
              { subName }
            </Name>
          }
      </Form>
      <Buttons>
          {
            !isEditing
            &&
            <Button
              onClick={() => setIsEditing(!isEditing)}
              style={{padding: "2px 4px"}}
              size="sm"
              color="warning"
            >
              <Edit
                size="16px"
                css={IconStyle}
              />
            </Button>
          }
          <Button
            onClick={() => isEditing ? handleCancel() : setModal(!modal)}
            style={{padding: "2px 4px"}}
            size="sm"
            color="danger"
          >
            {
              isEditing
              ?
              <Close 
                size="16px"
                css={IconStyle}
              />
              :
              <Trash 
                size="16px"
                css={IconStyle}
              />
            }
          </Button>
        </Buttons>
        {
          modal
          &&
          <DeleteModal
            name={name}
            description={description}
            handleClose={() => setModal(!modal)}
            handleDelete={destroy}
          />
        }
    </Section>
  );
}

export default SubCategoryCard;
