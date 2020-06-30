import React, { Component } from "react";
import Button from "react-toolbox/lib/button/Button";
function How() {
  return (
    <div>
      <h3>How to Use it</h3>
      <pre>git clone https://github.com/JackPu/yarn-react-webpack-seed</pre>
      <Button label="hello" />
      <p>
        Then you could use <code>yarn install</code>
      </p>
      <i>
        Of course <code>npm install</code> does the same thinkg
      </i>
    </div>
  );
}

export default How;
