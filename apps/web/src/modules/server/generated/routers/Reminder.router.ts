import { t, publicProcedure } from "./helpers/createRouter";
import { ReminderAggregateSchema } from "../schemas/aggregateReminder.schema";
import { ReminderCreateManySchema } from "../schemas/createManyReminder.schema";
import { ReminderCreateOneSchema } from "../schemas/createOneReminder.schema";
import { ReminderDeleteManySchema } from "../schemas/deleteManyReminder.schema";
import { ReminderDeleteOneSchema } from "../schemas/deleteOneReminder.schema";
import { ReminderFindFirstSchema } from "../schemas/findFirstReminder.schema";
import { ReminderFindManySchema } from "../schemas/findManyReminder.schema";
import { ReminderFindUniqueSchema } from "../schemas/findUniqueReminder.schema";
import { ReminderGroupBySchema } from "../schemas/groupByReminder.schema";
import { ReminderUpdateManySchema } from "../schemas/updateManyReminder.schema";
import { ReminderUpdateOneSchema } from "../schemas/updateOneReminder.schema";
import { ReminderUpsertSchema } from "../schemas/upsertOneReminder.schema";

export const remindersRouter = t.router({
  aggregateReminder: publicProcedure
    .input(ReminderAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateReminder = await ctx.prisma.reminder.aggregate(input);
      return aggregateReminder;
    }),
  createManyReminder: publicProcedure
    .input(ReminderCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyReminder = await ctx.prisma.reminder.createMany(input);
      return createManyReminder;
    }),
  createOneReminder: publicProcedure
    .input(ReminderCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneReminder = await ctx.prisma.reminder.create(input);
      return createOneReminder;
    }),
  deleteManyReminder: publicProcedure
    .input(ReminderDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyReminder = await ctx.prisma.reminder.deleteMany(input);
      return deleteManyReminder;
    }),
  deleteOneReminder: publicProcedure
    .input(ReminderDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneReminder = await ctx.prisma.reminder.delete(input);
      return deleteOneReminder;
    }),
  findFirstReminder: publicProcedure
    .input(ReminderFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstReminder = await ctx.prisma.reminder.findFirst(input);
      return findFirstReminder;
    }),
  findFirstReminderOrThrow: publicProcedure
    .input(ReminderFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstReminderOrThrow = await ctx.prisma.reminder.findFirstOrThrow(input);
      return findFirstReminderOrThrow;
    }),
  findManyReminder: publicProcedure
    .input(ReminderFindManySchema).query(async ({ ctx, input }) => {
      const findManyReminder = await ctx.prisma.reminder.findMany(input);
      return findManyReminder;
    }),
  findUniqueReminder: publicProcedure
    .input(ReminderFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueReminder = await ctx.prisma.reminder.findUnique(input);
      return findUniqueReminder;
    }),
  findUniqueReminderOrThrow: publicProcedure
    .input(ReminderFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueReminderOrThrow = await ctx.prisma.reminder.findUniqueOrThrow(input);
      return findUniqueReminderOrThrow;
    }),
  groupByReminder: publicProcedure
    .input(ReminderGroupBySchema).query(async ({ ctx, input }) => {
      const groupByReminder = await ctx.prisma.reminder.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByReminder;
    }),
  updateManyReminder: publicProcedure
    .input(ReminderUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyReminder = await ctx.prisma.reminder.updateMany(input);
      return updateManyReminder;
    }),
  updateOneReminder: publicProcedure
    .input(ReminderUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneReminder = await ctx.prisma.reminder.update(input);
      return updateOneReminder;
    }),
  upsertOneReminder: publicProcedure
    .input(ReminderUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneReminder = await ctx.prisma.reminder.upsert(input);
      return upsertOneReminder;
    }),

}) 
