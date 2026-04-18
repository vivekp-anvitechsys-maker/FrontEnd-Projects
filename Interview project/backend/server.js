const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock questions generator
app.post("/questions", (req, res) => {
  const { topic, difficulty } = req.body;

  const questions = [
    `What is ${topic}?`,
    `Explain core concepts of ${topic}`,
    `What are advantages of ${topic}?`,
    `Explain advanced ${topic} concepts`,
    `Real-world use of ${topic}?`,
  ];

  res.json({ questions });
});

// Mock feedback generator
app.post("/feedback", (req, res) => {
  const { answer } = req.body;

  let feedback = "Good attempt 👍";

  if (answer.length < 20) {
    feedback = "Answer is too short. Try to explain more.";
  } else if (answer.length > 100) {
    feedback = "Great detailed answer!";
  }

  res.json({ feedback });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});