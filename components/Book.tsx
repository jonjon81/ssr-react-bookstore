import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook, editBook } from '../redux/actions/BookActions';
import bookCover from '../assets/book-cover-1.jpg'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface BookProps {
  book: {
    id: string;
    title: string;
    price: string;
    category: string;
    message: string;
  };
}

const Book: FC<BookProps> = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-4" key={book.id}>
      <div className="image-component" onClick={() => dispatch(editBook(book.id))}>
        <img className="card-img-top" src={bookCover} alt="Book Cover"></img>
        <h5 className="card-title">{book.title}</h5>
        <div className="icon-container">
          <FaEdit className="fa-edit" />
        </div>
      </div>
      <div className="card-body">
        <p className="card-price">${book.price}</p>
        <p className="card-category">{book.category}</p>
        <p className="card-text book-description">{book.message}</p>
        <button type="button" className="btn deleteBtn btn-danger" onClick={() => dispatch(deleteBook(book.id))}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Book;
