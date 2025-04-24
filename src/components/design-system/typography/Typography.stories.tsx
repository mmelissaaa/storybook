import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Text, Label, Caption, HelperText } from './Typography';

const meta: Meta = {
  title: 'Design System/Typography',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

// Headings
export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level="h1">Heading 1</Heading>
      <Heading level="h2">Heading 2</Heading>
      <Heading level="h3">Heading 3</Heading>
      <Heading level="h4">Heading 4</Heading>
      <Heading level="h5">Heading 5</Heading>
      <Heading level="h6">Heading 6</Heading>
    </div>
  ),
};

// Text Variants
export const TextVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Text size="xl">Extra Large Text (xl)</Text>
      <Text size="lg">Large Text (lg)</Text>
      <Text size="base">Base Text (base)</Text>
      <Text size="sm">Small Text (sm)</Text>
      <Text size="xs">Extra Small Text (xs)</Text>
    </div>
  ),
};

// Text Weights
export const TextWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <Text weight="light">Light Weight Text</Text>
      <Text weight="normal">Normal Weight Text</Text>
      <Text weight="medium">Medium Weight Text</Text>
      <Text weight="semibold">Semibold Weight Text</Text>
      <Text weight="bold">Bold Weight Text</Text>
    </div>
  ),
};

// Labels
export const Labels: Story = {
  render: () => (
    <div className="space-y-4">
      <Label size="base">Default Label (base)</Label>
      <Label size="sm">Small Label (sm)</Label>
      <Label size="xs">Extra Small Label (xs)</Label>
    </div>
  ),
};

// Captions and Helper Text
export const CaptionsAndHelpers: Story = {
  render: () => (
    <div className="space-y-4">
      <Caption>This is a caption</Caption>
      <HelperText>This is helper text</HelperText>
    </div>
  ),
};

// Interactive Example
export const InteractiveHeading: Story = {
  args: {
    level: 'h1',
    children: 'Interactive Heading',
  },
};

export const InteractiveText: Story = {
  render: (args) => <Text {...args} />,
  args: {
    size: 'base',
    weight: 'normal',
    children: 'Interactive text example',
  },
};