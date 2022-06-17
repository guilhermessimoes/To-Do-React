import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './NewTask.module.css'
import { Task } from './Task'
import { TaskHeader } from './TaskHeader'

// interface INewTaskProps {
//   id: number
//   title: string
// }


export function NewTask(){
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Adicionar um botao de  editar.'
    },    
    {
      id: 2,
      title: 'Bug na pagina de atualizar usuario.'
    },
  ])

  const[newTaskText, setNewTaskText] = useState('')
  
  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleNewTextChange(event: ChangeEvent<HTMLInputElement>){
    console.log(setNewTaskText(event.target.value))
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task != taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }
  
  return(
    <>
    <form onSubmit={handleCreateNewTask} className={styles.NewTask}>
      <input type="text" name="task" placeholder="Adicione uma nova tarefa" onChange={handleNewTextChange} value={newTaskText}/>
      <button type="submit"> Criar  <PlusCircle size={22} /></button>
    </form>
    
    <TaskHeader />    
    {tasks.map(task =>{
      return(
        <Task
          id = {task.id}
          title={task.title}
          onDeleteTask={deleteTask}
        />
      )
    })} 
    </>
    
    
  )
}