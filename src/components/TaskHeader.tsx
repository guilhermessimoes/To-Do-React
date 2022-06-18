import styles from './TaskHeader.module.css';

interface ITaskProps {
  taskTotal: number
  countDoneTask: number
}


export function TaskHeader({taskTotal, countDoneTask}:ITaskProps){  
  
  return (
    
    <div className={styles.taskHeader}>        
        <span className={styles.createTask}>Tarefas Criadas <span className={styles.countTask}>{taskTotal}</span></span>
        <span  className={styles.done}>Concluidas <span className={styles.countDone}>{countDoneTask} de {taskTotal}</span></span>
    </div>
  )
}