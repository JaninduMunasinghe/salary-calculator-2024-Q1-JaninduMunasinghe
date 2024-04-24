"use client";
import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRouter } from "next/router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Calculate from "./components/Calculate";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Salary = () => {
  interface Allowance {
    id: number;
  }
  interface Diduction {
    id: number;
  }

  const [allowances, setAllowances] = useState<Allowance[]>([{ id: 1 }]);
  const [deductions, setDiductions] = useState<Diduction[]>([{ id: 1 }]);
  const [epfChecked, setEpfChecked] = useState(false);

  const addAllowance = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newId = allowances.length + 1;
    setAllowances([...allowances, { id: newId }]);
  };

  const addDeduction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newId = deductions.length + 1;
    setDiductions([...deductions, { id: newId }]);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEpfChecked(event.target.checked);
  };

  const removeAllowance = (id: number) => {
    setAllowances(allowances.filter((allowance) => allowance.id !== id));
  };

  const removeDeduction = (id: number) => {
    setDiductions(deductions.filter((deduction) => deduction.id !== id));
  };

  return (
    <div className="flex flex-row space-x-4 ">
      <Card className="w-[680px]">
        <div className="m-5">
          <h1 className="font-bold text-[20px]">Calculate Your Salary</h1>

          <form>
            <h2 className="font-bold mt-6 mb-2 text-[16px]">Basic Salary</h2>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 mb-2">
                <Input
                  id="name"
                  placeholder="Basic Salary"
                  className="w-[356px] border-gray-300"
                />
              </div>
            </div>

            <h2 className="font-bold mt-6 mb-2 text-[16px]">Earnings</h2>
            <p className="text-[12px] mb-2 text-slate-600">
              Allowance, Fixed Allowance, Bonus and etc
            </p>
            {allowances.map((allowance, index) => (
              <div key={allowance.id} className="flex space-x-3 mb-2">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id={`allowance-${allowance.id}`}
                    placeholder="Pay Deatils (Title)"
                    className="w-[212px] border-gray-300"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id={`amount-${allowance.id}`}
                    placeholder="Amount"
                    className="w-[136px] border-gray-300"
                  />
                </div>
                <button
                  onClick={() => removeAllowance(allowance.id)}
                  className="text-black flex items-center justify-center w-6 h-6 border rounded-full mt-2 bg-slate-200 hover:bg-gray-100">
                  &#10006;
                </button>

                <div className="flex items-center space-x-2">
                  <Checkbox id={`terms-${allowance.id}`} />
                  <label
                    htmlFor={`terms-${allowance.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                    EPF/ETF
                  </label>
                </div>
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <span
                onClick={addAllowance}
                className="flex items-center space-x-1 cursor-pointer text-blue-500 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    d="M10 0a1 1 0 011 1v8h8a1 1 0 110 2h-8v8a1 1 0 11-2 0v-8H1a1 1 0 110-2h8V1a1 1 0 011-1z"
                    clipRule="evenodd"
                    fill="currentColor"
                  />
                </svg>
                <span>Add New Allowance</span>
              </span>
            </div>
          </form>
          <Separator orientation="horizontal" className="mt-6" />

          <h2 className="font-bold mt-6 mb-2 text-[16px]">Dedctions</h2>
          <p className="text-[12px] mb-2 text-slate-600">
            Salary, Advances, Loan Dedctions and all
          </p>
          {deductions.map((deductions, index) => (
            <div key={deductions.id} className="flex space-x-3 mb-2">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id={`allowance-${deductions.id}`}
                  placeholder="Deductions Details (Title)"
                  className="w-[212px] border-gray-300"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id={`amount-${deductions.id}`}
                  placeholder="Amount"
                  className="w-[136px] border-gray-300"
                />
              </div>
              <button
                onClick={() => removeDeduction(deductions.id)}
                className="text-black flex items-center justify-center w-6 h-6 border rounded-full mt-2 bg-slate-200 hover:bg-gray-100">
                &#10006;
              </button>
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <span
              onClick={addDeduction}
              className="flex items-center space-x-1 cursor-pointer text-blue-500 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  fillRule="evenodd"
                  d="M10 0a1 1 0 011 1v8h8a1 1 0 110 2h-8v8a1 1 0 11-2 0v-8H1a1 1 0 110-2h8V1a1 1 0 011-1z"
                  clipRule="evenodd"
                  fill="currentColor"
                />
              </svg>
              <span>Add New Deduction</span>
            </span>
          </div>
        </div>
      </Card>
      <Card className="w-[480px]">
        <div className="m-5">
          <h1 className="font-bold text-[20px]">Your Salary</h1>
        </div>

        <div className="m-5">
          <h1 className=" text-[14px] text-slate-400">Items</h1>

          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex justify-between">
              <span className="text-[16px] ">Basic Salary</span>
              <span className="text-[16px]">$1000.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] ">Gross Earnings</span>
              <span className="text-[16px]">$100.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] ">Gross Deductions</span>
              <span className="text-[16px]">$50.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] ">Employee EPT</span>
              <span className="text-[16px]">$1050.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] ">APIT</span>
              <span className="text-[16px]">$50.00</span>
            </div>
            <div className="flex justify-between  rounded-md border px-4 py-3 ">
              <span className="text-[16px] font-bold">Net Salary</span>
              <span className="text-[16px] font-bold">$1000.00</span>
            </div>
          </div>
          <h1 className=" text-sm  mt-4 text-slate-400">
            Contribution from the Employer
          </h1>
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex justify-between">
              <span className="text-[16px]  ">Employeer EPF</span>
              <span className="text-[16px]">$50.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] ">Employeer ETF</span>
              <span className="text-[16px]">$50.00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[16px] ">CTC Cost to Company</span>
              <span className="text-[16px]">$50.00</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Salary;
