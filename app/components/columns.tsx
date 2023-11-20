"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export type Payment = {
  eeid: string;
  fullName: string;
  jobTitle: string;
  department: string;
  businessUnit: string;
  gender: string;
  ethnicity: string;
  age: number;
  hireDate: string;
  annualSalary: number;
  bonusPercentage: number;
  country: string;
  city: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "eeid",
    header: "EEID",
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "jobTitle",
    header: "Job Title",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "businessUnit",
    header: "Business Unit",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "ethnicity",
    header: "Ethnicity",
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Age
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "hireDate",
    header: "Hire Date",
  },
  {
    accessorKey: "annualSalary",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Annual Salary
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "bonusPercentage",
    header: "Bonus Percentage",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "city",
    header: "City",
  },
];
