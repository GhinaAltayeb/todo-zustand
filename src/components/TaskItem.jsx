
import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

function TaskItem({task}) {
    const [editing, setEditing] = useState(false);
    const [editInput, setEditInput] = useState(task.text);
    const { deleteTask, editTask,toggleTaskCompletion } = useTodoStore()
    
    const handleSave = () => {
        if (!editInput.trim()) return;

        editTask(task.id, editInput.trim());
        setEditing(false);
    };

    const handleCancel = () => {
        setEditInput(task.text);
        setEditing(false);
    };

    return (
        <li className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md sm:gap-4 sm:px-5">
            {editing ? (
                <>
                    <input
                        type="text"
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                        className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    />

                    <button type="button" onClick={handleSave} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200">
                        Save
                    </button>

                    <button type="button" onClick={handleCancel} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300">
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => toggleTaskCompletion(task.id)}
                        className="size-5 shrink-0 cursor-pointer accent-indigo-600"
                    />

                    <span
                        className={
                            task.isCompleted
                                ? "flex-1 break-words text-sm leading-6 text-slate-400 line-through"
                                : "flex-1 break-words text-sm leading-6 font-medium text-slate-700"
                        }
                    >
                        {task.text}
                    </span>

                    <button
                        type="button"
                        onClick={() => deleteTask(task.id)}
                        className="rounded-lg px-3 py-2 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-200"
                    >
                        Delete
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setEditInput(task.text);
                            setEditing(true);
                        }}
                        className="rounded-lg px-3 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    >
                        Edit
                    </button>
                </>
            )}
        </li>
    );
}

export default TaskItem;
