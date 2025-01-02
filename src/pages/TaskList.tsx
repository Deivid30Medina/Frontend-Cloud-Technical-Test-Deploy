import { useTasks } from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const { tasks, loading, removeTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-4xl font-bold text-white">My To-Do List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-8 flex flex-col gap-2 w-full mb-16">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              onDelete={() => removeTask(task.id)}
              id={0}
            />
          ))}
        </div>
      )}
      <button
        className="bg-color-new text-white border-2 border-slate-50/50 text-opacity-70 w-11/12 font-bold text-left fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10 px-4 py-2 rounded-md 
             transition-transform hover:text-opacity-100 duration-500 hover:scale-105 active:scale-95"
        onClick={() => navigate("/tasks/new")}
        aria-label="Create a new task"
      >
        New Task
      </button>
    </div>
  );
};

export default TaskList;
