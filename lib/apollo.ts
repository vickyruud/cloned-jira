import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

//Create apollo client
const apolloClient = new ApolloClient({
  uri: "https://gql-technical-assignment.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
