"use client";

import React from "react";
import Link from "next/link";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

export default function UIComponentsPage() {
  const { user } = useUser();
  
  const uiComponents = [
    {
      category: "Navigation",
      components: [
        "Header/Navigation Bar",
        "Breadcrumbs",
        "Sidebar",
        "Menu",
        "Pagination",
        "Search Bar"
      ]
    },
    {
      category: "Content Display",
      components: [
        "Cards",
        "Lists",
        "Tables",
        "Grid Layout",
        "Carousel/Slider",
        "Accordion",
        "Tabs",
        "Modal/Dialog"
      ]
    },
    {
      category: "Forms & Input",
      components: [
        "Text Input",
        "Dropdown/Select",
        "Checkbox",
        "Radio Button",
        "Button",
        "Textarea",
        "Date Picker",
        "File Upload"
      ]
    },
    {
      category: "Feedback & Status",
      components: [
        "Loading Spinner",
        "Progress Bar",
        "Alert/Notification",
        "Tooltip",
        "Badge",
        "Status Indicator",
        "Toast Messages"
      ]
    },
    {
      category: "Layout & Structure",
      components: [
        "Container",
        "Grid System",
        "Flexbox Layout",
        "Header",
        "Footer",
        "Sidebar",
        "Hero Section",
        "Call-to-Action"
      ]
    },
    {
      category: "Interactive Elements",
      components: [
        "Dropdown Menu",
        "Context Menu",
        "Popover",
        "Hover Effects",
        "Click Animations",
        "Drag & Drop",
        "Sortable Lists"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-white" />
              <span className="text-lg font-semibold tracking-tight">MoraAI</span>
            </Link>
            <nav className="hidden items-center gap-8 text-sm/6 text-white/80 md:flex">
              {['Product','Docs','Customers','Resources','UI','Pricing'].map((i)=>(
                <Link key={i} className="hover:text-white" href={i === 'UI' ? '/ui-components' : '#'}>{i}</Link>
              ))}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <SignedOut>
                <SignInButton afterSignInUrl="/ui-components">
                  <button className="rounded-full px-4 py-2 text-sm text-white/80 hover:text-white">Sign in</button>
                </SignInButton>
                <SignUpButton afterSignUpUrl="/ui-components">
                  <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-white/90">Sign up</button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <SignedIn>
            <div className="mb-4">
              <h2 className="text-2xl text-purple-300 mb-2">
                Welcome back, {user?.firstName || user?.emailAddresses[0]?.emailAddress || 'User'}! 👋
              </h2>
              <p className="text-white/70">Your personalized UI components dashboard</p>
            </div>
          </SignedIn>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            What are the UI Components of a Website?
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            User Interface (UI) components are the building blocks that make up the visual and interactive elements of a website. 
            They provide structure, functionality, and enhance user experience.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {uiComponents.map((category, index) => (
            <div 
              key={category.category}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-purple-300">
                {category.category}
              </h2>
              <ul className="space-y-2">
                {category.components.map((component, compIndex) => (
                  <li 
                    key={compIndex}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {component}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why UI Components Matter</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">User Experience</h3>
              <p className="text-white/80">
                Well-designed UI components create intuitive and engaging user experiences, 
                making it easy for visitors to navigate and interact with your website.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Consistency</h3>
              <p className="text-white/80">
                Consistent UI components ensure a cohesive design language throughout your website, 
                building trust and familiarity with your users.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Accessibility</h3>
              <p className="text-white/80">
                Properly implemented UI components follow accessibility guidelines, 
                making your website usable by people with disabilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Development Efficiency</h3>
              <p className="text-white/80">
                Reusable UI components speed up development time and reduce maintenance overhead, 
                allowing for faster iteration and updates.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow transition hover:bg-white/90"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
