import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import styles from './NewTask.module.css'
import { NoTask } from './NoTask'
import { Task } from './Task'
import { TaskHeader } from './TaskHeader'

interface INewTaskProps {
  id: string
  title: string
  done: boolean
}



export function NewTask(){
  const [tasks, setTasks] = useState<INewTaskProps[]>([
    {
      id: '1',
      title: 'Adicionar um botao de  editar.',
      done: false
    },    
    {
      id: '2',
      title: 'Bug na pagina de atualizar usuario.',
      done: false
    },
  ])

  const[newTaskText, setNewTaskText] = useState('')
  const[taskTotal, setTaskTotal] = useState(tasks.length)  
  const [countDoneTask, setCountDoneTask] = useState(0)

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    setTasks([...tasks, {id: uuidv4(), title: newTaskText, done: false}])
    setNewTaskText('')
  }

  function handleNewTextChange(event: ChangeEvent<HTMLInputElement>){
    console.log(setNewTaskText(event.target.value))
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id != taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
    setTaskTotal(taskTotal - 1) 
    if (countDoneTask>0) {   
    setCountDoneTask(countDoneTask -1)
    }
  }
    
  function totalTask(){    
    setTaskTotal(taskTotal + 1)
  } 

  function totalDone(){    
    setCountDoneTask(countDoneTask + 1)
  }

  function deleteDone(){    
    setCountDoneTask(countDoneTask - 1)    
  }

  const isNewCreateInputEmpty = newTaskText.length === 0

  if (taskTotal < 1) {
    return(
      <>
        <form onSubmit={handleCreateNewTask} className={styles.NewTask}>
          <input type="text" name="task" placeholder="Adicione uma nova tarefa" onChange={handleNewTextChange} value={newTaskText}/>
          <button type="submit" onClick={totalTask} disabled={isNewCreateInputEmpty}> Criar <PlusCircle size={22} /></button>
        </form>
        
        <TaskHeader
          taskTotal ={taskTotal}
          countDoneTask ={countDoneTask}
        />
      <NoTask />
    </>
   )
  } else{
    return(
      <>
      <form onSubmit={handleCreateNewTask} className={styles.NewTask}>
        <input type="text" name="task" placeholder="Adicione uma nova tarefa" onChange={handleNewTextChange} value={newTaskText} />
        <button type="submit" onClick={totalTask} disabled={isNewCreateInputEmpty}> Criar <PlusCircle size={22} /></button>
      </form>
      
      <TaskHeader
        taskTotal ={taskTotal}
        countDoneTask ={countDoneTask}
      />
      {tasks.map(task =>{
        return(        
          <Task
            key={task.id}
            id = {task.id}
            title={task.title}
            onDeleteTask={deleteTask}
            done={task.done}
            totalDone={totalDone}
            deleteDone={deleteDone}
          />
        )
      })} 
      </>
      
      
    )

  }
}