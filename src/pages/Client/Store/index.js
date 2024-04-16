import { useLocation } from "react-router-dom";
import Banner from "../../../components/Banner";
import { useData } from "../../../context/data";
import { Categories, Container, Products, Wrapper } from "./styles";
import { Title } from "../styles";
import { Line } from "../../../components/Navbar/Menu/styles";
import Item from "./Item";
import InputRange from "./Range";
import ProductCard from "../../../components/ProductCard";
import Pagination from "../../../components/Pagination";

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
        <Categories>
          <Wrapper>
            <Title size={1.2}>CATEGORÍAS</Title>
            <Line 
              width={45}
              style={{position: "relative"}}
              />
          </Wrapper>
          <Item 
            category="Todo"
            isActive={category === "todo"}
            num={69}
            redirectTo="todo"
          />
          <Item 
            category="Campo"
            isActive={category === "campo"}
            num={12}
            redirectTo="campo"
            withIcon
          />
          <Item 
            category="Laboratorio"
            isActive={category === "laboratorio"}
            num={18}
            redirectTo="laboratorio"
            withIcon
          />
          <Item 
            category="Invernadero"
            isActive={category === "invernadero"}
            num={30}
            redirectTo="invernadero"
            withIcon
          />
          <Item 
            category="Riego tecnificado"
            isActive={category === "riego"}
            num={30}
            redirectTo="riego"
            withIcon
          />
          <Wrapper>
            <Title size={1.2}>POR PRECIO</Title>
            <Line 
              width={50}
              style={{position: "relative"}}
              />
          </Wrapper>
          <InputRange min={35} max={950}/>
        </Categories>
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
