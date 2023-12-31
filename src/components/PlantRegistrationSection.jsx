import { useState } from "react";
import styles from "./PlantRegistrationSection.module.css";

const PlantRegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    subtittle: "",
    type: "",
    price: "",
    discount: "",
    label: "",
    features: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.subtittle ||
      !formData.type ||
      !formData.price ||
      !formData.discount ||
      !formData.label ||
      !formData.features ||
      !formData.description
    ) {
      setFormError(true);
      return;
    }

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Dados enviados com sucesso!");
          setFormError(false);
          setFormSubmitted(true);
        } else {
          throw new Error("Erro ao enviar os dados.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
      });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={`${styles.container} ${formSubmitted ? styles.containerSuccess : ""}`}>
        <div className={styles.backgroundImage}></div>
        {!formSubmitted ? (
          <div className={styles.forms}>
            <h1 className={styles.tittle}>Plant Registration</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <label htmlFor="name" className={styles.labels}>
                  Plant name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Echinocereus Cactus"
                  className={styles.inputContainer}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="subtittle" className={styles.labels}>
                  Plant subtitle
                </label>
                <input
                  type="text"
                  name="subtittle"
                  id="subtittle"
                  placeholder="A majestic addition to your plant collection"
                  className={styles.inputContainer}
                  value={formData.subtittle}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="type" className={styles.labels}>
                  Plant type
                </label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  placeholder="Cactus"
                  className={styles.inputContainer}
                  value={formData.type}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputRow}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="price" className={styles.labels}>
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="$139.99"
                    className={`${styles.inputContainer} ${styles.inputContainer1}`}
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="discount" className={styles.labels}>
                    Discount percentage
                  </label>
                  <input
                    type="text"
                    name="discount"
                    id="discount"
                    placeholder="20%"
                    className={`${styles.inputContainer} ${styles.inputContainer1}`}
                    value={formData.discount}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.radioWrapper}>
                <label htmlFor="label" className={styles.labels}>
                  Label:
                </label>
                <div className={styles.radioInputs}>
                  <input
                    type="radio"
                    name="label"
                    id="indoor"
                    value="indoor"
                    checked={formData.label === "indoor"}
                    onChange={handleChange}
                  />
                  <label htmlFor="indoor" className={styles.labels}>
                    Indoor
                  </label>
                  <input
                    type="radio"
                    name="label"
                    id="outdoor"
                    value="outdoor"
                    checked={formData.label === "outdoor"}
                    onChange={handleChange}
                  />
                  <label htmlFor="outdoor" className={styles.labels}>
                    Outdoor
                  </label>
                </div>
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="features" className={styles.labels}>
                  Features
                </label>
                <textarea
                  name="features"
                  id="features"
                  cols="30"
                  rows="10"
                  className={`${styles.inputContainer} ${styles.inputContainer3} ${styles.textArea}`}
                  placeholder="Species: Echinocereus..."
                  value={formData.features}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="description" className={styles.labels}>
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  className={`${styles.inputContainer} ${styles.inputContainer3} ${styles.textArea}`}
                  placeholder="Ladyfinger cactus..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              {formError && <p className={styles.error}>Please fill in all fields.</p>}
              <button type="submit" className={styles.button} onClick={handleSubmit}>
                Register
              </button>
            </form>
          </div>
        ) : (
          <h1 className={styles.successMessage}>Form submitted successfully!</h1>
        )}
        <div className={styles.imageContainer}></div>
      </div>
    </>
  );
};

export default PlantRegistrationSection;
