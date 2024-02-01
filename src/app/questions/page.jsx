'use client'
import Image from "next/image";
import Link from "next/link"
import styles from "../page.module.css";
import {useState} from "react";

export default function Questions() {
  const duck = require("..//duck.png");
  //const question = ["how many states in the us?", "how many provinces in canada?", "what state has the lowest population?"]
  //const answers = [[10, 40, 51, 50],[10,11,12,13], ["rhode island", "maine", "connecticut"]]
  const questionBank = [{
    question: "how many states in the us?",
    answers: [10, 40, 51, 50],
    correctIndex: 3
  },{
    question: "how many provinces in canada?",
    answers: [10,11,12,13],
    correctIndex: 0
  },{
    question: "what state has the lowest population?",
    answers: ["rhode island", "maine", "connecticut"],
    correctIndex: 0
  },
  {
    question: "what is the capital of canada?",
    answers: ["toronto", "ottawa", "montreal", "guelph"],
    correctIndex: 1
  },
  {
    question: "how many countries are in the world?",
    answers: ["200", "190", "195", "197"],
    correctIndex: 2
  },
  {
    question: "what country has the largest population?",
    answers: ["canada", "china", "australia", "united states"],
    correctIndex: 1
  },
  {
    question: "which is not a continent?",
    answers: ["australia", "antartica", "america", "Asia"],
    correctIndex: 2
  },
  {
    question: "what state has the largest population?",
    answers: ["california", "texas", "florida", "pennsylvania"],
    correctIndex: 0
  },
  {
    question: "whats the tallest mountain?",
    answers: ["kilimanjaro", "everest", "rockies"],
    correctIndex: 1
  },
  {
    question: "what is the capital of england?",
    answers: ["paris", "new york", "london", "york"],
    correctIndex: 2
  },
  
]
  const choseAnswer = (e)=> {
    return () =>{
      console.log(e);
      console.log(Object.keys(e));
      let correctIndex = questionBank[questionIndex].correctIndex;
      let index = questionBank[questionIndex].answers.findIndex(i => i === 
        e.answer);
      if(index == correctIndex){
        incrementCorrect((numCorrect)=> numCorrect + 1);
      }
      if(questionIndex <9){
        incrementQuestion((questionIndex) => questionIndex + 1)
      }
      else{
        reachedEnd((endQuestions) => true);
        atStart((startQuestions)=>false)
      }
    }
  }
  const [questionIndex, incrementQuestion] = useState(0);
  let questionsList = questionBank[questionIndex].answers.map(answer => <li className={styles.li}><button onClick={choseAnswer({answer})} className={styles.answer}>{answer}</button></li>)
  const [numCorrect, incrementCorrect] = useState(0);
  const [endQuestions, reachedEnd] = useState(false);
  const [startQuestions, atStart] = useState(true);
  return (
    <main className={styles.main}>
      {
        <div>
          <h1>{startQuestions ?  ('question ' + (questionIndex + 1)) : null }</h1>
          <h1>{startQuestions ? questionBank[questionIndex].question : null}</h1>
          <ul>{startQuestions ? questionsList : null}</ul>
          <h1>correct: {numCorrect} / {questionIndex+1}</h1>
          <Link href="/">{endQuestions ? <h1 className={styles.answer}> Play Again</h1> : null}</Link>
          <div style={{flex:1, justifyContent: 'end', alignItems: 'flex-end'}}>
          <Image src={duck}
          alt="duck"
          width={300}
          height={500} style={{position:'absolute', left: 20, bottom: 20}} /> 
          
        </div>
        </div>

         
    }
         </main>
       );
     
}
