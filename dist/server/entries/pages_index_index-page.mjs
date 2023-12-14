import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useDispatch, useSelector, Provider } from "react-redux";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa/index.esm.js";
import { combineReducers, createStore } from "redux";
const bootstrap_min = "";
const index = "";
const addBook = (data) => {
  return {
    type: "ADD_BOOK",
    payload: data
  };
};
const deleteBook = (id) => {
  return {
    type: "DELETE_BOOK",
    payload: id
  };
};
const editBook = (id) => {
  return {
    type: "EDIT_BOOK",
    payload: id
  };
};
const update = (id, data) => {
  return {
    type: "UPDATE",
    payload: id,
    data
  };
};
const blockInvalidChar = (e) => {
  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
};
const BookForm$1 = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: /* @__PURE__ */ new Date(),
      title,
      message,
      price,
      category,
      editing: false
    };
    dispatch(addBook(data));
    setTitle("");
    setMessage("");
    setPrice(0);
    setCategory("");
    setShow(!show);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "button-container mb-3", children: /* @__PURE__ */ jsx("button", { type: "button", className: "btn btn-primary", onClick: () => setShow(!show), children: "Add a book" }) }),
    show && /* @__PURE__ */ jsx("div", { className: "modal-1", onClick: () => setShow(!show), children: /* @__PURE__ */ jsxs("form", { onClick: (e) => e.stopPropagation(), onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setShow(!show), className: "btn-close" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-3", children: "Add New Book" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          required: true,
          value: title,
          type: "text",
          name: "title",
          placeholder: "Enter Book Title",
          onChange: (e) => setTitle(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "input",
        {
          required: true,
          onKeyDown: blockInvalidChar,
          value: price,
          type: "number",
          name: "price",
          placeholder: "Enter Book Price",
          onChange: (e) => setPrice(Number(e.target.value))
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "input",
        {
          required: true,
          value: category,
          type: "text",
          name: "category",
          placeholder: "Enter Book Category",
          onChange: (e) => setCategory(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          required: true,
          value: message,
          name: "message",
          rows: 5,
          cols: 28,
          placeholder: "Enter Book Description",
          onChange: (e) => setMessage(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("button", { className: "btn btn-primary mb-2", children: "Add Book now" }),
      /* @__PURE__ */ jsx("button", { type: "button", className: "btn btn-secondary", onClick: () => setShow(!show), children: "Cancel" })
    ] }) })
  ] });
};
const bookCover = "/assets/static/book-cover-1.7a6ddd8a.jpg";
const Book = ({ book }) => {
  const dispatch = useDispatch();
  return /* @__PURE__ */ jsxs("div", { className: "card mb-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "image-component", onClick: () => dispatch(editBook(book.id)), children: [
      /* @__PURE__ */ jsx("img", { className: "card-img-top", src: bookCover, alt: "Book Cover" }),
      /* @__PURE__ */ jsx("h5", { className: "card-title", children: book.title }),
      /* @__PURE__ */ jsx("div", { className: "icon-container", children: /* @__PURE__ */ jsx(FaEdit, { className: "fa-edit" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
      /* @__PURE__ */ jsxs("p", { className: "card-price", children: [
        "$",
        book.price
      ] }),
      /* @__PURE__ */ jsx("p", { className: "card-category", children: book.category }),
      /* @__PURE__ */ jsx("p", { className: "card-text book-description", children: book.message }),
      /* @__PURE__ */ jsx("button", { type: "button", className: "btn deleteBtn btn-danger", onClick: () => dispatch(deleteBook(book.id)), children: /* @__PURE__ */ jsx(FaTrashAlt, {}) })
    ] })
  ] }, book.id);
};
const BookForm = ({ book }) => {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(book.title);
  const [newMessage, setNewMessage] = useState(book.message);
  const [newCategory, setNewCategory] = useState(book.category);
  const [newPrice, setNewPrice] = useState(book.price);
  const handleEdit = (e) => {
    e.preventDefault();
    const data = {
      newTitle,
      newMessage,
      newCategory,
      newPrice
    };
    dispatch(update(book.id, data));
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { onClick: () => dispatch(editBook(book.id)), className: "modal-1", children: /* @__PURE__ */ jsxs("form", { onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsx("button", { onClick: () => dispatch(editBook(book.id)), className: "btn-close" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-3", children: "Edit Book" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        required: true,
        value: newTitle,
        type: "text",
        name: "title",
        placeholder: "Enter new title",
        onChange: (e) => setNewTitle(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    " ",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      "input",
      {
        required: true,
        onKeyDown: blockInvalidChar,
        value: newPrice,
        type: "number",
        name: "price",
        placeholder: "Enter new price",
        onChange: (e) => setNewPrice(Number(e.target.value))
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    " ",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      "input",
      {
        required: true,
        value: newCategory,
        type: "text",
        name: "category",
        placeholder: "Enter new category",
        onChange: (e) => setNewCategory(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    " ",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        required: true,
        value: newMessage,
        name: "message",
        rows: 5,
        cols: 28,
        placeholder: "Enter new description",
        onChange: (e) => setNewMessage(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    " ",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("button", { className: "btn btn-primary mb-2", onClick: handleEdit, children: "Update" }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "btn btn-secondary", onClick: () => dispatch(editBook(book.id)), children: "Cancel" })
  ] }) }) });
};
const AllBooks = () => {
  const books = useSelector((state) => state.bookReducer);
  return /* @__PURE__ */ jsx(Fragment, { children: books.map((book) => /* @__PURE__ */ jsxs("div", { className: "col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2", children: [
    /* @__PURE__ */ jsx(Book, { book }, book.id + "-a"),
    book.editing && /* @__PURE__ */ jsx(BookForm, { book }, book.id + "-b")
  ] }, book.id)) });
};
function App() {
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx("h1", { children: "Bookstore" }),
    /* @__PURE__ */ jsx(BookForm$1, {}),
    /* @__PURE__ */ jsx(AllBooks, {})
  ] }) }) });
}
const initialState = [
  {
    title: "guiness world records",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dolorum minus obcaecati sequi esse iusto dignissimos doloribus, sit quasi deleniti qui consequuntur.",
    id: "1",
    category: "fiction",
    price: 22.99,
    editing: false
  },
  {
    title: "food for live",
    message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum odit, placeat praesentium in eos repellat cumque labore alias hic ad vero error!",
    id: "2",
    category: "health",
    price: 10.55,
    editing: false
  },
  {
    title: "Baking Yesteryear",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt, officia alias animi rem quo sint dolores fuga voluptate repudiandae laudantium deleniti.",
    id: "3",
    category: "baking",
    price: 14.25,
    editing: false
  }
];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return state.concat([action.payload]);
    case "DELETE_BOOK":
      return state.filter((book) => book.id !== action.payload);
    case "EDIT_BOOK":
      return state.map((book) => book.id === action.payload ? { ...book, editing: !book.editing } : book);
    case "UPDATE":
      return state.map((book) => {
        if (book.id === action.payload) {
          return {
            ...book,
            title: action.data.newTitle,
            message: action.data.newMessage,
            category: action.data.newCategory,
            price: action.data.newPrice,
            editing: !book.editing
          };
        } else
          return book;
      });
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  bookReducer
});
function Page() {
  const store = createStore(rootReducer);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(App, {}) }) });
}
export {
  Page
};
