import { Box, TextField } from "@mui/material";

/* eslint-disable react/prop-types */
const InputField = ({ addTodo, setTodo, newTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      title: newTodo,
      checked: false,
    });
    setTodo("");
  };

  return (
    <Box width={350}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Todo"
          value={newTodo}
          fullWidth
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
    </Box>
  );
};

export default InputField;
