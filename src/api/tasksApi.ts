import apiClient from '../utils/apiClient';
import { Task, TaskRequest } from '../types/task';

export const getTasks = async (): Promise<Task[]> => {
  const response = await apiClient.get('/tasks');
  return response.data;
};

export const createTask = async (task: TaskRequest): Promise<any> => {
  try {
    const response = await apiClient.post('/tasks', task);
    return response;
  } catch (error: any) {
    throw error.response;
  }
};


export const deleteTask = async (id: number): Promise<void> => {
  await apiClient.delete(`/tasks/${id}`);
};
