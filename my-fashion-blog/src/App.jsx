import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import "./App.css"; // Import the CSS

function App() {
  return (
    <>
      <Header />

      <Article
        date="11/11/20"
        title="On the Street Brooklyn"
        imgSrc="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg"
        alt="Fashion Model in Orange"
        imgAlt="Fashion Model"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa ea pariatur sunt placeat cupiditate quis neque culpa rem enim aut, ipsam explicabo velit eaque dolorem eveniet repellendus sequi perferendis?"
        link="article1.html"
      />
      <Article
        date="11/11/20"
        title="Vintage in Vogue"
        imgSrc="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg"
        imgAlt="Fashion Critiques"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, veniam. Doloribus, quod, voluptatum, vel assumenda molestias accusamus consequuntur debitis suscipit quaerat fugiat repellendus."
        link="article2.html"
      />

      <Footer />
    </>
  );
}

export default App;
