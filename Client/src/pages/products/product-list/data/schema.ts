import { z } from "zod";

export const taskSchema = z.object({
  productId: z.string(),
  name: z.string(),
  detail: z.string(),
  unit: z.string(),
  volume: z.number(),
  price: z.number(),
  date: z.string().datetime(),
  picture: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
