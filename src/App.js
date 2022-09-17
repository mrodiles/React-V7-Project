import { render } from "react-dom";
import React from "react";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="dog" breed="Parrot" />
      <Pet name="Doink" animal="dog" breed="Fish" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
// this app s running with parcel and npm run dev
// there is a browsers list dependency that may cause errors in deployment
//React.create element is an API and is essentially being apllied by App
