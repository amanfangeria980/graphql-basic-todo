const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const schema = require("./schema");
const resolvers = require("./resolver");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
async function startServer() {
    const app = express();

    const server = new ApolloServer({
        typeDefs: schema,
        resolvers: resolvers,
    });
    app.use(cors());
    app.use(express.json());
    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();
