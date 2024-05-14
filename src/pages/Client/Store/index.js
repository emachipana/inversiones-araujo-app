import { useLocation } from "react-router-dom";
import Banner from "../../../components/Banner";
import { Container, Products } from "./styles";
import { Title } from "../styles";
import ProductCard from "../../../components/ProductCard";
import Pagination from "../../../components/Pagination";
import Categories from "../../../components/Categories";
import { useClient } from "../../../context/client";
import apiFetch from "../../../services/apiFetch";

function Store() {
  const { search } = useLocation();
  const { products, isLoading, setIsLoading, setProducts } = useClient();
  
  const category = search.split("category=")[1] || "todo";

  const handlePaginationClick = async (link) => {
    setIsLoading(true);
    const products = await apiFetch(link, { isFull: true });
    setProducts(products);
    setTimeout(() => setIsLoading(false), 5000);
  }

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
                      onClick={handlePaginationClick}
                      currentPage={products.meta.current_page}
                      lastPage={products.meta.last_page}
                      links={products.links}
                      pageLinks={products.meta.links}
                    />
                  </>
          )}
        </Products>
      </Container>
    </>
  );
}

export default Store;
