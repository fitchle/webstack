import { helloRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  greetings: helloRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
