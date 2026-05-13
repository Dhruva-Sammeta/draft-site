import HeroSection from "@/components/hero/HeroSection";
import SecGenNote from "@/components/sections/SecGenNote";
import PhoenixSection from "@/components/sections/PhoenixSection";
import StatsSection from "@/components/sections/StatsSection";
import CommitteePreviewSection from "@/components/sections/CommitteePreviewSection";
import ScheduleSection from "@/components/sections/ScheduleSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecGenNote />
      <PhoenixSection />
      <StatsSection />
      <CommitteePreviewSection />
      <ScheduleSection />
    </>
  );
}
