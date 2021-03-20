import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Ivan',
      email: 'jorgovanovicivan@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Aleksandra',
      email: 'aleksandra@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: 'Crispy',
        category: 'Muesli',
        image: '/images/p1.jpg',
        price: 120,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
      
        name: 'Crispy',
        category: 'Muesli',
        image: '/images/p2.jpg',
        price: 100,
        countInStock:20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Crispy',
        category: 'Muesli',
        image: '/images/p1.jpg',
        price: 220,
        countInStock:20,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'Crispy',
        category: 'Muesli',
        image: '/images/p2.jpg',
        price: 78,countInStock:20,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'Crispy',
        category: 'Muesli',
        image: '/images/p1.jpg',
        price: 65,countInStock:20,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
      
        name: 'Crispy',
        category: 'Muesli',
        image: '/images/p2.jpg',
        price: 139,countInStock:20,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;