import { useState,useEffect } from "react";


function App() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [started, setStarted] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);

  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const [loading, setLoading] = useState(false);


const startInterview = async () => {
  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic, difficulty }),
    });

    const data = await response.json();

    setQuestions(data.questions.slice(0, 5));
    setStarted(true);
  } catch (error) {
    console.error("Error fetching questions:", error);
  } finally {
    setLoading(false);
  }
};


//   const fb = getMockFeedback(answer);
//   setFeedback(fb);
// };

const submitAnswer = async () => {
  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: questions[index],
        answer: answer,
      }),
    });

    const data = await response.json();

    setFeedback(data.feedback);
  } catch (error) {
    console.error("Error getting feedback:", error);
  } finally {
    setLoading(false);
  }
};


  const nextQuestion = () => {
    setAnswer("");
    setFeedback("");
    setIndex((prev) => prev + 1);
  };

  // Setup Screen
  if (!started) {
    return (
      <div style={{ padding: 20 }}>
        <h2>AI Interview App</h2>
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">Select Topic</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Node.js">Node.js</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
        </select>

        <br />

        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <br />

        <button onClick={startInterview} disabled={!topic || loading}>
          {loading ? "Generating..." : "Start Interview"}
        </button>
      </div>
    );
  }

  // Result Screen
  if (index >= 5) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Interview Completed 🎉</h2>
        <p>You answered 5 questions on {topic}</p>
      </div>
    );
  }

  // Interview Screen
  return (
    <div style={{ padding: 20 }}>
      <h3>
        Question {index + 1}/5
      </h3>

      <p><b>{questions[index]}</b></p>

      <textarea
        rows={5}
        cols={50}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br />

      {!feedback ? (
        <button onClick={submitAnswer} disabled={loading || !answer}>
          {loading ? "Checking..." : "Submit Answer"}
        </button>
      ) : (
        <>
          <p style={{ color: "green" }}>
            💡 Feedback: {feedback}
          </p>

          <button onClick={nextQuestion}>
            Next Question
          </button>
        </>
      )}
    </div>
  );
}


export default App;
