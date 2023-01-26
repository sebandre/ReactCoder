import React from 'react';
import '../styles/Marvel.css';

const Marvel = ({ title }) => {
  return (
    <section className="marvel marvel-slide-1">
      <div className="marvel-container">
        <article className="marvel-container__text-box">
          <h1>{title}</h1>
          <p>
         <strong>Tu tienda online de MARVEL.</strong>
          </p>
          <p>Aquí encontraras toda la merchandise que deseas y mas</p>
          <button className="button-primary">Comprar</button>
        </article>
      </div>
    </section>
  );
};

export default Marvel;