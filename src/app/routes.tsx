import React from "react";
import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./Home";
import { ServicePage } from "./pages/ServicePage";
import { AllServicesPage } from "./pages/AllServicesPage";
import { CaseStudyDetailPage } from "./pages/CaseStudyDetailPage";
import { GamesHub } from "./pages/GamesHub";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LudoGame } from "./pages/games/LudoGame";
import { TeenPattiGame } from "./pages/games/TeenPattiGame";
import { RouletteGame } from "./pages/games/RouletteGame";
import { SevenUpDownGame } from "./pages/games/SevenUpDownGame";
import { ComingSoonGame } from "./pages/games/ComingSoonGame";
import { MarketingPlatformPage } from "./pages/marketing/MarketingPlatformPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "service/:id", Component: ServicePage },
      { path: "services", Component: AllServicesPage },
      { path: "services/detail/:slug", Component: ServiceDetailPage },
      { path: "about", Component: AboutUsPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "terms-of-service", Component: TermsOfServicePage },
      { path: "case-study/:id", Component: CaseStudyDetailPage },
      { path: "games", Component: GamesHub },
      { path: "game/ludo", Component: LudoGame },
      { path: "game/teen-patti", Component: TeenPattiGame },
      { path: "game/roulette", Component: RouletteGame },
      { path: "game/7-up-down", Component: SevenUpDownGame },
      { path: "game/:id", Component: ComingSoonGame },
      { path: "marketing/:id", Component: MarketingPlatformPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);