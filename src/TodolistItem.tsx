import type { Task } from './App'
import { Button } from './Button'

type Props = {
  title: string
  tasks: Task[]
  deleteTask: (taskId: number) => void
  // changeFilter: (filtet: FilterValues) => void
}

export const TodolistItem = ({ title, tasks, deleteTask }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title={'+'} />
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map(task => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                {/* <button onClick={() => deletTaesk(task.id)}>x</button> */}
                <Button title={'x'} onClick={() => deleteTask(task.id)} />
              </li>
            )
          })}
        </ul>
      )}
      <div>
        <Button title={'All'} onClick={() => { }} />
        <Button title={'Active'} onClick={() => { }} />
        <Button title={'Completed'} onClick={() => { }} />
      </div>
    </div>
  )
}


