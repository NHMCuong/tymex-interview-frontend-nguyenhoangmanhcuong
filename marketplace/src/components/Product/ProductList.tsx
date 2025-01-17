import { Button, Grid2 } from "@mui/material";
import ProductItem from "./ProductItem";

interface ProductListProps {
  visibleItems: Product[];
  handleLoadMore: () => void;
}

const ProductList = (props: ProductListProps) => {
  const { visibleItems, handleLoadMore } = props;
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Grid2></Grid2>
        <Grid2
          container
          spacing={2}
          className="p-5 max-h-[2096px] overflow-auto"
        >
          {visibleItems &&
            visibleItems.length > 0 &&
            visibleItems.map((item: Product) => (
              <Grid2 key={item.id} size={3}>
                <ProductItem item={item} />
              </Grid2>
            ))}
        </Grid2>
        <Grid2 size={12}>
          <Button onClick={handleLoadMore}>View more</Button>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ProductList;
