import React, { useState, useEffect } from 'react';
import Monster from './Monster.js'
import monsters from './beastiary-mm.json'

// const fs = require('fs');

function MonsterList(props) {
  const [displayList, updateDisplayList] = useState(null);
  const [filterText, updateFilterText] = useState("");

  useEffect(() => {
    updateDisplayList(monsters
      .filter(monster => monster.name.toLowerCase().includes(filterText))
      .slice(0, 10)
      .map(monster => { return <Monster data={monster} updateSelected={props.updateSelected} />; })
    );
  }, [filterText, props.updateSelected]);

  function handleFilterTextChange(event) {
    updateFilterText(event.target.value);
  }

  return (
    <>
      <h1>Monster List</h1>

      <form>
        <label>
          Filter: &nbsp;
          <input type="text" name="filter" value={filterText} onChange={handleFilterTextChange} />
        </label>
      </form>

      <ul>
        {displayList === null ? "Loading..." : displayList}
      </ul>

    </>
  );
}

export default MonsterList;
