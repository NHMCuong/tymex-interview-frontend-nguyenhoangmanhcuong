import { Container, Grid2 } from "@mui/material";
import ProductFilters from "./ProductFilters";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

const batchSize = 20;

const Product = () => {
  const [listItem, setListItem] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Product[]>([]);

  const getListItem = async () => {
    const apiUrl = "http://localhost:5005/products";

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const products = await response.json();

      if (products && products.length) {
        setListItem(products);
        setVisibleItems(products.slice(0, batchSize));
      }
      console.log("products", products);
    } catch (error) {
      return null;
    }
  };

  const handleLoadMore = () => {
    const newOffset = offset + batchSize;
    const nextBatch: Product[] = listItem.slice(
      newOffset,
      newOffset + batchSize
    );
    setVisibleItems((prev: Product[]) => [...prev, ...nextBatch]);
    setOffset(newOffset);
  };

  useEffect(() => {
    getListItem();
  }, []);
  return (
    <Container maxWidth="xl">
      <Grid2 container spacing={4}>
        <Grid2 size={2}>
          <ProductFilters />
        </Grid2>
        <Grid2 size={10}>
          <ProductList visibleItems={visibleItems} handleLoadMore={handleLoadMore}/>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Product;
