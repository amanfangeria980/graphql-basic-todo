const typeDefs = `
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        phone: String!
        website: String! 
    }
    type Todo {
        id: ID!
        title: String!
        completed: Boolean
        user: User
    }

    type Query {
        getTodos: [Todo]
        getAllUsers: [User]
        getUserById(id: ID!): User
    }
`;

module.exports = typeDefs;
