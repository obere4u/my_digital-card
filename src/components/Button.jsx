import React from 'react'
import { GrMail } from 'react-icons/gr'
import { AiFillLinkedin } from 'react-icons/ai'


function Button() {
  return (
    <div className="my__card-CTA ">
      <button
        type="button"
        className="my__card-CTA__link"
      >
        <a
          href="mailto:obere4u@gmail.com"
          className="email"
        >
          <GrMail /> Email
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
    </div>
  );
}

export default Button