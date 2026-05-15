import { scheduleData } from "@/data/schedule";

const toneClasses = {
  blue: "bg-[#d8e7f7] text-oakridge-navy",
  peach: "bg-[#f0b4a0] text-oakridge-navy",
  green: "bg-[#c8f0d0] text-oakridge-navy",
};

export default function SchedulePreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-3 ${compact ? "lg:grid-cols-3" : "md:grid-cols-3"}`}>
      {scheduleData.map((day) => (
        <article
          key={day.day}
          className="overflow-hidden rounded-[22px] border border-oakridge-navy/14 bg-oakridge-warm-white"
        >
          <h3
            className={`${toneClasses[day.tone]} border-b border-oakridge-navy/14 px-5 py-3 text-center font-sans text-lg font-black`}
          >
            {day.day}
          </h3>
          <div className="divide-y divide-oakridge-navy/10">
            {day.events.map((event) => (
              <div
                key={`${day.day}-${event.time}-${event.title}`}
                className="grid grid-cols-[minmax(92px,0.42fr)_1fr] items-center gap-3 px-4 py-3 text-sm sm:text-[15px]"
              >
                <span className="font-bold text-oakridge-dark-teal">{event.time}</span>
                <span className="text-oakridge-navy/80">{event.title}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
