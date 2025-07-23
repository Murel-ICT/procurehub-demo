import React, { useState, useEffect } from 'react';
import { generateOccupancySeries } from '../services/dataGenerator';
import UsageChart from './UsageChart';
import SmartAlerts from './SmartAlerts';

export default function DataSimulator() {
  const [occupancySeries, setSeries] = useState([]);

  useEffect(() => {
    setSeries(generateOccupancySeries());

    const interval = setInterval(() => {
      setSeries(generateOccupancySeries());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>Usage & Forecast Dashboard</h2>
      <UsageChart data={occupancySeries} />
      <SmartAlerts occupancySeries={occupancySeries} />
    </>
  );
}
