import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import BookForm from '../../components/BookForm';
import AllBooks from '../../components/AllBooks';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>Bookstore</h1>
          <BookForm />
          <AllBooks />
        </div>
      </div>
    </div>
  );
}
