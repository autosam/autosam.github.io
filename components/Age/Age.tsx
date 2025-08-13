"use client";

import { EXACT_BIRTHDAY } from "@/constants/common";
import { getExactAge } from "@/utils";
import { useEffect, useState } from "react";

export const Age = () => {
  const [age, setAge] = useState<ReturnType<typeof getExactAge> | null>(null);

  useEffect(() => {
    setAge(getExactAge(EXACT_BIRTHDAY));

    const interval = setInterval(
      () => setAge(getExactAge(EXACT_BIRTHDAY)),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return <>{age?.formatted}</>;
};
