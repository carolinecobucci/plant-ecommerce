import './Product.css';
import React from 'react';

const Product = () => {
  const url = 'http://localhost:3000/plants';
  const [plants, setPlants] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setPlants(json);
    };
    fetchData();
  }, []);
  // console.log(plants);
  return (
    <div className="product-container">
      <img src="/src/assets/Photo.svg" alt="" />

      <div className="content-container">
        <h1 className="title">{plants.name}</h1>
        <h2 className="main-subtitle">{plants.subtitle}</h2>
        <ul className="labels-container">
          {plants &&
            plants.map((label) => (
              <li className="label" key={label.id}>
                {label.name}
              </li>
            ))}
        </ul>
        <p className="price">{plants.price}</p>
        <button className="check-button">Check out</button>
        <h3 className="subtitles">Features</h3>
        <ul className="features">
          {plants &&
            plants.map((feature) => (
              <li className="features" key={feature.id}>
                {feature.name}
              </li>
            ))}
        </ul>
        <h3 className="subtitles">Description</h3>
        <p className="text-description">{plants.description}</p>
      </div>
    </div>
  );
};

export default Product;
