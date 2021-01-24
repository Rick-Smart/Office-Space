import React from "react";
import {Table} from "react-bootstrap"
import Task from "./Task"

function TasksContainer() {
  let tasks = [{
    id: "stuff",
    content: "get stuff done!"
  },{
    id: "stuff",
    content: "get stuff done!"
  },{
    id: "stuff",
    content: "get stuff done!"
  },{
    id: "stuff",
    content: "get stuff done!"
  }];

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>

      <tbody>
        {/* pass in the text/body of the task here */}
        <Task tasks = {tasks}/>
      </tbody>
    </Table>
  );
}

export default TasksContainer;
