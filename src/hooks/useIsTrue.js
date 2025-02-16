"use client";

import { usePathname } from "next/navigation";

const useIsTrue = (currentPath) => {
  const pathname = usePathname();
  const isTrue = pathname === currentPath || false;
  return isTrue;
};

export default useIsTrue;
