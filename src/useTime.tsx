import { useEffect, useState } from "react";

const useTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return time;
};
export default useTime;
