import type { WithUUID } from "@/services/db";
import type { RollTable } from "./type";
import { v4 } from "uuid";

export const data: RollTable[] = [];

export function createRollTable(): WithUUID<RollTable> {
  return {
    uuid: v4(),
    name: '',
    table: []
  }
}