'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { sayHello } from "./layout";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Home() {

  const categories = ["geography", "math", "science"]
  //const answers = [[10, 40, 51, 50],[10,11,12,13], ["rhode island", "maine", "connecticut"]]
  
  const categoriesList = categories.map(category => <li className={styles.li}><button className={styles.answer}>{category}</button></li>)
 
  return (
    <main className={styles.main}>
      {
        
        <div>
          <h1>categories</h1>
          <ul>{categoriesList}</ul>
        </div>
         
    }
         </main>
       );
}
