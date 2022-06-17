import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';
import { TaskHeader } from './TaskHeader';

interface ITask {
  id?: number;
  title: string;
}

export function Task({id, title}: ITask){
  return(
    <>   
    <article className={styles.task}>      
      <div className={styles.content}>        
        <input type="radio"  id="huey" />
        <label htmlFor="huey">{title}</label>
      </div>
        <Trash size={22} />
    </article>
    </>
  )
}