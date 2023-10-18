import { BsTrash3 } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';

const Item = ({ item, handleCheck, handleEdit, handleDelete }) => {
  return (
    <li className="flex items-center space-x-5 rounded-md shadow-lg bg-slate-100 m-2 p-5 hover:bg-purple-500">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheck(item.id)}
        className="accent-purple-500 h-5 w-5"
      />
      <label onDoubleClick={() => handleCheck(item.id)} className="flex-grow ">
        {item.name}
      </label>
      <button className="hover:text-green-500">
        <CiEdit onClick={() => handleEdit(item.id)} className="h-6 w-6" />
      </button>
      <button className="hover:text-red-500">
        <BsTrash3 onClick={() => handleDelete(item.id)} className="h-5 w-5" />
      </button>
    </li>
  );
};

export default Item;
