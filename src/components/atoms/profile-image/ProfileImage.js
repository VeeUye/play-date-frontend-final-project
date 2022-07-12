import React from "react";
import PropTypes from "prop-types";
// import screenSize from "../../../functions/screenSize";

const ProfileImage = (props) => {
    // const isSmall = screenSize();
    return (
        <div>
            <img className={props.className} src={props.image} />
        </div>
    );
};

ProfileImage.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
};


export default ProfileImage;
