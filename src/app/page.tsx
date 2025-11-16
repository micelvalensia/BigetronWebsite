import Members from "./_section/Member";
import HeroSection from "./_section/HeroSection";
import { SponsorComp } from "./_section/Sponsor";
import { ScheduleResult } from "./_section/ScheduleResult";
import { NewsPage } from "./_section/News";
import { Achievements } from "./_section/Achievements";
import { Footer } from "./_section/Footer";

export default function Home() {
  return (
    <div className="">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="member">
        <Members />
      </section>
      <section id="achievement">
        <Achievements />
      </section>
      <section id="sponsor">
        <SponsorComp />
      </section>
      <section id="schedule">
        <ScheduleResult />
      </section>
      <section id="news">
        <NewsPage />
      </section>
      <Footer />
    </div>
  );
}
