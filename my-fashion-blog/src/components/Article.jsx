import React from "react";

function Article({ date, title, imgSrc, imgAlt, text, link }) {
  return (
    <article>
      <time className="article-date">{date}</time>
      <h3 className="article-title">{title}</h3>
      <img className="article-image" src={imgSrc} alt={imgAlt} />
      <p className="article-text">{text}</p>
      <aside>
        <a href={link} className="continue-link">
          Continues...
        </a>
      </aside>
    </article>
  );
}

export default Article;
