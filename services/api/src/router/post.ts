import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const helloRouter = createTRPCRouter({
  greetings: publicProcedure.query(async ({ ctx }) => {
    const query = await ctx.e
      .select(ctx.e.FitchleNode, () => ({
        name: true,
      }))
      .run(ctx.client);

    return {
      message: "Welcome to Stackfitch API!",
      nodes: query,
    };
  }),
});
