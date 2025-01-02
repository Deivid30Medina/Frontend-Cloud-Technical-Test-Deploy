import { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask } from '../api/tasksApi';
import { Task, TaskRequest } from '../types/task';
import notyf from '../utils/notyf';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task: TaskRequest) => {
    try {
      const response = await createTask(task);
  
      if (response.status === 201) {
        notyf.success('Task created successfully!');
        setTasks((prev) => [...prev, response.data]);
      }

    } catch (error: any) {
      notyf.error(error.data.errorMessages[0] || "An unexpected error occurred.");
    }
  };
  
  

  const removeTask = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, loading, fetchTasks, addTask, removeTask };
};
