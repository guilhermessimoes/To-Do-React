import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task(){
  return(
    <>
    <div className={styles.taskHeader}>
        <span className={styles.createTask}>Tarefas Criadas <span className={styles.countTask}> 5 </span></span>
        <span  className={styles.done}>Concluidas <span className={styles.countDone}>2 de 5</span></span>
    </div>
    <article className={styles.task}>      
      <div className={styles.content}>        
        <input type="radio"  id="huey" />
        <label htmlFor="huey">TEste TEsteTEsteTEsteTEsteTEsteTEsteTEsteTEsteTEsteTEsteTEsteTEste</label>
      </div>
        <Trash size={22} />
    </article>
    <article className={styles.task}>      
      <div className={styles.content}>        
        <input type="radio"  id="huey" />
        <label htmlFor="huey">TEste TEsteTEsteTEsteTEsteTEsteTEsteTEsteTEsteTEsteTEsteTEsteTEste</label>
      </div>
        <Trash size={22} />
    </article>
    </>
  )
}