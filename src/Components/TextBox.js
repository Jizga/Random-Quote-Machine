import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./TextBox.css";
const URL_QUOTES = "https://quota.glitch.me/random";
const colors_API = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

export default function TextBox() {
  const [sentence, setSentence] = useState({});
  const [color, setColor] = useState("");

  const getSentence = async () => {
    const { data } = await axios.get(URL_QUOTES);
    setSentence(data);
  };

  useEffect(() => {
    getSentence();
  }, []);

  useEffect(() => {
    setColor(colors_API[Math.floor(Math.random() * 11)]);
  }, [sentence]);

  return (
    <div className="wrapper" id="quote-box" style={{ background: color }}>
      <div id="box-text" style={{ background: "aliceblue" }}>
        <h1 className="quote-text" id="text" style={{ color }}>
          "{sentence.quoteText}"
        </h1>
        <span className="quote-author" id="author">
          - {sentence.quoteAuthor}
        </span>

        <div className="buttons">
          <button
            id="new-quote"
            onClick={getSentence}
            style={{ backgroundColor: color }}
          >
            New Quote
          </button>

          <a
            id="tweet-quote"
            className="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
            title="Tweet this sentence!"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/intent/tweet?hashtags=quotes"
          >
            <button style={{ background: color }}>
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </a>
        </div>
      </div>
      <div className="footer">
        <footer>
          © 2020 Code by{" "}
          <a
            href="https://www.linkedin.com/in/vivijazmin/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Viviana Vega Ayllón
          </a>
        </footer>
      </div>
    </div>
    //<i class="fab fa-twitter"></i>
  );
}
