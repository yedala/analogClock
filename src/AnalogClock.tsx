import useTime from "./useTime";

export default function AnalogClock() {
  const time = useTime();
  const hrs = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();
  let hrsangle = ((hrs * 60 + mins) * 360) / (12 * 60);
  let minsangle = (mins * 360) / 60;
  let secsangle = (secs * 360) / 60;

  return (
    <div className="container">
      <div className="clock">
        <div
          className="hand hours"
          style={{ transform: `rotate(${hrsangle}deg)` }}
        ></div>
        <div
          className="hand mins"
          style={{ transform: `rotate(${minsangle}deg)` }}
        ></div>
        <div
          className="hand secs"
          style={{ transform: `rotate(${secsangle}deg)` }}
        ></div>
      </div>
    </div>
  );
}
