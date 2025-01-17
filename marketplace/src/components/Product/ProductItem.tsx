import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface ProductItemProps {
  item: Product;
}

const ProductItem = (props: ProductItemProps) => {
  const { item } = props;

  return (
    <Card sx={{ maxWidth: 267, height: 365 }}>
      <CardContent className="relative h-[70%]">
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <p className="absolute top-[0.5rem] left-[1rem] p-[1rem] bg-slate-700/50 rounded-lg text-white cursor-pointer font-bold">
          {item.category}
        </p>
        <div className="absolute top-[1.5rem] right-[1rem] w-[2rem] h-[2rem]">
          {item.isFavorite && <FavoriteIcon />}
          {!item.isFavorite && <FavoriteBorderIcon />}
        </div>
      </CardContent>
      <CardContent className="h-[15%]">
        <Grid2 container spacing={0.5} >
          <Grid2 size={6}>
            <div className="text-base">{item.title}</div>
          </Grid2>
          <Grid2 size={6}>{`${item.price} ETH`}</Grid2>
        </Grid2>
      </CardContent>
      <CardContent className="flex items-center justify-start h-[15%]">
        <Avatar alt="Remy Sharp" src={item.author.avatar} />
        <span className="ml-5">{`${item.author.lastName} ${item.author.firstName}`}</span>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
