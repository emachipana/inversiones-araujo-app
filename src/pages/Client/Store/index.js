import { useLocation } from "react-router-dom";
import Banner from "../../../components/Banner";
import { Container, Products } from "./styles";
import { Title } from "../styles";
import ProductCard from "../../../components/ProductCard";
import Pagination from "../../../components/Pagination";
import Categories from "../../../components/Categories";
import { useClient } from "../../../context/client";

function Store() {
  const { search } = useLocation();
  const { products, isLoading } = useClient();
  
  const category = search.split("category=")[1] || "todo";

  return (
    <>
      <Banner 
        title={`TIENDA / ${category.toUpperCase()}`}
        withoutIcon
      />
      <Container>
        <Categories 
          category={category}
        />
        <Products>
          {
            isLoading
            ? "Cargando..."
            : (
                !products.data || products?.data.length <= 0
                ? <Title
                    style={{margin: "0 auto"}}
                  >
                    No hay productos disponibles
                  </Title>
                : <>
                    {
                      products.data.map((product, index) => (
                        <ProductCard
                          key={index}
                          product={product}
                        />
                      ))
                    }
                    <Pagination 
                      currentPage={2}
                      nextLink={""}
                      prevLink={""}
                    />
                  </>
          )}
        </Products>
      </Container>
    </>
  );
}

export default Store;
