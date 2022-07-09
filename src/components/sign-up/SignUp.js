import React from "react";
import screenSize from "../../functions/screenSize";
import SignUpForm from "./SignUpForm";
import Title from "../atoms/title/Title";
import BgImage from "../../assets/images/wavy2.svg";
import signUpStyles from "./sign-up.module.css";
import title from "../atoms/title/title.module.css";

const SignUp = () => {
  const isSmall = screenSize();
  return (
    <>
      <div
        className={isSmall ? signUpStyles.smallScreen : signUpStyles.bigScreen}
      >
        <div className="background">
          <img
            className={
              isSmall ? signUpStyles.smallScreenImg : signUpStyles.bigScreenImg
            }
            src={BgImage}
            alt="abstract white wavy background"
          />
        </div>
      </div>
      <Title className={title.signUp__small} text="Create Account" />
      <SignUpForm />
    </>
  );
};

export default SignUp;
