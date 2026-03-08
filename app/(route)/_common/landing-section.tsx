"use client";

import { useState } from "react";
import Header from "./header";
import PromptInput from "@/components/prompt-input";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";

const LandingSection = () => {
  const [promptText, setPromptText] = useState<string>("");

  const suggestions = [
    {
      label: "E-commerce Dashboard",
      icon: "🛒",
      value:
        "Modern e-commerce admin dashboard. KPI cards showing revenue, orders, customers, and conversion rate at top. Interactive sales line chart and product performance bar chart. Table of recent orders with product thumbnails and status badges. Responsive layout for web and tablet. Style: clean SaaS dashboard, light mode, soft shadows, rounded cards, modern sans-serif typography.",
    },
    {
      label: "AI Chat Assistant",
      icon: "🤖",
      value:
        "AI chat assistant interface similar to ChatGPT. Left sidebar with conversation history and new chat button. Main chat window with user and AI message bubbles, markdown support and typing indicator. Input field with attachment and voice buttons. Responsive for mobile and web. Style: minimal dark mode, smooth animations, clean spacing, modern AI product aesthetic.",
    },
    {
      label: "Project Management",
      icon: "📋",
      value:
        "Project management tool dashboard with kanban board layout. Columns for backlog, in progress, review, and completed tasks. Task cards with avatars, tags, due dates and priority labels. Top navigation with search, filters and notifications. Responsive design for desktop and tablet. Style: modern productivity SaaS UI, soft pastel colors, rounded components.",
    },
    {
      label: "Crypto Trading Platform",
      icon: "📈",
      value:
        "Crypto trading dashboard showing real-time price chart with candlestick graph. Portfolio balance at top, list of assets with price changes and mini sparkline charts. Buy/sell panel on the right side. Dark fintech theme with neon highlights, high contrast, futuristic trading interface.",
    },
    {
      label: "Learning Platform",
      icon: "🎓",
      value:
        "Online learning platform dashboard with course progress cards, recommended courses section and learning streak statistics. Course list with thumbnails, progress bars and instructor details. Clean responsive layout for web and mobile. Style: friendly edtech design, bright colors, rounded cards, modern typography.",
    },
    {
      label: "Food Delivery App",
      icon: "🍔",
      value:
        "Food delivery mobile and web app UI. Search bar at top, cuisine category icons below, featured restaurant cards with rating, delivery time and food images. Restaurant page with menu sections and add to cart buttons. Style: vibrant colors, modern mobile-first design, rounded UI elements.",
    },
    {
      label: "Social Media Feed",
      icon: "📱",
      value:
        "Social media app feed screen. Vertical list of posts with profile avatar, username, timestamp, images or videos, like/comment/share buttons. Stories carousel at top. Responsive design for mobile and web. Style: clean modern UI, light mode, smooth card layout.",
    },
    {
      label: "Finance Dashboard",
      icon: "💰",
      value:
        "Personal finance dashboard showing account balance, spending analytics and recent transactions. Pie chart for spending categories and monthly spending line graph. Transaction table with filters and icons. Style: modern fintech dashboard, light theme with green and blue accents.",
    },
    {
      label: "Habit Tracker",
      icon: "📊",
      value:
        "Habit tracking app interface with daily habit checklist and weekly streak visualization. Circular progress rings for completed habits. Calendar view showing activity history. Mobile-first UI with playful colors and rounded cards.",
    },
    {
      label: "Travel Booking",
      icon: "✈️",
      value:
        "Travel booking website UI. Search form for flights and hotels at top with date picker and passenger selector. Destination cards with scenic images and price tags. Trip recommendations and deals section. Style: modern travel website with large images and clean layout.",
    },
    {
      label: "Portfolio Website",
      icon: "💼",
      value:
        "Developer portfolio website with hero section introducing the developer, featured projects grid with screenshots, skills section with icons and contact form. Responsive design for desktop and mobile. Style: modern personal brand website, minimal layout, smooth scrolling animations.",
    },
    {
      label: "Music Streaming",
      icon: "🎵",
      value:
        "Music streaming app interface with sidebar navigation, playlist list, featured albums grid and music player controls at bottom. Album artwork, progress bar and playback controls. Dark theme similar to Spotify.",
    },
    {
      label: "Fitness Dashboard",
      icon: "🏋️",
      value:
        "Fitness tracking dashboard showing daily activity summary, calories burned, steps count and workout history. Graphs showing weekly performance trends. Responsive mobile-first design with energetic colors.",
    },
    {
      label: "Customer Support Panel",
      icon: "🎧",
      value:
        "Customer support ticket system dashboard. Ticket list with priority labels and status badges. Conversation thread view with customer messages and agent replies. Filters for open, pending and resolved tickets. Professional SaaS helpdesk UI.",
    },
    {
      label: "Startup Landing Page",
      icon: "🚀",
      value:
        "Startup product landing page with hero section, product screenshots, feature highlights, pricing plans and testimonial cards. CTA buttons and email signup form. Responsive design for mobile and desktop. Style: modern SaaS marketing page with gradient accents.",
    },
  ];

  const handleSuggestionClick = (value: string) => {
    setPromptText(value);
  };
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="flex flex-col">
          <Header />
          <div className="relative overflow-hidden pt-28">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
              <div className="space-y-3">
                <h1 className="text-center font-semibold text-4xl tracking-tight sm:text-5xl md:text-6xl">
                  DesignX - Your Ultimate <br className="md:hidden" />{" "}
                  <span className="text-primary">AI Assisstant for Mobile & Web App Designs</span>
                </h1>
                <p className="mx-auto max-w-2xl text-center font-medium text-foreground leading-relaxed sm:text-lg">
                  Transform your ideas into stunning app designs in seconds with AI-powered DesignX.
                </p>
              </div>
              <div className="flex w-full max-w-3xl flex-col item-center gap-8 relative z-50">
                <div className="w-full">
                  <PromptInput
                    className="ring-2 ring-primary"
                    promptText={promptText}
                    setPromptText={setPromptText}
                    isLoading={false}
                    onSubmit={() => {}}
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-2 px-5">
                  <Suggestions>
                    {suggestions.map((s) => (
                      <Suggestion
                        key={s.label}
                        suggestion={s.label}
                        className="text-xs! h-7! px-2.5 pt-1!"
                        onClick={() => handleSuggestionClick(s.value)}
                      >
                        {s.icon} <span>{s.label}</span>
                      </Suggestion>
                    ))}
                  </Suggestions>
                </div>
              </div>
              <div className="absolute -translate-x-1/2 left-1/2 w-[5000px] h-[3000px] top-[80%] -z-10">
                <div className="-translate-1/2 absolute bottom-[calc(100%-300px)] left-1/2 h-[2000px] w-[2000px] opacity-20 bg-radial-primary"></div>
                <div className="absolute -mt-2.5 size-full rounded-[50%] bg-primary/20 opacity-70 [box-shadow:0_-15px_24.8px_var(--primary)]"></div>
                <div className="absolute z-0 size-full rounded-[50%] bg-background"></div>
              </div>
            </div>
          </div>
          <div className="w-full py-10">
            <div className="mx-auto max-w-3xl">
              <div>
                <h1 className="font-medium text-xl tracking-tight">Recent Projects</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
