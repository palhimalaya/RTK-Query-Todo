import TodoList from "./features/TodoList";
// import store from "./app/store";
// import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";

const App = () => {
  return (
    <ApiProvider api={apiSlice}>
      <TodoList />
    </ApiProvider>
  );
};

export default App;
