"use client"

import { QuestionTable } from './../../../modals';
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<QuestionTable>[] = [
  {
    accessorKey: "frontendQuestionId",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "topicTags",
    header: "Topics",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  }
  ]