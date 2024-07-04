import './App.css';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Question from './Components/Question';
import { useEffect, useState } from 'react';
import axios from 'axios'
import question from './data/question';
import Choices from './Components/Choices';
import Score from './Components/Score';
import EndScreen from './Components/EndScreen';

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [res, setRes] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

function getQuestions(){
  axios.get('https://the-trivia-api.com/v2/questions')
    .then(function(res){
      setQuestions(res.data);
      console.log(res);
      setRes(Array(res.data.length).fill(0))
      setIsLoading(false);
    })
    .catch(function(err){
      console.log(err);
      setIsLoading(false);
      setError(true);
    });
} 

function changeRes(isCorrect){
  // console.log(isCorrect);
  res[index] = isCorrect?2:1;
  setRes(res);
  setIndex(index+1);
  setScore(score + isCorrect?1:0);
}
useEffect(function(){
  setIsLoading(true);
  getQuestions()
  }, [])
  return (
    <div className="App">
      <Container>
        <Score score={score} res={res}/>
        {
          isLoading? <Spinner style={{margin:'auto'}}/>: error? <Alert variant='danger'>Something went wrong</Alert> : (index < questions.length)? <>
          <Question question={questions[index]? questions[index].question.text: "What?"}/>
          <Choices index={index} correctAnswer={questions[index]?questions[index].correctAnswer: ""} incorrectAnswers={questions[index]?questions[index].incorrectAnswers:[]} resHandler={changeRes}/>
          </> : 
          <EndScreen questions={questions}/>
        }
        
      </Container>

    </div>
  );
}

export default App;
