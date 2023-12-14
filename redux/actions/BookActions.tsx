export const addBook = (data: {
  id: Date;
  title: string;
  message: string;
  price: number;
  category: string;
  editing: boolean;
}) => {
  return {
    type: 'ADD_BOOK',
    payload: data,
  };
};
export const deleteBook = (id: string) => {
  return {
    type: 'DELETE_BOOK',
    payload: id,
  };
};
export const editBook = (id: string) => {
  return {
    type: 'EDIT_BOOK',
    payload: id,
  };
};
export const update = (
  id: string,
  data: { newTitle: string; newMessage: string; newCategory: string; newPrice: number }
) => {
  return {
    type: 'UPDATE',
    payload: id,
    data,
  };
};
