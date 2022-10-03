
import Button from "../../components/Button";
import { Container, Title } from "./styles";
import { RiAddBoxFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { destroy, get, post } from "../../services";
import { Spinner } from "reactstrap";
import CategoryCard from "../../components/CategoryCard";
import FormModal from "../../components/FormModal";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);  
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetch() {
      const response = await get("categories");
      setCategories(response);
      setIsLoading(false);
    }

    fetch();
  }, []);

  const handleDeleteCategory = async (id) => {
    const newCategories = categories.filter(category => category.id !== id);
    setCategories(newCategories);
    await destroy("categories", id);
  }

  const handleDeleteSubCategory = async (id) => {
    const newCategories = categories.map(category => category.sub_categories.length > 0 ? {...category, sub_categories: category.sub_categories.filter(subCategory => subCategory.id !== id)} : category);
    setCategories(newCategories);
    await destroy("sub_categories", id);
  }

  const handleSubmitSubCategory = async (e, name, categoryId, setParent) => {
    e.preventDefault();
    const response = await post("sub_categories", { name: name, category_id: categoryId });
    const newCategories = categories.map(category => category.id === categoryId ? {...category, sub_categories: [...category.sub_categories, response]} : category);
    setCategories(newCategories);
    setParent("");
  }

  return (
    <>
      <Title>Categorías</Title>
      <Button
        onClick={() => setModal(!modal)}
        size="sm"
        style={{fontSize: "15px", alignSelf: "end"}}
      >
        <RiAddBoxFill 
          size="20px"
        />
        Agregar
      </Button>
      <Container>
        {
          isLoading
          ?
          <Spinner />
          :
          categories.map(category => (
            <CategoryCard
              handleSubmitSubCategory={handleSubmitSubCategory}
              subCategories={category.sub_categories}
              handleDeleteCategory={handleDeleteCategory}
              handleDeleteSubCategory={handleDeleteSubCategory}
              id={category.id}
              key={category.id}
              name={category.name}
            />
          ))
        }
      </Container>
      {
        modal
        &&
        <FormModal
          title="Categoría"
          handleClose={() => setModal(!modal)}
          setParent={setCategories}
        />
      }
    </>
 );
}

export default CategoriesPage;
