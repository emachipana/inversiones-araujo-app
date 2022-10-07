import { useEffect, useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import { Spinner } from "reactstrap";
import Button from "../../components/Button";
import FormModal from "../../components/FormModal";
import ProductCard from "../../components/ProductCard";
import SearchInput from "../../components/SearchInput";
import { destroy, get } from "../../services";
import { Container, FlexColumn, SearchContainer, Title } from "./styles";
import { BsSearch } from "react-icons/bs";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [backup, setBackup] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetch() {
      const response = await get("products");
      setProducts(response);
      setBackup(response);
      setIsLoading(false);
    }

    fetch();
  }, []);

  const handleDelete = async (id) => {
    const newProducts = backup.filter(product => product.id !== id);
    setProducts(newProducts);
    setBackup(newProducts);
    await destroy("products", id);
  }

  return (
    <>
      <Title>Productos</Title>
      <SearchContainer>
        <SearchInput 
          backup={backup}
          setParent={setProducts}
        />
        <Button
          onClick={() => setModal(!modal)}
        >
          <RiAddBoxFill
            size="20px"
          />
          Agregar
        </Button>
      </SearchContainer>
      <Container>
        {
          isLoading
          ?
          <Spinner />
          :
          products.length <= 0
          ?
          <FlexColumn>
            <BsSearch
              style={{marginTop: "2.5rem"}}
              size="60px"
            />
            <Title>Sin productos</Title>
          </FlexColumn>
          :
          products.map(product => (
            <ProductCard
              isAdmin
              id={product.id}
              handleDelete={handleDelete}
              description={product.description}
              brand={product.marca}
              name={product.name}
              image={product.photos[0].url}
              key={product.id}
              stock={product.stock}
              price={product.price}
              unit_metric={product.unit_metric}
              category={`${product.category_name}(${product.sub_category_name})`}
            />
          ))
        }
      </Container>
      {
        modal
        &&
        <FormModal
          size="md"
          type="product"
          title="Producto"
          handleClose={() => setModal(!modal)}
          setParent={setProducts}
          setBackParent={setBackup}
        />
      }
    </>
  );
}

export default ProductsPage;
