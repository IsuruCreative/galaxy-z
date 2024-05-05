import React from "react";
import Hero from "../components/home/HeroSection";
import Daily from "../components/home/DailySection";

import Notification from "../components/fetch/Notifications";
import MarsWeather from "../components/home/MarsWeather";
import MarsSection from "../components/home/MarsSection";
import KnowledgeSection from "../components/home/KnowledgeSection";
import NotificationSection from "../components/home/NotificationSection";
import { NotifyProvider, SearchContext } from "../ctx/NotifyProvider";
import { MarsProvider } from "../ctx/MarsProvider";

const Home = () => {
  return (
    <>
      <Hero />
      <Daily />
      <MarsProvider>
        <MarsSection />
      </MarsProvider>
      <KnowledgeSection />
      <NotifyProvider>
        <NotificationSection />
      </NotifyProvider>
      <MarsWeather />
    </>
  );
};

export default Home;
