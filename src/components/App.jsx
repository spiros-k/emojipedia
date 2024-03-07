import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emoticon) {
  return (
    <Entry
      key={emoticon.id}
      img={emoticon.emoji}
      term={emoticon.name}
      desription={emoticon.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <div className="heading">
        <h1>emojipedia</h1>

        <form role="search">
          <input placeholder="Search..." type="search" />
        </form>
      </div>
      <hr />
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
