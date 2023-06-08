import { t } from "./helpers/createRouter";
import { restaurantsRouter } from "./Restaurant.router";
import { visitsRouter } from "./Visit.router";
import { remindersRouter } from "./Reminder.router";

export const appRouter = t.router({
  restaurant: restaurantsRouter,
  visit: visitsRouter,
  reminder: remindersRouter
})

