import { scheduleData } from "@/data/schedule";

const toneClasses = {
  blue: "bg-[#0b263b]",
  peach: "bg-[#1f374a]",
  green: "bg-[#092b3a]",
};

export default function SchedulePreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-3 ${compact ? "lg:grid-cols-3" : "md:grid-cols-3"}`}>
      {scheduleData.map((day) => (
        <article
          key={day.day}
          className="overflow-hidden rounded-[22px] border border-oakridge-teal/20 bg-[#072237]"
        >
          <h3
            className={`${toneClasses[day.tone]} border-b border-oakridge-teal/20 px-5 py-3 text-center font-sans text-lg font-black text-oakridge-warm-white`}
          >
            {day.day}
          </h3>
          <div className="divide-y divide-oakridge-teal/10">
            {day.events.map((event) => (
              <div
                key={`${day.day}-${event.time}-${event.title}`}
                className="grid grid-cols-[minmax(92px,0.42fr)_1fr] items-center gap-3 px-4 py-3 text-sm sm:text-[15px]"
              >
                <span className="font-bold text-oakridge-teal">{event.time}</span>
                <span className="text-oakridge-warm-white/80">{event.title}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
