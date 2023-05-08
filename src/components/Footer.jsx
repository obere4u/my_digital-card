import React from 'react'
import { AiFillLinkedin, AiOutlineCodepen } from 'react-icons/ai';
import { FaGithub, FaTwitterSquare } from "react-icons/fa";



function Footer() {
  return (
    <footer className="my__card-footer my__card-CTA">
      <button
        type="button"
        className="my__card-CTA__link github"
      >
        <a
          href="https://www.github.com/obere4u"
          className="github">
          <FaGithub aria-hidden /> Github
        </a>
      </button>
      <button
        type="button"
        className="my__card-CTA__link  twitter"
      >
        <a
          href="https://www.twitter.com/TochiObere"
          className="twitter"
        >
          <FaTwitterSquare aria-hidden /> Twitter
        </a>
      </button>
      <button
        type="button"
        className="my__card-CTA__link linkedin"
      >
        <a
          href="https://www.linkedin.com/in/nwosa-tochukwu/"
          className="linkedin"
        >
          <AiFillLinkedin aria-hidden /> LinkedIn
        </a>
      </button>
      <button
        type="button"
        className="my__card-CTA__link"
      >
        <a
          href="https://www.codepen.io/obere4u"
          className="codepen"
        >
          <AiOutlineCodepen aria-hidden /> Codepen
        </a>
      </button>
    </footer>
  );
}

export default Footer