import { useState } from "react";
import styles from "./PlantRegistrationSection.module.css";
import img from '../assets/main-plant.png';

const PlantRegistrationSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const subtittle = document.getElementById("subtittle").value;
    const type = document.getElementById("type").value;
    const price = document.getElementById("price").value;
    const discount = document.getElementById("discount").value;
    const label = document.querySelector('input[name="label"]:checked').id;
    const features = document.getElementById("features").value;
    const description = document.getElementById("description").value;

    const formData = {
      name,
      subtittle,
      type,
      price,
      discount,
      label,
      features,
      description,
    };

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
          console.log("Dados enviados com sucesso!");
        } else {
          throw new Error("Erro ao enviar os dados.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
      });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    
      <>
        <div className={styles.container}>
          {!formSubmitted ? (
            <div className={styles.forms}>
              <h1>Plant Registration</h1>
              <form onSubmit={handleSubmit}>
                <div className={styles["input-wrapper"]}>
                  <label htmlFor="name" className={styles.labels}>
                    Plant name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Echinocereus Cactus"
                    className={styles["input-container"]}
                  />
                </div>
                <div className={styles["input-wrapper"]}>
                  <label htmlFor="subtittle" className={styles.labels}>
                    Plant subtitle
                  </label>
                  <input
                    type="text"
                    name="subtittle"
                    id="subtittle"
                    placeholder="A majestic addition to your plant collection"
                    className={styles["input-container"]}
                  />
                </div>
                <div className={styles["input-wrapper"]}>
                  <label htmlFor="type" className={styles.labels}>
                    Plant type
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Cactus"
                    className={styles["input-container"]}
                  />
                </div>
                <div className={styles["input-row"]}>
                  <div className={styles["input-wrapper"]}>
                    <label htmlFor="price" className={styles.labels}>
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="$139.99"
                      className={`${styles["input-container"]} ${styles["input-container-1"]}`}
                    />
                  </div>
                  <div className={styles["input-wrapper"]}>
                    <label htmlFor="discount" className={styles.labels}>
                      Discount percentage
                    </label>
                    <input
                      type="text"
                      name="discount"
                      id="discount"
                      placeholder="20%"
                      className={`${styles["input-container"]} ${styles["input-container-1"]}`}
                    />
                  </div>
                </div>
                <div className={styles["radio-wrapper"]}>
                  <label htmlFor="label" className={styles.labels}>
                    Label:
                  </label>
                  <div className={styles["radio-inputs"]}>
                    <input type="radio" name="label" id="indoor" />
                    <label htmlFor="indoor" className={styles.labels}>
                      Indoor
                    </label>
                    <input type="radio" name="label" id="outdoor" />
                    <label htmlFor="outdoor" className={styles.labels}>
                      Outdoor
                    </label>
                  </div>
                </div>
                <div className={styles["input-wrapper"]}>
                  <label htmlFor="features" className={styles.labels}>
                    Features
                  </label>
                  <textarea
                    name="features"
                    id="features"
                    cols="30"
                    rows="10"
                    className={`${styles["input-container"]} ${styles["input-container-3"]} ${styles["text-area"]}`}
                    placeholder="Species: Echinocereus..."
                  ></textarea>
                </div>
                <div className={styles["input-wrapper"]}>
                  <label htmlFor="description" className={styles.labels}>
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    className={`${styles["input-container"]} ${styles["input-container-3"]} ${styles["text-area"]}`}
                    placeholder="Ladyfinger cactus..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={styles.button}
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </form>
            </div>
          ) : (
            <h1 className={styles["success-message"]}>
              Form submitted successfully!
            </h1>
          )}
          <div className={styles["image-container"]}>
            <div className={styles["image-wrapper"]}>
              <img src={img} alt="planta" className={styles.imagem} />
            </div>
          </div>
        </div>
        </>
    
  );
};

export default PlantRegistrationSection;
