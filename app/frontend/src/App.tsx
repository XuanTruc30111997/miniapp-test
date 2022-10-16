import { useGetClient } from './utils/hook/useGetClient';
import { ApolloProvider } from '@apollo/client';
import { FooDetail } from './components/FooDetail';

const App = () => {
  const client = useGetClient();

  return(
    <ApolloProvider client={client}>
      <FooDetail />
    </ApolloProvider>
  );
}

export default App;
