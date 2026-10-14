import React, { useState } from 'react'
import { useTodoStore } from '../store/todoStore'

function AddTaskForm() {
    const [input, setInput] = useState("")
    const { addTask, tasks } = useTodoStore()

    const addTaskForm = (e) => {
        e.preventDefault()
        if (input.trim() !== "") {
            addTask({
                id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
                text: input,
                isCompleted: false
            })
            setInput("")
        }
    }

    return (
        <form onSubmit={addTaskForm} className="flex w-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/60 sm:flex-row sm:p-5">
            <input
                type="text"
                placeholder='Add a new task'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
            <button type="submit" className='main-btn rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200'>Add task</button>
        </form>
    )
}

export default AddTaskForm
