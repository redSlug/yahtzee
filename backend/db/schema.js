import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import {integer} from "drizzle-orm/pg-core";

export const game = sqliteTable("game", {
    id: integer("id").primaryKey(),
    created_at: integer("created_at").notNull().default(sql`(CURRENT_TIMESTAMP)`)
});

export const player = sqliteTable("player", {
    id: integer("id").primaryKey(),
    game_id: integer("game_id")
        .notNull()
        .references(() => game.id),
    created_at: integer("created_at").notNull().default(sql`(CURRENT_TIMESTAMP)`)
})