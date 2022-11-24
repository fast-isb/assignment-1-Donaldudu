import React from "react";

const OneFeedback = (props) => {
  return (
    <>
      <h4>Name: {props.user_email}</h4>
      <p>{props.feedback}</p>
      <hr />
    </>
  );
};

export default OneFeedback;
