import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import Calculator from "./Calculator";
function App() {
  const [isTodoView, setIsTodoView] = useState(false);
  const [isCalculatorView, setIsCalculatorView] = useState(false);
  // 1. 表示する「中身」を判定して返す関数
  const renderContent = () => {
    if (isTodoView) {
      // ToDo画面を表示（作成したTodoコンポーネントを呼び出す）
      return <Todo onBack={() => setIsTodoView(false)} />;
    }
    if (isCalculatorView) {
      return <Calculator onBack={() => setIsCalculatorView(false)} />;
    }

    // それ以外の時（ホーム画面）を表示
    return (
      <section id="center">
        <h1>俺のアプリ</h1>
        <button className="to-do" onClick={() => setIsTodoView(true)}>
          to-do画面へ
        </button>
        <button
          className="calculator"
          onClick={() => setIsCalculatorView(true)}
        >
          電卓画面へ
        </button>
      </section>
    );
  };

  // 2. returnの中はこれだけでOK！
  return <div className="App">{renderContent()}</div>;
}

export default App;
