import React from 'react'
import { AiFillLinkedin, AiOutlineCodepen } from 'react-icons/ai';
import { FaGithub, FaTwitterSquare } from "react-icons/fa";



function Footer() {
  return (
    <footer className="my__card-footer">
      <a
        href="https://www.github.com/obere4u"
        className="my__card-footer__icon"
      >
        <button
          type="button"
          className="my__card-footer__icon"
        >
          <FaGithub
            aria-hidden="true"
            className="my__card-footer__icon"
          />
        </button>
      </a>
      <a
        href="https://www.twitter.com/TochiObere"
        className="my__card-footer__icon"
      >
        <button
          type="button"
          className="my__card-footer__icon"
        >
          <FaTwitterSquare aria-hidden="true" />
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/nwosa-tochukwu/"
        className="my__card-footer__icon"
      >
        <button
          type="button"
          className="my__card-footer__icon"
        >
          <AiFillLinkedin aria-hidden="true" />
        </button>
      </a>
      <a
        href="https://www.codepen.io/obere4u"
        className="my__card-footer__icon"
      >
        <button
          type="button"
          className="my__card-footer__icon"
        >
          <AiOutlineCodepen aria-hidden="true" />
        </button>
      </a>
    </footer>
  );
}

export default Footer