import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Info, AlertTriangle, Check, X } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'Design System/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'warning', 'success', 'error'],
    },
    title: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    title: 'Alert Title',
    children: 'This is the alert content. It provides context to the user about something important.',
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const InfoAlert: Story = {
  args: {
    variant: 'info',
  },
};

export const WarningAlert: Story = {
  args: {
    variant: 'warning',
  },
};

export const SuccessAlert: Story = {
  args: {
    variant: 'success',
  },
};

export const ErrorAlert: Story = {
  args: {
    variant: 'error',
  },
};

export const WithCustomIcon: Story = {
  args: {
    variant: 'info',
    icon: <Info className="h-5 w-5" />,
  },
};

export const Closable: Story = {
  args: {
    variant: 'info',
    onClose: () => alert('Alert closed!'),
  },
};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
    variant: 'info',
    children: 'This alert has no title, just content.',
  },
};

export const InteractiveExample: Story = {
  render: (args) => <Alert {...args} />,
};