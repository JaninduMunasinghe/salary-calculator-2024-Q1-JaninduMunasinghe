import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Calculate = () => {
  const router = useRouter();

  const handleCalculate = () => {
    const calculationsResults = "Calculations Results";
    router.push("/salary");
  };

  return (
    <div>
      <Button onClick={handleCalculate}>Calculate</Button>
    </div>
  );
};

export default Calculate;
