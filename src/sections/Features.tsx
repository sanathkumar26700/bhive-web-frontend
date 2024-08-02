import FeatureCard from "@/components/FeatureCard";
import Icon from "@/utilities/Icon";
import React from "react";

const features = [
  {
    icon: <Icon icon="events.svg" />,
    title: "Community Events",
    description: "One liner details about the feature.",
  },
  {
    icon: <Icon icon="gym.svg" height={40} width={40} />,
    title: "Gym Facilities",
    description: "One liner details about the feature.",
  },
  {
    icon: <Icon icon="wifi.svg" />,
    title: "High-Speed WiFi",
    description: "One liner details about the feature.",
  },
  {
    icon: <Icon icon="coffee.svg" />,
    title: "Cafe & Tea Bar",
    description: "One liner details about the feature.",
  },
  {
    icon: <Icon icon="affordable.svg" />,
    title: "Affordable",
    description: "One liner details about the feature.",
  },
  {
    icon: <Icon icon="lounges.svg" />,
    title: "Comfort Lounges",
    description: "One liner details about the feature.",
  },
  {
    icon: <Icon icon="quick-booking.svg" />,
    title: "Quick Booking",
    description: "One liner details about the feature.",
  },
  {
    icon: <Icon icon="sports-area.svg" />,
    title: "Sports Area",
    description: "One liner details about the feature.",
  },
]; // can be moved to seperate file if increased

const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default Features;
