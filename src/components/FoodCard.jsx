import React from "react";

// Move only the styles needed for FoodCard here
const cardStyles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.2s, box-shadow 0.3s",
    textAlign: "center",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  title: {
    fontSize: "1.2em",
    marginBottom: "8px",
    color: "#333",
  },
  chef: {
    fontStyle: "italic",
    color: "#777",
    marginBottom: "10px",
  },
  description: {
    fontSize: "0.9em",
    color: "#555",
    marginBottom: "12px",
  },
  button: {
    backgroundColor: "#ff6347",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
// Function
function FoodCard({ name, image, chef, description }) {
  return (
    <div style={cardStyles.card}>
      <img src={image} alt={name} style={cardStyles.image} />
      <div style={cardStyles.content}>
        <h2 style={cardStyles.title}>{name}</h2>
        <p style={cardStyles.chef}>Chef: {chef}</p>
        <p style={cardStyles.description}>{description}</p>
        <button style={cardStyles.button}>Order Now</button>
      </div>
    </div>
  );
}

export default FoodCard;
