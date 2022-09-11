import { useState, useEffect } from 'react';
import { fetchTodos, TodoType } from '../services/todos';

export const useFetchTodo = () => {

    const [todo, setTodo] = useState<TodoType[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        fetchTodos()
            .then((todos) => setTodo(todos))
            .finally(() => setIsFetching(false))

    }, []);

    return { todo, isFetching };
};