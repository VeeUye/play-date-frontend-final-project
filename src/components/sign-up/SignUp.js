import React from "react";
import screenSize from "../../functions/screenSize";
import SignUpForm from "./SignUpForm";
import Title from "../atoms/title/Title";
import signUpStyles from "./sign-up.module.css";
import titleStyles from "../atoms/title/title.module.css";

const SignUp = () => {
  const isSmall = screenSize();
  return (
    <>
      <div
        className={isSmall ? signUpStyles.smallScreen : signUpStyles.bigScreen}
      >
        <div className="background">
          <Title className={titleStyles.createProfile} text="Create Account" />
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
