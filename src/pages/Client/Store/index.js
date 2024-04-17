import { useLocation } from "react-router-dom";
import Banner from "../../../components/Banner";
import { useData } from "../../../context/data";
import { Container, Products } from "./styles";
import { Title } from "../styles";
import ProductCard from "../../../components/ProductCard";
import Pagination from "../../../components/Pagination";
import Categories from "../../../components/Categories";

function Store() {
  const { search } = useLocation();
  const { products, isLoading } = useData();
  
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
                          id={product.id}
                          img={product.images[0].image_url}
                          category_id={product.category_id}
                          name={product.name}
                          price={product.price}
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
