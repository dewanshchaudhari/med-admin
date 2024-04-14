import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  allOrders: publicProcedure.query(({ ctx }) => {
    return ctx.db.order.findMany({
      include: {
        OrderMedicine: {
          include: {
            Medicine: true,
          },
        },
        User: true,
      },
    });
  }),
  allUsers: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
      include: {
        Address: true,
      },
    });
  }),
});
