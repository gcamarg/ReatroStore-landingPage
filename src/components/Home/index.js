import React from "react";
import "./style.css";
import Counter from "../Counter";
import ProductCard from "../ProductCard";
import Form from "../Form";

export default function Home() {
  return (
    <section className="home-container">
      <header className="header">
        <a href="#retrostore" className="brand">
          RETROSTORE
        </a>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="top-container">
        <div className="main-title">
          <div id="title-text">
            <span className="gradient-1">RETRO </span>
            <span className="gradient-2">FRIDAY</span>
          </div>
          <Counter />
        </div>
        <Form />
      </div>
      <ProductCard />
      <footer>
        <p className="footer-text">© 2021 RetroStore</p>
      </footer>
    </section>
  );
}
