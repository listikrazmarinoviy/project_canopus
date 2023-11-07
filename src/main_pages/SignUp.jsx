import React from 'react'

import { SignUpForm } from "../components/SignUpForm";

import "./SignUp.css";

const SignUp = () => {
  return (
    <div className = "image__background">

        <p className = "background__header_text">
            Join the biggest <span className="title__span">cybersecurity</span>
            <br />
            platform
        </p>
        <div className = "box__sign_up">
            <SignUpForm />
        </div>
    </div>

  )
}

export default SignUp