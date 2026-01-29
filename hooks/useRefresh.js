import { useState } from "react";

export function useRefresh() {
  const [r, setR] = useState({});
  return function () {
    setR({});
  };
}
