import { ClipboardText  } from 'phosphor-react';
import styles from './NoTask.module.css';


export function NoTask(){

  return(
    <>   
    <div className={styles.task}>      
        <ClipboardText size={56} />    
    </div>
    <div  className={styles.taskContent}>
      <p className={styles.textNoContent}>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.createTaskContent}>Crie tarefas e organize seus itens a fazer</p>
    </div>
    </>
  )
}