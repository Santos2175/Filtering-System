import { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Card from './components/Card.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import products from './db/data.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input Filtering
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //radio filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  // Button Filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  const filteredData = (products, selected) => {
    let filteredProducts = products;

    //Input filtering
    if (query) {
      filteredProducts = filteredItems;
    }

    //button || radio filtering
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company }) => company === selected || category === selected
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
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
