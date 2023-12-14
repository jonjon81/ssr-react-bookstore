import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook, update } from '../redux/actions/BookActions';
import { blockInvalidChar } from '../utils/helper';
import { Book } from '../redux/reducers/BookReducer';

interface BookFormProps {
  book: Book;
}

const BookForm: FC<BookFormProps> = ({ book }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState<string>(book.title);
  const [newMessage, setNewMessage] = useState<string>(book.message);
  const [newCategory, setNewCategory] = useState<string>(book.category);
  const [newPrice, setNewPrice] = useState<number>(book.price);

  const handleEdit = (e: any): void => {
    e.preventDefault();
    const data = {
      newTitle,
      newMessage,
      newCategory,
      newPrice,
    };
    dispatch(update(book.id, data));
  };

  return (
    <div>
      <div onClick={() => dispatch(editBook(book.id))} className="modal-1">
        <form onClick={(e) => e.stopPropagation()}>
          <button onClick={() => dispatch(editBook(book.id))} className="btn-close"></button>
          <h2 className="mb-3">Edit Book</h2>
          <input
            required
            value={newTitle}
            type="text"
            name="title"
            placeholder="Enter new title"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <br /> <br />
          <input
            required
            onKeyDown={blockInvalidChar}
            value={newPrice}
            type="number"
            name="price"
            placeholder="Enter new price"
            onChange={(e) => setNewPrice(Number(e.target.value))}
          />
          <br /> <br />
          <input
            required
            value={newCategory}
            type="text"
            name="category"
            placeholder="Enter new category"
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <br /> <br />
          <textarea
            required
            value={newMessage}
            name="message"
            rows={5}
            cols={28}
            placeholder="Enter new description"
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <br /> <br />
          <button className="btn btn-primary mb-2" onClick={handleEdit}>
            Update
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => dispatch(editBook(book.id))}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
