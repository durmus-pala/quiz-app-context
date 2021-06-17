import React from "react";
import { useGlobalContext } from "./Context";
import "./App.css";
import SetupForm from "./SetupForm";
import Modal from "./Modal";
import Loading from "./Loading";

function App() {
  const { waiting, loading, questions, index, correct, nextQuestion } =
    useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p>
          correct answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">{answers.map}</div>
        </article>
      </section>
    </main>
  );
}

export default App;
