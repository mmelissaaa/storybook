import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider, useToast } from './Toast';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Toast> = {
  title: 'Design System/Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    duration: { control: 'number' },
  },
  args: {
    title: 'Notification',
    description: 'This is a toast notification message.',
    type: 'info',
    duration: 5000,
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toast>;

const ToastTrigger = ({ type }: { type: 'info' | 'success' | 'warning' | 'error' }) => {
  const { addToast } = useToast();
  
  return (
    <Button
      variant="outline"
      onClick={() => addToast({
        title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
        description: `This is a ${type} toast message.`,
        type,
        duration: 3000,
      })}
    >
      Show {type} Toast
    </Button>
  );
};

export const InfoToast: Story = {
  args: {
    type: 'info',
  },
};

export const SuccessToast: Story = {
  args: {
    type: 'success',
  },
};

export const WarningToast: Story = {
  args: {
    type: 'warning',
  },
};

export const ErrorToast: Story = {
  args: {
    type: 'error',
  },
};

export const ToastDemo: Story = {
  render: () => (
    <div className="flex gap-4">
      <ToastTrigger type="info" />
      <ToastTrigger type="success" />
      <ToastTrigger type="warning" />
      <ToastTrigger type="error" />
    </div>
  ),
};

export const PositionExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <ToastProvider position="top-left">
          <ToastTrigger type="info" />
        </ToastProvider>
        <ToastProvider position="top-center">
          <ToastTrigger type="success" />
        </ToastProvider>
        <ToastProvider position="top-right">
          <ToastTrigger type="warning" />
        </ToastProvider>
      </div>
      <div className="flex gap-4">
        <ToastProvider position="bottom-left">
          <ToastTrigger type="info" />
        </ToastProvider>
        <ToastProvider position="bottom-center">
          <ToastTrigger type="success" />
        </ToastProvider>
        <ToastProvider position="bottom-right">
          <ToastTrigger type="warning" />
        </ToastProvider>
      </div>
    </div>
  ),
};