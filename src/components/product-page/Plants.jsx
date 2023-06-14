import './Plants.css';

const Product = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-container">
          <img src="/src/assets/Photo.svg" alt="" />

          <div className="content-container">
            <h1 className="title">{data.name}</h1>
            <h2 className="main-subtitle">{data.subtitle}</h2>
            <ul className="labels-container">
              {data.label &&
                data.label.map((label) => (
                  <li className="label" key={label.index}>
                    {label}
                  </li>
                ))}
            </ul>
            <p className="price">{data.price}</p>
            <button className="check-button">Check out</button>
            <h3 className="subtitles">Features</h3>
            <ul className="features">{data.features}</ul>
            <h3 className="subtitles">Description</h3>
            <p className="text-description">{data.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
