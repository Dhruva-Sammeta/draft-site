export type ScheduleEvent = {
  time: string;
  title: string;
};

export type ScheduleDay = {
  day: string;
  tone: "blue" | "peach" | "green";
  events: ScheduleEvent[];
};

export const scheduleData: ScheduleDay[] = [
  {
    day: "Day 1",
    tone: "blue",
    events: [
      { time: "8:00 - 9:00", title: "Registrations" },
      { time: "9:00 - 10:30", title: "Opening Ceremony" },
      { time: "10:30 - 11:00", title: "Break 1" },
      { time: "11:00 - 1:30", title: "Committee Session 1" },
      { time: "1:30 - 2:00", title: "Lunch" },
      { time: "2:00 - 4:30", title: "Committee Session 2" },
      { time: "4:30 - 5:30", title: "Networking hour" },
      { time: "5:30 Onwards", title: "Dispersal" },
    ],
  },
  {
    day: "Day 2",
    tone: "peach",
    events: [
      { time: "8:30 - 10:30", title: "Committee Session 3" },
      { time: "10:30 - 10:45", title: "Break" },
      { time: "10:45 - 1:30", title: "Committee Session 4" },
      { time: "1:30 - 2:00", title: "Lunch" },
      { time: "2:00 - 5:00", title: "Committee Session 5" },
      { time: "5:00 - 6:30", title: "Social Evening" },
      { time: "6:30 - 7:30", title: "Dinner" },
      { time: "7:30 Onwards", title: "Dispersal" },
    ],
  },
  {
    day: "Day 3",
    tone: "green",
    events: [
      { time: "8:30 - 10:30", title: "Committee Session 6" },
      { time: "10:30 - 1:30", title: "Committee Session 7" },
      { time: "1:30 - 2:00", title: "Lunch" },
      { time: "2:00 - 3:30", title: "Closing Ceremony" },
      { time: "3:30 Onwards", title: "Dispersal" },
    ],
  },
];
