import { t, publicProcedure } from "./helpers/createRouter";
import { RestaurantAggregateSchema } from "../schemas/aggregateRestaurant.schema";
import { RestaurantCreateManySchema } from "../schemas/createManyRestaurant.schema";
import { RestaurantCreateOneSchema } from "../schemas/createOneRestaurant.schema";
import { RestaurantDeleteManySchema } from "../schemas/deleteManyRestaurant.schema";
import { RestaurantDeleteOneSchema } from "../schemas/deleteOneRestaurant.schema";
import { RestaurantFindFirstSchema } from "../schemas/findFirstRestaurant.schema";
import { RestaurantFindManySchema } from "../schemas/findManyRestaurant.schema";
import { RestaurantFindUniqueSchema } from "../schemas/findUniqueRestaurant.schema";
import { RestaurantGroupBySchema } from "../schemas/groupByRestaurant.schema";
import { RestaurantUpdateManySchema } from "../schemas/updateManyRestaurant.schema";
import { RestaurantUpdateOneSchema } from "../schemas/updateOneRestaurant.schema";
import { RestaurantUpsertSchema } from "../schemas/upsertOneRestaurant.schema";

export const restaurantsRouter = t.router({
  aggregateRestaurant: publicProcedure
    .input(RestaurantAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateRestaurant = await ctx.prisma.restaurant.aggregate(input);
      return aggregateRestaurant;
    }),
  createManyRestaurant: publicProcedure
    .input(RestaurantCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyRestaurant = await ctx.prisma.restaurant.createMany(input);
      return createManyRestaurant;
    }),
  createOneRestaurant: publicProcedure
    .input(RestaurantCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneRestaurant = await ctx.prisma.restaurant.create(input);
      return createOneRestaurant;
    }),
  deleteManyRestaurant: publicProcedure
    .input(RestaurantDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyRestaurant = await ctx.prisma.restaurant.deleteMany(input);
      return deleteManyRestaurant;
    }),
  deleteOneRestaurant: publicProcedure
    .input(RestaurantDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneRestaurant = await ctx.prisma.restaurant.delete(input);
      return deleteOneRestaurant;
    }),
  findFirstRestaurant: publicProcedure
    .input(RestaurantFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRestaurant = await ctx.prisma.restaurant.findFirst(input);
      return findFirstRestaurant;
    }),
  findFirstRestaurantOrThrow: publicProcedure
    .input(RestaurantFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRestaurantOrThrow = await ctx.prisma.restaurant.findFirstOrThrow(input);
      return findFirstRestaurantOrThrow;
    }),
  findManyRestaurant: publicProcedure
    .input(RestaurantFindManySchema).query(async ({ ctx, input }) => {
      const findManyRestaurant = await ctx.prisma.restaurant.findMany(input);
      return findManyRestaurant;
    }),
  findUniqueRestaurant: publicProcedure
    .input(RestaurantFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRestaurant = await ctx.prisma.restaurant.findUnique(input);
      return findUniqueRestaurant;
    }),
  findUniqueRestaurantOrThrow: publicProcedure
    .input(RestaurantFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRestaurantOrThrow = await ctx.prisma.restaurant.findUniqueOrThrow(input);
      return findUniqueRestaurantOrThrow;
    }),
  groupByRestaurant: publicProcedure
    .input(RestaurantGroupBySchema).query(async ({ ctx, input }) => {
      const groupByRestaurant = await ctx.prisma.restaurant.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByRestaurant;
    }),
  updateManyRestaurant: publicProcedure
    .input(RestaurantUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyRestaurant = await ctx.prisma.restaurant.updateMany(input);
      return updateManyRestaurant;
    }),
  updateOneRestaurant: publicProcedure
    .input(RestaurantUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneRestaurant = await ctx.prisma.restaurant.update(input);
      return updateOneRestaurant;
    }),
  upsertOneRestaurant: publicProcedure
    .input(RestaurantUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneRestaurant = await ctx.prisma.restaurant.upsert(input);
      return upsertOneRestaurant;
    }),

}) 
