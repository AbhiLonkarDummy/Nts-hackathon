import WeekCalendar from "../WeekCalendar/WeekCalendar";
export default function RightSidebar() {
  return (
    <aside className="w-72 bg-[var(--primary-bg-color)] border-l border-[var(--primary-border-color)] h-[calc(100vh-56px)] fixed top-14 right-0 flex flex-col justify-between">
      {/* Top content */}
      <div className="p-4 space-y-6 overflow-y-auto">
        {/* Week Calendar */}
        <WeekCalendar />

        {/* Mentor Insights */}
        <div className="bg-white border border-[var(--primary-border-color)] rounded-xl p-4 shadow-sm">
          <h3 className="text-base font-semibold mb-2">Mentor Insights</h3>
          <p className="text-sm text-gray-600">
            “Focus on clarity in today’s practice. Try pausing between
            sentences.”
          </p>
        </div>

        {/* Achievements / Streaks */}
        <div className="bg-white border border-[var(--primary-border-color)] rounded-xl p-4 shadow-sm">
          <h3 className="text-base font-semibold mb-2">Streaks</h3>
          <p className="text-sm">🔥 7-day learning streak</p>
          <p className="text-sm">🏆 Communication Starter Badge</p>
        </div>
      </div>

      {/* Footer (optional quick settings / feedback) */}
      <div className="p-4 border-t border-[var(--primary-border-color)] text-sm text-gray-500">
        <button className="hover:underline">Give Feedback</button>
      </div>
    </aside>
  );
}
