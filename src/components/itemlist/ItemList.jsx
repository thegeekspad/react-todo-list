import Item from '../item/Item';

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className="list-none w-[500px]">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
