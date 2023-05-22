import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";

/* eslint-disable react/prop-types */
const ListItem = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <Box
      key={todo._id}
      width={425}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "solid ",
        borderWidth: "1px",
        padding: "13px",
        height: "50px",
        maxWidth: "425px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Checkbox
            checked={todo.completed || false}
            onChange={() =>
              updateTodo({
                ...todo,
                completed: !todo.completed,
              })
            }
          />
        </div>
        <div
          style={{
            maxWidth: "250px",
            overflowWrap: "break-word",
          }}
        >
          {/* text */}
          {todo.title}
        </div>
      </Box>

      <div>
        <Button
          style={{
            marginLeft: "15px",
            border: "solid #ff9",
            borderWidth: "1px",
            borderRadius: "5px",
            padding: "10px",
            backgroundColor: "red",
            width: "5px",
          }}
          onClick={() => deleteTodo(todo._id)}
        >
          <MdDeleteForever size={"25px"} color="white" />
        </Button>
      </div>
    </Box>
  );
};

export default ListItem;
