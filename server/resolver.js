const axios = require("axios");
const resolvers = {
    Todo: {
        user: async (todo) => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${todo.userId}`
            );
            return response.data;
        },
    },
    Query: {
        getTodos: async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            return response.data;
        },
        getAllUsers: async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            return response.data;
        },
        getUserById: async (parent, args) => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${args.id}`
            );
            return response.data;
        },
    },
};

module.exports = resolvers;
