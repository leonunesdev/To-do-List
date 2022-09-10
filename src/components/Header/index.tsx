import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import logo from "../../assets/logo.svg";

import styles from './header.module.css';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="tex"
          value={title}
          onChange={onChangeTitle}
        />
        <button disabled={!title}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
