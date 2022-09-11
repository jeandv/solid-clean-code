import { useData } from './useFetch';

type ResponseType = {
    id: number;
    title: string;
}

const fetcher = async (): Promise<ResponseType[]> => {

    const URL = 'https://jsonplaceholder.typicode.com/todos';

    const res = await fetch(URL)

    return res.json();
}

// const fetcher = async (): Promise<ResponseType[]> => {
//     return [{ id: 1, title: 'hola' }, { id: 2, title: 'mundo' }]
// }

// const fetcher = async (): Promise<ResponseType[]> => {

//     const posts = localStorage.fetItem('posts')

//     return posts ? JSON.parse(posts) : []
// }

const Todo = () => {
    const { data } = useData<ResponseType[]>({ key: '/todos', fetcher })

    if (!data) return <p>Loading...</p>;

    return (
        <ul>
            {data.map((todo: any) => {
                return (
                    <li key={todo.id}>
                        <span>{todo.id}</span>
                        <span>{todo.title}</span>
                    </li>
                )
            })};
        </ul>
    )
}

export default Todo;