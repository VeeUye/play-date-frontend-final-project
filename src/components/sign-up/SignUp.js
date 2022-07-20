import React from "react";
import screenSize from "../../functions/screenSize";
import SignUpForm from "./SignUpForm";
import Title from "../atoms/title/Title";
import signUpStyles from "./sign-up.module.css";
import title from "../atoms/title/title.module.css";

const SignUp = () => {
  const isSmall = screenSize();
  return (
    <>
      <div
        className={isSmall ? signUpStyles.smallScreen : signUpStyles.bigScreen}
      >
        <div className={signUpStyles.background}>
          <Title
            className={isSmall ? title.signUp__small : title.signUp__big}
            text="Create Account"
          />
          <div className={signUpStyles.waveDiv}>
            <svg
              width="6000px"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 150"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={signUpStyles.shapeFill}
              ></path>
            </svg>
          </div>
          <div
            className={
              isSmall ? signUpStyles.bgBottomSmall : signUpStyles.bgBottomBig
            }
          ></div>

          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
