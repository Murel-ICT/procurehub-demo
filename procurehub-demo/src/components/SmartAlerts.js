import React from 'react';

export default function SmartAlerts({ occupancySeries }) {
  // Look at next 7 forecast days
  const upcoming = occupancySeries.slice(-7);
  const highDemand = upcoming.filter((d) => d.occupancy >= 85);

  if (highDemand.length > 0) {
    const date = new Date(upcoming[0].date);
    const formatted = date.toLocaleDateString(undefined, { month: 'long', day: 'numeric' });
    return (
      <div className="alerts">
        <div className="alert alert-blue">
          Based on your bookings, we recommend ordering 40% more towels by <strong>{formatted}</strong>.
        </div>
      </div>
    );
  }

  return (
    <div className="alerts">
      <div className="alert alert-green">
        No urgent reorders predicted for the next week.
      </div>
    </div>
  );
}
