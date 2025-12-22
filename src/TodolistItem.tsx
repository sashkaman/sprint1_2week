import type { FilterValues, Task } from './App'
import { Button } from './Button'

type Props = {
  title: string
  tasks: Task[]
  deleteTask: (taskId: number) => void
  changerFilter: (filter: FilterValues) => void
}

export const TodolistItem = ({ title, tasks, deleteTask, changerFilter }: Props) => {
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
                {/* <button onClick={() => deleteT ask(task.id)}>x</button> */}
                <Button title={'x'} onClick={() => deleteTask(task.id)} />
              </li>
            )
          })}
        </ul>
      )}

      {/* <div>
        <Button title={'All'} />
        <Button title={'Active'} />
        <Button title={'Completed'} />
      </div> */}

      <div>
        <Button title={'All'} onClick={() => changerFilter('all')} />
        <Button title={'Active'} onClick={() => changerFilter('active')} />
        <Button title={'Completed'} onClick={() => changerFilter('completed')} />
      </div>
    </div>
  )
}


