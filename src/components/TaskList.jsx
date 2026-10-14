
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {

    if (tasks.length === 0) {
        return (
            <p className="mt-5 w-full rounded-2xl border border-dashed border-slate-300 bg-white/70 px-6 py-10 text-center text-sm font-medium text-slate-500">
                No tasks yet. Add a task above!
            </p>
        );
    }

    return (
        <ul className="mt-5 grid w-full gap-3">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}
        </ul>
    );
}

export default TaskList;
