import './Plants.css';

const Product = ({ selectedPlant }) => {
  return (
    <div className="product-container">
      <img src="/src/assets/Photo.svg" alt="" />

      <div className="content-container">
        <h1 className="title">{selectedPlant.name}</h1>
        <h2 className="main-subtitle">{selectedPlant.subtitle}</h2>
        <ul className="labels-container">
          {selectedPlant &&
            selectedPlant.label.map((label) => (
              <li className="label" key={label.id}>
                {label.name}
              </li>
            ))}
        </ul>
        <p className="price">{selectedPlant.price}</p>
        <button className="check-button">Check out</button>
        <h3 className="subtitles">Features</h3>
        <ul className="features">
          {selectedPlant &&
            selectedPlant.features.map((feature) => (
              <li className="features" key={feature.id}>
                {feature.name}
              </li>
            ))}
        </ul>
        <h3 className="subtitles">Description</h3>
        <p className="text-description">{selectedPlant.description}</p>
      </div>
    </div>
  );
};

export default Product;
