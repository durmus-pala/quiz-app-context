import React, { usestate, useContext, useState } from "react";
import axios from "axios";

const table = {
  sports: 21,
  mythology: 20,
  entertainment: 32,
};

const API_ENDPOINT = "https://opentdb.com/api.php";
//const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });
  const [isModalOpen, setIsmodelOpen] = useState(false);
};

const fetchQuestions = async (url) => {
  setLoading(true);
  setWaiting(false);
  const response = await axios(url).catch((err) => console.log(err));
  if (response) {
    const data = response.data.results;
    if (data.length > 0) {
      setQuestions(data);
      setLoading(false);
      setWaiting(false);
      setError(false);
    } else {
      setWaiting(true);
      setError(true);
    }
  } else {
    setWaiting(true);
  }
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
