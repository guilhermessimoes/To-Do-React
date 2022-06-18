import { Trash } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';

import styles from './Task.module.css';

interface ITaskProps {
  id: string;
  title: string;
  done: boolean;
  onDeleteTask: (taskToDelete: string) => void;
  totalDone: (TaskTotalDone: number) => void;
  deleteDone: (TaskDeleteDone: number) => void;
}

export function Task({id, title, done, onDeleteTask, totalDone, deleteDone }: ITaskProps){
  function handleDeleteTask(){
    onDeleteTask(id)
  }
  
  function handleDoneTask(){
    totalDone(0)
  }

  function handleDeleteDoneTask(){
    deleteDone(0)
  }
  const [isChecked, setIsChecked] = useState(done)

  function handleChecked(event: ChangeEvent<HTMLInputElement>){
    console.log(setIsChecked(event.target.checked))
    setIsChecked(event.target.checked)
  }




  return(
    <>
    <article className={styles.task}>      
      <div className={styles.content}>       
        <input 
          type="checkbox"  
          id="task" 
          checked={isChecked} 
          onChange={handleChecked} 
          onClick={!isChecked ? handleDoneTask : handleDeleteDoneTask}
        />
        {isChecked ? (
          <label 
            htmlFor="task" 
            className={styles.labelChecked}
          > 
            {title}
          </label>
        ) : (
          <label 
            htmlFor="task"
          >
            {title}
          </label>
        )}
      </div>
      <button  onClick={handleDeleteTask}>
        <Trash size={22} />
      </button>
    </article>
    </>
  )  
  
  
}