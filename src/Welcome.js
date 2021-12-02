import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1 className="welcome-title">
          Hello, welcome to <strong className="meet-logo">Meet</strong>
        </h1>
        <h4 className="slogan">
          A web application designed to connect people together.
        </h4>
      </>
    );
  }
}

export default Welcome;
