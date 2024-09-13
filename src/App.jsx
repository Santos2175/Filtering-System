import { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Card from './components/Card.jsx';
import products from './db/data.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Button Filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  const filteredData = (products, selected) => {
    let filteredProducts = products;

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ company }) => company === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory);
  return (
    <>
      <Nav />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
