import React from "react";

function Calculator(props) {
  return (
    <section id="center">
      <h1>My Calculator</h1>
      <p>ここは電卓です</p>
      <button onClick={props.onBack}>戻る</button>
    </section>
  );
}
export default Calculator;
