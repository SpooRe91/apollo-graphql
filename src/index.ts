import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { raids } from './utils/_db';
import { typeDefs } from './utils/schema';

const resolvers = {
    Query: {
        allRaids: () => raids,
        raid: (_, args: any) => {
            return raids.find((el) => el.id === args.id);
        },
        didFlawless: (_, args: any) => {
            if (args.id > 7) { return Error("NO SUCH DATA") }
            return raids.find((el) => el.id === args.id).flawless;
        }
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`Server ready at: ${url}`);

