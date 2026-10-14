import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useTodoStore = create(
    persist(
        (set) => ({
            tasks: [],
            addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
            deleteTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id),
                })),
            editTask: (id, text) =>
                set((state) => ({
                    tasks: state.tasks.map((task)=>
                        task.id === id ? { ...task, text } : task
                    )
                })),
            toggleTaskCompletion: (id) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
                    ),
                })),
        }),
        {
            storage: createJSONStorage(() => localStorage),
            name: "todo-storage",
        },
    ),
);
