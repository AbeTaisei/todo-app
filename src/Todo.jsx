import React from "react";

function Todo(props) {
  return (
    <section id="center">
      <h1>My Todo List</h1>
      <p>ここはTodoリストです</p>
      <button onClick={props.onBack}>戻る</button>
    </section>
  );
}
export default Todo;
