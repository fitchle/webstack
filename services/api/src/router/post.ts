import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const helloRouter = createTRPCRouter({
    greetings: publicProcedure.query(async ({ctx}) => {
        const query = ctx.e.select(ctx.e.Person, () => ({
name: true
        })).run(ctx.client);

        return {
            message: "Welcome to Stackfitch API!",
            persons: query
        }
    })
});
