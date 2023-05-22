import { Box, Button, Container } from "@mui/material";
import InputField from "../components/InputField";
import ListItem from "../components/ListItem";
import { MdDoneOutline } from "react-icons/md";

import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "./api/apiSlice";
import { useMemo, useState } from "react";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const {
    data: todos = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  let content;
  const sortedTodos = useMemo(() => {
    const sortedTodos = todos.slice();

    sortedTodos.reverse();
    // const reversedArray = [];
    // for (let i = sortedTodos.length - 1; i >= 0; i--) {
    //   reversedArray.push(sortedTodos[i]);
    // }
    // return reversedArray;
    return sortedTodos;
  }, [todos]);

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = sortedTodos.map((todo) => {
      return (
        <ListItem
          key={todo._id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <h1>Todo List</h1>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          border: "solid",
          borderWidth: "2px",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <Box>
          <InputField
            addTodo={addTodo}
            setTodo={setNewTodo}
            newTodo={newTodo}
          />
        </Box>

        <Button
          style={{
            marginLeft: "15px",
            border: "solid #ff9",
            borderWidth: "1px",
            borderRadius: "5px",
            padding: "10px",
            backgroundColor: "blue",
          }}
        >
          <MdDoneOutline
            color="white"
            size={"25px"}
            cursor={"pointer"}
            onClick={(e) => {
              e.preventDefault();
              addTodo({
                title: newTodo,
                checked: false,
              });
              setNewTodo("");
            }}
          />
        </Button>
      </Box>

      <div>{content}</div>
    </Container>
  );
};

export default TodoList;
