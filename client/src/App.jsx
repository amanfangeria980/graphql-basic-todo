import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const App = () => {
  const query = gql`
    query getTodosWithUser{
      getTodos {
        id
        title
        completed
        user {
          id
          name
          username
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>GraphQL Basic</h1>
      <ul>
        {data.getTodos.map((todo) => (
          <li key={todo.id}>{todo.title} - {todo.user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
