import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

export function NewTask(){
  return(
    <div className={styles.NewTask}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button> Criar  <PlusCircle size={22} /></button>
    </div>
  )
}