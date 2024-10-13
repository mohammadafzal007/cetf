import React, { useEffect, useRef, useState } from 'react';
import 'odometer/themes/odometer-theme-default.css'; // Import odometer theme CSS
import Odometer from 'odometer'; // Import odometer.js

const OdometerCount = ({ targetNumber }) => {
  const odometerRef = useRef(null); // To keep track of the DOM element
  const [odometer, setOdometer] = useState(null); // Odometer instance

  useEffect(() => {
    // Initialize Odometer when component is mounted
    if (odometerRef.current && !odometer) {
      const odo = new Odometer({
        el: odometerRef.current,
        value: 0, // initial value
        format: '(,ddd)', // comma-separated format
        theme: 'default', // odometer theme
      });
      setOdometer(odo);
    }
  }, [odometer]);

  // Update the odometer when the target number changes
  useEffect(() => {
    if (odometer) {
      odometer.update(targetNumber);
    }
  }, [targetNumber, odometer]);
function scrollodo()
{
  window.scrollY()
}
  return (
    <div className=" relative flex justify-center place-items-center overflow-hidden text-xl  lg:text-4xl text-blue-600 lg:font-semibold  text-center">
      <div ref={odometerRef} className=" odometer absolute" ></div>
    </div>
  );
};

export default OdometerCount;
