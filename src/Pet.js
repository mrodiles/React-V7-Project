const Pet = (props) => {
  return (
    <div>
      <h1>
        {props.name}
        {props.animal}
        {props.breed}
      </h1>
    </div>
  );
};

export default Pet;

// rewritten in jsx import react is working under the hood
