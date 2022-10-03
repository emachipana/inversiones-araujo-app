/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Button, Input } from "reactstrap";
import { update } from "../../services";
import { colors } from "../../styles";
import DeleteModal from "../DeleteModal";
import { InputStyle } from "../SessionForm/styles";
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
            <>
              <Input
                style={{padding: "5px"}}
                value={subName}
                onChange={handleChange}
                css={InputStyle}
                id="name"
                name="name"
              />
              <Button
                type="submit"
                style={{padding: "2px", backgroundColor: colors.green.normal, border: `1px solid ${colors.green.normal}`}}
                size="sm"
              >
                <Check
                  size="18px"
                  css={IconStyle}
                />
              </Button>
            </>
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
