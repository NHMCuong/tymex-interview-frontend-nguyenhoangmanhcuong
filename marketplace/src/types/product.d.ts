interface Product {
  author: Author;
  category: string;
  createdAt: number;
  id: number;
  imageId: number;
  isFavorite: boolean;
  price: number;
  theme: string;
  tier: string;
  title: string;
}

interface Author {
  avatar: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  onlineStatus: string;
}
