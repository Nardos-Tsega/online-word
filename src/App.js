import React, { useState } from "react";
import RichEditorExample from "./components/RichTextEditor";
import "../node_modules/draft-js/dist/Draft.css";

const App = () => {
  return (
    <div>
      <RichEditorExample />
    </div>
  );
};

export default App;
