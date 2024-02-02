'use client'
import * as React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const duck = require("..//duck.png");
  return (
    <main className={styles.main}>
      {
        <div>
        <div style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <h1 className={styles.name}>Quizlo</h1>
          <p style={{fontSize: 20}}>Welcome to Quizlo, a quiz app for fun geography trivia!</p>
          <Link href="/questions" ><h1 className={styles.link}>Begin</h1></Link>
        </div>
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