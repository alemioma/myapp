"use client";

import { useTranslations } from "next-intl";
import { CheckIcon } from "@heroicons/react/24/solid";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ShadcnPlanTableProps {
  planKey: string;
}

export function ShadcnPlanTable({ planKey }: ShadcnPlanTableProps) {
  const t = useTranslations(`plans`);
  const features = t.raw(`${planKey}.table.features`) as string[];

  return (
    <div className="mt-10 rounded-md overflow-hidden">
      <Table className="border">
        <TableCaption> <br></br></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left w-[70%]">Plan Feature</TableHead>
            <TableHead className="text-right w-[30%]">Included</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="text-left">{feature}</TableCell>
              <TableCell className="text-center align-middle">
                <CheckIcon className="w-5 h-5 text-[var(--primary)]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
