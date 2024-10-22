// todoService.js
const BASE_URL = 'https://playground.4geeks.com/todo';

export const addTaskToServer = async (userId, task) => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${userId}`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error al agregar tarea: ' + await response.json());
    }
  } catch (error) {
    console.error('Error adding task:', error);
    throw error; // Propagar el error
  }
};

export const deleteTaskFromServer = async (userId, taskId) => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${userId}/${taskId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Error al eliminar tarea: ' + await response.json());
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error; // Propagar el error
  }
};
