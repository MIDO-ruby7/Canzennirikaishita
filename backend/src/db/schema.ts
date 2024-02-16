import { sql } from "drizzle-orm";
import { sqliteTable, integer, text} from "drizzle-orm/sqlite-core";

export const user = sqliteTable("users", {
  id: integer('id').notNull().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  avatar: text("avatar").default("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnarkT01H1bnL6HxZLYY92Xe41FS67_r8QV9uxBmtSS589nW48N74vOt0JmKgi4NCmKCo0oYUdbExeRgx-nkYJ7eyVMdjNbPnOOHCXSE8EhBvjLCRqSVWNZsGeTA7FTA3x76AGh0ovjndN/s1600/%25E3%2581%25A9%25E3%2581%2586%25E3%2581%2597%25E3%2581%25A6%25E5%25A4%259C%25E4%25B8%25AD%25E3%2581%25AB%25E9%25A1%2594.png"),
  createdAt: integer("created_at"),
  updatedAt: integer("updated_at"),
});

export const post = sqliteTable("posts", {
  id: integer('id').notNull().primaryKey(),
  name: text("name").notNull(),
  body: text("email").notNull(),
  createdAt: integer("created_at"),
  updatedAt: integer("updated_at"),
  userId: integer("user_id").references(() => user.id)
});
