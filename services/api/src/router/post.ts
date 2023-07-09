import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const helloRouter = createTRPCRouter({
  greetings: publicProcedure.input(z.object({})).query(async ({ ctx }) => {
    const query = await ctx.db.fitchleNode.findMany({
      select: {
        name: true,
      },
    });

    return {
      message: "Welcome to Stackfitch API!",
      nodes: query,
    };
  }),
});
