const State = ( {items }) => {
    
  return (
    <div>
      <ul>
        {items?.map((item) => (
          <li key={item?.id}> RT{item?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default State;
