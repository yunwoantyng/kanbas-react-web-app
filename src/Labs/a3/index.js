import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todos/TodoItem";
import TodoList from "./Todos/TodoList";
import { useSelector } from "react-redux";
import React from "react";

function Assignment3() {
  const { todos } = useSelector((state) => state.todosRuducer);
  return (
    <div>
      <h1>Assignment 3</h1>
      <pre>
        <code>{JSON.stringify(todos, null, 2)}</code>
      </pre>
      <TodoList />
      <TodoItem />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
    </div>
  );
}
export default Assignment3;
