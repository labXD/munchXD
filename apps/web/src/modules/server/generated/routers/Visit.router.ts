import { t, publicProcedure } from "./helpers/createRouter";
import { VisitAggregateSchema } from "../schemas/aggregateVisit.schema";
import { VisitCreateManySchema } from "../schemas/createManyVisit.schema";
import { VisitCreateOneSchema } from "../schemas/createOneVisit.schema";
import { VisitDeleteManySchema } from "../schemas/deleteManyVisit.schema";
import { VisitDeleteOneSchema } from "../schemas/deleteOneVisit.schema";
import { VisitFindFirstSchema } from "../schemas/findFirstVisit.schema";
import { VisitFindManySchema } from "../schemas/findManyVisit.schema";
import { VisitFindUniqueSchema } from "../schemas/findUniqueVisit.schema";
import { VisitGroupBySchema } from "../schemas/groupByVisit.schema";
import { VisitUpdateManySchema } from "../schemas/updateManyVisit.schema";
import { VisitUpdateOneSchema } from "../schemas/updateOneVisit.schema";
import { VisitUpsertSchema } from "../schemas/upsertOneVisit.schema";

export const visitsRouter = t.router({
  aggregateVisit: publicProcedure
    .input(VisitAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVisit = await ctx.prisma.visit.aggregate(input);
      return aggregateVisit;
    }),
  createManyVisit: publicProcedure
    .input(VisitCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVisit = await ctx.prisma.visit.createMany(input);
      return createManyVisit;
    }),
  createOneVisit: publicProcedure
    .input(VisitCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVisit = await ctx.prisma.visit.create(input);
      return createOneVisit;
    }),
  deleteManyVisit: publicProcedure
    .input(VisitDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVisit = await ctx.prisma.visit.deleteMany(input);
      return deleteManyVisit;
    }),
  deleteOneVisit: publicProcedure
    .input(VisitDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVisit = await ctx.prisma.visit.delete(input);
      return deleteOneVisit;
    }),
  findFirstVisit: publicProcedure
    .input(VisitFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVisit = await ctx.prisma.visit.findFirst(input);
      return findFirstVisit;
    }),
  findFirstVisitOrThrow: publicProcedure
    .input(VisitFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVisitOrThrow = await ctx.prisma.visit.findFirstOrThrow(input);
      return findFirstVisitOrThrow;
    }),
  findManyVisit: publicProcedure
    .input(VisitFindManySchema).query(async ({ ctx, input }) => {
      const findManyVisit = await ctx.prisma.visit.findMany(input);
      return findManyVisit;
    }),
  findUniqueVisit: publicProcedure
    .input(VisitFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVisit = await ctx.prisma.visit.findUnique(input);
      return findUniqueVisit;
    }),
  findUniqueVisitOrThrow: publicProcedure
    .input(VisitFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVisitOrThrow = await ctx.prisma.visit.findUniqueOrThrow(input);
      return findUniqueVisitOrThrow;
    }),
  groupByVisit: publicProcedure
    .input(VisitGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVisit = await ctx.prisma.visit.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVisit;
    }),
  updateManyVisit: publicProcedure
    .input(VisitUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVisit = await ctx.prisma.visit.updateMany(input);
      return updateManyVisit;
    }),
  updateOneVisit: publicProcedure
    .input(VisitUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVisit = await ctx.prisma.visit.update(input);
      return updateOneVisit;
    }),
  upsertOneVisit: publicProcedure
    .input(VisitUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVisit = await ctx.prisma.visit.upsert(input);
      return upsertOneVisit;
    }),

}) 
