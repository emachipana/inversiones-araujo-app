import { useState } from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { Card, CardBody, CardHeader, Name } from "./styles";

function CategoryCard({ name, setParent, backup, setFilter, setOpen, subCategories = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if(subCategories.length <= 0) return;
    setIsOpen(!isOpen);
  }

  const IconStyle = {
    transform: `rotate(${isOpen ? 90 : 0}deg)`,
    fontSize: "20px",
    transition: ".3s ease-in",
    cursor: subCategories.length <= 0 ? "inherit" : "pointer"
  }
  
  const handleSet = (type, name) => {
    setFilter(name);
    setOpen(isOpen => !isOpen);
    if(subCategories.length <= 0) return setParent(backup);
    setParent(backup.filter(product => type === "category" ? (product.category_name === name) : (product.sub_category_name === name)));
  }

  return (
    <Card
      isOpen={isOpen}
    >
      <CardHeader>
        <Name
          onClick={() => handleSet("category", name)}
        >
          { `${name} ${subCategories.length > 0 ? `(${subCategories.length})` : ""}`}
        </Name>
        <BsCaretRightFill 
          style={IconStyle}
          onClick={handleOpen}
        />
      </CardHeader>
      <CardBody>
        {
          subCategories.map(subCategory => (
            <CardHeader
              key={subCategory.id}
            >
              <Name
                style={{fontSize: "15px"}}
                onClick={() => handleSet("sub_category", subCategory.name)}
              >
                { subCategory.name }
              </Name>
              <BsCaretRightFill />
            </CardHeader>
          ))
        }
      </CardBody>
    </Card>
  )
}

export default CategoryCard;
