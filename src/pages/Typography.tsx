
import React from 'react';
import { Header } from '@/components/layout/Header';
import { 
  Heading, 
  Text, 
  Label, 
  Caption, 
  HelperText 
} from '@/components/design-system/typography/Typography';

const TypographyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container flex-1 py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <section className="space-y-4">
            <Heading level="h1">Typography</Heading>
            <Text size="lg">
              Our typography system provides a robust set of components for text elements,
              including headings, paragraphs, labels, captions, and helper text.
            </Text>
          </section>

          <section className="space-y-8">
            <div className="space-y-4">
              <Heading level="h2">Headings</Heading>
              <div className="space-y-4 border-l-4 border-primary/20 pl-4">
                <Heading level="h1">Heading 1</Heading>
                <Heading level="h2">Heading 2</Heading>
                <Heading level="h3">Heading 3</Heading>
                <Heading level="h4">Heading 4</Heading>
                <Heading level="h5">Heading 5</Heading>
                <Heading level="h6">Heading 6</Heading>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <Text className="font-mono text-xs">
                  {`<Heading level="h1">Heading 1</Heading>`}
                </Text>
              </div>

              <div className="space-y-2">
                <Text weight="medium">Properties:</Text>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <Text><code>level</code>: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"</Text>
                  </li>
                  <li>
                    <Text><code>as</code>: Optional HTML element to render as (default matches level)</Text>
                  </li>
                  <li>
                    <Text>All standard HTML attributes for heading elements</Text>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <Heading level="h2">Text</Heading>
              <div className="space-y-4 border-l-4 border-primary/20 pl-4">
                <Text size="xs">Text Extra Small</Text>
                <Text size="sm">Text Small</Text>
                <Text size="base">Text Base (Default)</Text>
                <Text size="lg">Text Large</Text>
                <Text size="xl">Text Extra Large</Text>
                
                <div className="pt-6"></div>
                
                <Text weight="light">Text Light Weight</Text>
                <Text weight="normal">Text Normal Weight (Default)</Text>
                <Text weight="medium">Text Medium Weight</Text>
                <Text weight="semibold">Text Semibold Weight</Text>
                <Text weight="bold">Text Bold Weight</Text>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <Text className="font-mono text-xs">
                  {`<Text size="base" weight="normal">Regular text</Text>`}
                </Text>
              </div>

              <div className="space-y-2">
                <Text weight="medium">Properties:</Text>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <Text><code>size</code>: "xs" | "sm" | "base" | "lg" | "xl"</Text>
                  </li>
                  <li>
                    <Text><code>weight</code>: "light" | "normal" | "medium" | "semibold" | "bold"</Text>
                  </li>
                  <li>
                    <Text>All standard HTML attributes for paragraph elements</Text>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <Heading level="h2">Labels, Captions & Helper Text</Heading>
              <div className="space-y-4 border-l-4 border-primary/20 pl-4">
                <Label>Default Label</Label>
                <Caption>Caption Text</Caption>
                <HelperText>Helper Text</HelperText>
                
                <div className="pt-6"></div>
                
                <Label size="xs">Extra Small Label</Label>
                <Label size="sm">Small Label (Default)</Label>
                <Label size="base">Base Size Label</Label>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <Text className="font-mono text-xs">
                  {`<Label>Default Label</Label>\n<Caption>Caption Text</Caption>\n<HelperText>Helper Text</HelperText>`}
                </Text>
              </div>

              <div className="space-y-2">
                <Text weight="medium">Properties:</Text>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <Text><code>size</code>: "xs" | "sm" | "base"</Text>
                  </li>
                  <li>
                    <Text><code>as</code>: "label" | "span" (default: "span")</Text>
                  </li>
                  <li>
                    <Text>All standard HTML attributes for label/span elements</Text>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <Heading level="h2">Accessibility Notes</Heading>
            <div className="space-y-2">
              <Text>
                Our typography components follow these accessibility guidelines:
              </Text>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Text>Heading levels follow a logical order to create a proper content hierarchy</Text>
                </li>
                <li>
                  <Text>Text contrast ratios meet or exceed WCAG AA standards (4.5:1 for normal text)</Text>
                </li>
                <li>
                  <Text>Text remains readable at different viewport sizes through responsive sizing</Text>
                </li>
                <li>
                  <Text>Line heights are set for optimal readability</Text>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TypographyPage;
