//dependencies-------------------------------------------------------------------------------------
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphQL/schema");

//app modules---------------------------------------------------------------------------------------
const db = require("./database/models");

const PORT = process.env.PORT || 8000;

const app = express();

//middleware----------------------------------------------------------------------------------------
//middleware to parse req body from a json format
app.use(express.json());
//middleware to allow cors origin requests from client
app.use(cors());
//middleware to define graphQl schema and resolvers
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});