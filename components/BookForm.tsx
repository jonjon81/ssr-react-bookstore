import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/BookActions';
import { blockInvalidChar } from '../utils/helper';

interface BookFormProps {}

const BookForm: FC<BookFormProps> = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: new Date(),
      title,
      message,
      price,
      category,
      editing: false,
    };
    dispatch(addBook(data));
    setTitle('');
    setMessage('');
    setPrice(0);
    setCategory('');
    setShow(!show);
  };

  return (
    <>
      <div className="button-container mb-3">
        <button type="button" className="btn btn-primary" onClick={() => setShow(!show)}>
          Add a book
        </button>
      </div>
      {show && (
        <div className="modal-1" onClick={() => setShow(!show)}>
          <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
            <button onClick={() => setShow(!show)} className="btn-close"></button>
            <h2 className="mb-3">Add New Book</h2>
            <input
              required
              value={title}
              type="text"
              name="title"
              placeholder="Enter Book Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br /> <br />
            <input
              required
              onKeyDown={blockInvalidChar}
              value={price}
              type="number"
              name="price"
              placeholder="Enter Book Price"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <br /> <br />
            <input
              required
              value={category}
              type="text"
              name="category"
              placeholder="Enter Book Category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <br /> <br />
            <textarea
              required
              value={message}
              name="message"
              rows={5}
              cols={28}
              placeholder="Enter Book Description"
              onChange={(e) => setMessage(e.target.value)}
            />
            <br /> <br />
            <button className="btn btn-primary mb-2">Add Book now</button>
            <button type="button" className="btn btn-secondary" onClick={() => setShow(!show)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default BookForm;
