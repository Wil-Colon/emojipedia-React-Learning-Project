import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function info(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(info)}</dl>
    </div>
  );
}

export default App;
