
import { Header } from './components/header';
import './global.css';
import styles from './App.module.css'
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <main>
          <Task />
        </main>
      </div>
    </>
  )
}

