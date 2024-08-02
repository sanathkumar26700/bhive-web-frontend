"use client";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import Center from "@/sections/centers/center";
import DownloadApp from "@/sections/Downloadapp";
import Features from "@/sections/Features";
import HeroSection from "@/sections/Hero";

export default function Home() {
  return (
    <Layout>
      <Section>
        <HeroSection
          imageSrc={"heroBackground-1.svg"}
          pricePrefix="Starting at"
          price=" ₹ 199/-"
        />
      </Section>
      <Section title="Why Choose Us ?">
        <Features />
      </Section>
      <Section title="Our Spaces Overview">
        <Center />
      </Section>
      <Section>
        <DownloadApp />
      </Section>
    </Layout>
  );
}
