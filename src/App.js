import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
// this app s running with parcel and npm run dev
// there is a browsers list dependency that may cause errors in deployment
//React.create element is an API and is essentially being apllied by App
