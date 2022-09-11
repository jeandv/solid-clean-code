import axios from 'axios';

export type TodoType = {// Recomendable sacarle desde un archivo de types
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {

    return axios.get<TodoType[]>(URL)
        .then((res) => res.data)

};