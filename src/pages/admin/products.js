import { useEffect, useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import { Spinner } from "reactstrap";
import Button from "../../components/Button";
import FormModal from "../../components/FormModal";
import SearchInput from "../../components/SearchInput";
import { get } from "../../services";
import { Container, SearchContainer, Title } from "./styles";

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
          "Productos"
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
        />
      }
    </>
  );
}

export default ProductsPage;
