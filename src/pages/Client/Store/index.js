import { useParams } from "react-router-dom";
import Banner from "../../../components/Banner";
import { Container, Products } from "./styles";
import { Title } from "../styles";
import ProductCard from "../../../components/ProductCard";
import Pagination from "../../../components/Pagination";
import Categories from "../../../components/Categories";
import { useClient } from "../../../context/client";
import apiFetch from "../../../services/apiFetch";
import { useEffect } from "react";

function Store() {
  const { products, isLoading, setIsLoading, setProducts, categories, productBackup } = useClient();
  const params = useParams();
  const category = params.category || "todo";

  const handlePaginationClick = async (link) => {
    setIsLoading(true);
    const products = await apiFetch(link, { isFull: true });
    setProducts(products);
    setIsLoading(false);
  }

  useEffect(() => {
    const fetch = async () => {
      if(category === "todo") return setProducts(productBackup);
      setIsLoading(true);
      const found = categories.find(item => item.name === category);
      const products = await apiFetch(`products?category_id[eq]=${found?.id}`);
      setProducts(products);
      setIsLoading(false);
    }

    fetch();
  }, [ category, categories, setIsLoading, setProducts, productBackup ]);

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
