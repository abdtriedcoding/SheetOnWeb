"use client";

import { ColumnDef } from "@tanstack/react-table";

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
    header: "Age",
  },
  {
    accessorKey: "hireDate",
    header: "Hire Date",
  },
  {
    accessorKey: "annualSalary",
    header: "Annual Salary",
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
