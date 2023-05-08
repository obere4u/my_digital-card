import React from 'react'
import { GrMail } from 'react-icons/gr'
import { AiFillLinkedin } from 'react-icons/ai'


function Button() {
  return (
    <div className="my__card-CTA ">
      <a
        href="mailto:obere4u@gmail.com"
        className="email"
      >
        <button
          type="button"
          className="my__card-CTA__link email"
        >
          <GrMail aria-hidden="true" className="my__card-CTA__link-icon"/> Email
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/nwosa-tochukwu/"
        className="linkedin"
      >
        <button type="button" className="my__card-CTA__link linkedin"
        >
          <AiFillLinkedin aria-hidden="true" className="my__card-CTA__link-icon"/> LinkedIn
        </button>
      </a>
    </div>
  );
}

export default Button