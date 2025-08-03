export const ProductList = ({ collection }) => {
  return (
    <ul>
      {collection.map(el => (
        <li key={el._id}>{el.title}</li>
      ))}
    </ul>
  );
};
