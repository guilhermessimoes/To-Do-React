import styles from './TaskHeader.module.css';

export function TaskHeader(){ 
  return (
    <div className={styles.taskHeader}>
        <span className={styles.createTask}>Tarefas Criadas <span className={styles.countTask}> 5 </span></span>
        <span  className={styles.done}>Concluidas <span className={styles.countDone}>2 de 5</span></span>
    </div>
  )
}