import { useState } from 'react'
import './App.css'
import { TodolistItem } from './TodolistItem'

export type Task = {
  id: number
  title: string
  isDone: boolean
}

export type FilterValues = 'all' | 'active' | 'completed'

// export const App = () => {
//   // debugger
//   const [filter, setFilter] = useState<FilterValues>('all')

//   let [tasks, setTasks] = useState<Task[]>([
//     { id: 1, title: 'HTML&CSS', isDone: true },
//     { id: 2, title: 'JS', isDone: true },
//     { id: 3, title: 'ReactJS', isDone: false },
//     { id: 4, title: 'Redux', isDone: false },
//     { id: 5, title: 'Typescript', isDone: false },
//     { id: 6, title: 'RTK query', isDone: false },
//   ])

//   const deleteTask = (taskId: number) => {
//     const filterTasks = tasks.filter(task => {
//       return task.id !== taskId
//     })
//     setTasks(filterTasks)
//   }

//   let filteredTasks = tasks
//   if (filter === 'active') {
//     filteredTasks = tasks.filter(task => !task.isDone)
//   }
//   if (filter === 'completed') {
//     filteredTasks = tasks.filter(task => task.isDone)
//   }

//   return (
//     <div className="app">
//       <TodolistItem title="What to learn"
//         tasks={tasks}
//         deleteTask={deleteTask}
//         changerFilter={changerFilter} />
//     </div>
//   )

// }

export const App = () => {
  const [filter, setFilter] = useState<FilterValues>('all')

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'Typescript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ])

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const changerFilter = (value: FilterValues) => {
    setFilter(value)
  }

  let filteredTasks = tasks
  if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.isDone)
  }
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.isDone)
  }

  return (
    <div className="app">
      <TodolistItem
        title="What to learn"
        tasks={filteredTasks}
        deleteTask={deleteTask}
        changerFilter={changerFilter}
      />
    </div>
  )
}

