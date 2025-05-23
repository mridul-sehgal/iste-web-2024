import SectionHeader from "@/components/SectionHeader";
import { HOMEPAGE } from "@/config/home";
import SignupForMeetupCard from "@/components/Cards/SignupForMeetupCard";
import FormSection from "@/components/FormSection/FormSection";
import FeatureStaticList from "@/components/FeatureStaticList/FeatureStaticList";
import Hero from "@/components/Hero/Hero";
import PreviousTalk from "@/components/Cards/Talk";
import FAQ from "@/components/FAQ/FAQ";


export default async function page() {
  return (
    <>
      <section className="isolate">
        <Hero 
        // data={HOMEPAGE.Workshop}
         />

      </section>

      <section className="isolate">
        <div className="container space-y-16 py-16">
          <SectionHeader header="WHY JOIN US" className="mx-auto w-min" />
          <FeatureStaticList cardData={HOMEPAGE.Achievements} />
        </div>
      </section>

      <section className="isolate">
        <div className="container flex flex-col items-center justify-center space-y-16 py-16">
        {/* <div className="container px-2 sm:px-6 flex flex-col items-center justify-center space-y-16 py-16"> */}
          <SectionHeader header="OUR SUBCHAPTERS" className="w-min" />
          <div className="carousel carousel-center flex max-w-full flex-wrap justify-center items-stretch sm:justify-between gap-7 py-5 xl:gap-8">
            <PreviousTalk data={HOMEPAGE.PreviousTalks} />
          </div>
        </div>
      </section>

      <section className="isolate">
        <FAQ />
      </section>
      {/* <SignupForMeetupCard /> */}
    </>
  );
}
