import React from "react";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Article
          date="11/11/20"
          title="On the Street of Brooklyn"
          src="../public/fashinblogwoman.jpg"
          alt="Fashion Model in Orange"
          imgAlt="Fashion Model"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa ea pariatur sunt placeat cupiditate quis neque culpa rem enim aut, ipsam explicabo velit eaque dolorem eveniet repellendus sequi perferendis?"
          link="article1.html"
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          imgSrc="images/fashionblogpeople.jpg"
          imgAlt="Fashion Critiques"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, veniam. Doloribus, quod, voluptatum, vel assumenda molestias accusamus consequuntur debitis suscipit quaerat fugiat repellendus."
          link="article2.html"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
