import './Product.css';

const Product = ({
  id,
  title,
  subtitle,
  labels,
  price,
  features,
  description,
}) => {
  return (
    <div className="product-container">
      <img src="/src/assets/Photo.svg" alt="" />

      <div className="content-container">
        <h1 className="title">{title}</h1>
        <h2 className="main-subtitle">{subtitle}</h2>
        <ul className="labels-container">
          {labels.map((label) => (
            <li className="label" key={id}>
              {label}
            </li>
          ))}
        </ul>
        <p className="price">${price}</p>
        <button className="check-button">Check out</button>
        <h3 className="subtitles">Features</h3>
        <ul className="features">
          {features.map((feature) => (
            <li className="features" key={id}>
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="subtitles">Description</h3>
        <p className="text-description">{description}</p>
      </div>
    </div>
  );
};

export default Product;
