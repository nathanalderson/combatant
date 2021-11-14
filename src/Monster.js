function Monster(props) {
  let type = getType(props.data)

  function handleClick() {
    props.updateSelected({
      "type": "monster",
      "data": props.data,
    });
  }

  return (
    <li onClick={handleClick} key={props.data.name}>
      {getIcon(type)} {props.data.name} ({getSize(props.data)} {type})
    </li>
  );
}

function getIcon(type) {
  let icons = {
    "aberration": "🦑",
    "beast": "🐐",
    "celestial": "🌟",
    "construct": "🤖",
    "dragon": "🐉",
    "elemental": "🔥",
    "fey": "🧚",
    "fiend": "💀",
    "giant": "🗿",
    "humanoid": "🧝",
    "monstrosity": "👹",
    "ooze": "🍯",
    "plant": "🌱",
    "undead": "🧟",
  };
  return icons[type] || "❓"
}

function getSize(d) {
  let sizes = {
    "t": "tiny",
    "s": "small",
    "m": "medium",
    "l": "large",
    "h": "huge",
    "g": "gargantuan",
  };
  return sizes[d.size.toLowerCase()] || d.size;
}

function getType(d) {
  return d.type.type || d.type;
}

export default Monster;
