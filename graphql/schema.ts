import { gql } from "apollo-server-micro";
import * as types from "./types";

// graphql schema
import { makeSchema } from "nexus";
import { join } from "path";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "indes.d.ts"
    ),
    schema: join(process.cwd(), "graphql", "schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql, context.ts"),
  },
});
