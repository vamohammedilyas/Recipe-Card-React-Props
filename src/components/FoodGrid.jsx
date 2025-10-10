import React from "react";
import FoodCard from "./FoodCard";

function FoodGrid({ items }) {
  const foodItems =
    items || [
     
      { name: "Cheeseburger", image: "https://images.unsplash.com/photo-1550547660-d9450f859349", chef: "Sarah Lee", description: "Juicy Chicken patty with cheese, lettuce, and tomato." },
      { name: "Pasta Alfredo", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b", chef: "Mario Rossi", description: "Creamy Alfredo sauce tossed with fettuccine pasta." },
      { name: "Sushi Platter", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", chef: "Kenji Tanaka", description: "Fresh assorted sushi with soy sauce and wasabi." },
      { name: "Caesar Salad", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141", chef: "Olivia Smith", description: "Fresh lettuce, croutons, and parmesan cheese." },
      
    ];

  return (
    <div style={styles.container}>
      {foodItems.map((food, index) => (
        <FoodCard key={index} {...food} />
      ))}
    </div>
  );
}

// Only container styles are needed here
const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "30px",
    backgroundColor: "#f4f4f4",
  },
};

export default FoodGrid;
