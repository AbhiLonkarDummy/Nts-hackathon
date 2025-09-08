// src/components/WeekCalendar.jsx
import { useState } from "react";
import { format, startOfWeek, addDays, isToday } from "date-fns";

export default function WeekCalendar() {
  const [currentDate] = useState(new Date());

  // Start from Monday
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const days = [...Array(7)].map((_, i) => addDays(weekStart, i));

  return (
    <div className="bg-white border border-[var(--primary-border-color)] rounded-xl p-4 shadow-sm">
      <h3 className="text-base font-semibold mb-3">This Week</h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {days.map((day, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-colors duration-200
              ${
                isToday(day)
                  ? "bg-[#F5EEE5] text-black font-semibold"
                  : "hover:bg-gray-100"
              }`}
          >
            <span className="text-xs text-gray-500">
              {format(day, "EEE")} {/* Mon, Tue */}
            </span>
            <span>{format(day, "d")}</span> {/* Day number */}
          </div>
        ))}
      </div>
    </div>
  );
}
