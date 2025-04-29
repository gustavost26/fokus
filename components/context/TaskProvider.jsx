import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TASKS_STOORAGE_KEY = 'fokus-tasks';

export function TaskProvider ({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(TASKS_STOORAGE_KEY);
        const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setTasks(loadedData);
        setIsLoaded(true);
      } catch(e) {
        console.log(e);
      }
    }

    getData();
  }, []) 
  
  useEffect(() => {
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(TASKS_STOORAGE_KEY, jsonValue);
      } catch (e) {
        console.log(e);
      }
    };

    if(isLoaded) {
      storeData(tasks);
    }

  }, [tasks])

  const addTask = (description) => {
    console.log('Tarefa vai ser adicionada')
    setTasks(oldTask => {
      return [
        ...oldTask,
        {
          description,
          id: oldTask.length + 1
        }
      ]
    });
  }

  const updateTask = (id, newDescription) => {
    setTasks(oldState =>
      oldState.map(t => {
        if (t.id == id) {
          return { ...t, description: newDescription }
        }
        return t
      })
    )
  }

  const toggleTaskCompleted = (id) => {
    console.log('Tarefa clicada')

    setTasks(oldTask => {
      return oldTask.map(t => {
        if(t.id == id) {
          t.completed = !t.completed;
        }

        return t;
      })
    })
  }

  const deleteTask = (id) => {
    setTasks(oldTask => {
      return oldTask.filter(t => t.id != id);
    })
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      updateTask,
      toggleTaskCompleted,
      deleteTask
    }}>
      { children }
    </TaskContext.Provider>
  )
}