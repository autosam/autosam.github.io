import { EXACT_BIRTHDAY } from "@/constants/common";
import { getExactAge } from "@/utils";
import { useEffect, useState } from "react";

export const Age = () => {
  const [age, setAge] = useState<ReturnType<typeof getExactAge>>(
    getExactAge(EXACT_BIRTHDAY)
  );

  useEffect(() => {
    const interval = setInterval(
      () => setAge(getExactAge(EXACT_BIRTHDAY)),
      800
    );
    return () => clearInterval(interval);
  }, []);

  return <>{age?.formatted}</>;
};
