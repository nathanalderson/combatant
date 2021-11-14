function Details(props) {
  let details;
  try {
    if (props.selected.type === "monster") {
      details = <MonsterDetails data={props.selected.data} />;
    }
  } catch { }
  return (
    <>
      <h1>Details</h1>
      {details}
    </>
  );
}

function MonsterDetails(props) {
  return <p>{props.data.name}</p>
}

export default Details;
