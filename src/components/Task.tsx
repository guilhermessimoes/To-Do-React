import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';

interface ITaskProps {
  id?: number;
  title: string;
  onDeleteTask: (taskToDelete: string) => void;
}

export function Task({id, title, onDeleteTask}: ITaskProps){
  function handleDeleteTask(){
    onDeleteTask(id)
  }
  return(
    <>   
    <article className={styles.task}>      
      <div className={styles.content}>        
        <input type="radio"  id="huey" />
        <label htmlFor="huey">{title}</label>
      </div>
      <button  onClick={handleDeleteTask}>
        <Trash size={22} />
      </button>
    </article>
    </>
  )
}