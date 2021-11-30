import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { getEnvironmentData } from "worker_threads";
import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  body: string;
};

const Home: NextPage = () => {
  const [todos, setTodo] = useState<Todo[]>([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8000/api/");
    setTodo(res.data);
  };

  return (
    <div className={styles.container}>
      hello worlds
      <button onClick={() => getData()}> click</button>
      {todos.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
