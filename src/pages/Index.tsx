
import React from 'react';
import { Heading, Text } from '@/components/design-system/typography/Typography';
import { Header } from '@/components/layout/Header';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container flex-1 py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <section className="space-y-4">
            <Heading level="h1">Design System</Heading>
            <Text size="lg">
              This design system includes typography components, data entry components, and feedback components.
              Use this system to build consistent, accessible, and responsive interfaces.
            </Text>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <Heading level="h3" className="mb-3">Typography</Heading>
              <Text className="mb-4">
                Typographic components including headings, paragraphs, and labels.
              </Text>
              <Link 
                to="/typography"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                View Typography
              </Link>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Heading level="h3" className="mb-3">Data Entry</Heading>
              <Text className="mb-4">
                Interactive form components for data collection.
              </Text>
              <Link 
                to="/inputs"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                View Form Components
              </Link>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Heading level="h3" className="mb-3">Feedback</Heading>
              <Text className="mb-4">
                Components for providing user feedback and notifications.
              </Text>
              <Link 
                to="/feedback"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                View Feedback Components
              </Link>
            </div>
          </section>

          <section className="space-y-4">
            <Heading level="h2">Getting Started</Heading>
            <Text>
              This design system is built with React, TypeScript, and Tailwind CSS. Each component
              is fully typed, accessible, and responsive. Use the links above to explore the
              components and their documentation.
            </Text>
          </section>

          <section className="space-y-4">
            <Heading level="h2">Accessibility</Heading>
            <Text>
              All components are built with accessibility in mind, including proper ARIA attributes,
              keyboard navigation, and focus management. The design system is also responsive and
              works on all screen sizes.
            </Text>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
