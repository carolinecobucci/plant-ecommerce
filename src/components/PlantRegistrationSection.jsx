import React, { useState } from "react";
import "./PlantRegistrationSection.css";
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
      <div className="container">
      {!formSubmitted ? (
        <div className="forms">
          <h1>Plant Registration</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="name" className="labels">Plant name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Echinocereus Cactus"
                className="input-container"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="subtittle" className="labels">Plant subtitle</label>
              <input
                type="text"
                name="subtittle"
                id="subtittle"
                placeholder="A majestic addition to your plant collection"
                className="input-container"
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="type" className="labels">Plant type</label>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Cactus"
                className="input-container"
              />
            </div>

            <div className="input-row">
              <div className="input-wrapper">
                <label htmlFor="price" className="labels">Price</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="$139.99"
                  className="input-container input-container-1"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="discount" className="labels">Discount percentage</label>
                <input
                  type="text"
                  name="discount"
                  id="discount"
                  placeholder="20%"
                  className="input-container input-container-1"
                />
              </div>
            </div>

            <div className="radio-wrapper">
              <label htmlFor="label" className="labels">Label:</label>
              <div className="radio-inputs">
                <input type="radio" name="label" id="indoor" />
                <label htmlFor="indoor" className="labels">Indoor</label>

                <input type="radio" name="label" id="outdoor" />
                <label htmlFor="outdoor" className="labels">Outdoor</label>
              </div>
            </div>

            <div className="input-wrapper">
              <label htmlFor="features" className="labels">Features</label>
              <textarea name="features" id="features" cols="30" rows="10" className="input-container input-container-3 text-area" placeholder="Species: Echinocereus..."></textarea>
              
            </div>

            <div className="input-wrapper">
              <label htmlFor="description" className="labels">Description</label>
              <textarea name="description" id="description" cols="30" rows="10" className="input-container input-container-3 text-area" placeholder="Ladyfinger cactus..."></textarea>
              </div>

            <button type="submit" className="button" onClick={handleSubmit}>
              Register
            </button>
          </form>
        </div>
        ) : (
          <h1 className="success-message">Form submitted successfully!</h1>
        )}
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img} alt="planta" className="imagem" />
      </div>
        </div>

      </div>
      
    </>
  );
};

export default PlantRegistrationSection;
