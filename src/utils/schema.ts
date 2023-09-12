export const typeDefs = `#graphql

type Raid {
    id:ID!
    title: String
    location: String
    flawless: String
  }

  type Query {
    allRaids: [Raid],
    raid(id:ID!):Raid,
    didFlawless(id:ID!):String
  }
`;