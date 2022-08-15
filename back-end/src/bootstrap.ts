import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

// App
import app from "./app";

// Config
import Configuration from "./config";

// DB
import { connectToDb } from "./db";

// GQL
import { resolvers } from "./graphql/resolvers";

export const bootstrap = async () => {
  connectToDb();

  const schema = await buildSchema({
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: "/graphql",
    cors: {
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://studio.apollographql.com",
      ],
    },
  });

  app.listen(Configuration.PORT, () => {
    console.log(`Server listening on port: ${Configuration.PORT}`);
  });
};
