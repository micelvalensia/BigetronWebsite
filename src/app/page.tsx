import Division from "./_section/Member";
import HeroSection from "./_section/HeroSection";
import { SponsorComp } from "./_section/Sponsor";
import { ScheduleResult } from "./_section/ScheduleResult";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Division />
      <SponsorComp />
      <ScheduleResult />
    </div>
  );
}
