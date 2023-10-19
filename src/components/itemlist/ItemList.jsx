import Item from '../item/Item';

const ItemList = ({ items, handleCheck, handleEdit, handleDelete }) => {
  return (
    <ul className="list-none">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
