import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import Categories from "../../components/Categories";
import ProductCard from "../../components/ProductCard";
import { get } from "../../services";
import { Container } from "../admin/styles";
import { Container as Wrapper } from "../../AuthenticatedApp";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [backup, setBackup] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <Wrapper>
      <Categories
        backup={backup}
        setParent={setProducts}
      />
      <Container>
        {
          isLoading
          ?
          <Spinner />
          :
          products.map(product => (
            <ProductCard 
              key={product.id}
              brand={product.marca}
              name={product.name}
              category={`${product.category_name} (${product.sub_category_name})`}
              description={product.description}
              image={product.photos[0].url}
              stock={product.stock}
            />
          ))
        }
      </Container>
    </Wrapper>
  );
}

export default ProductsPage;
