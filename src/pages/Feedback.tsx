
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Heading, Text } from '@/components/design-system/typography/Typography';
import { Alert } from '@/components/design-system/alert/Alert';
import { Toast, ToastProvider, useToast } from '@/components/design-system/toast/Toast';
import { TextInput } from '@/components/design-system/input/TextInput';

const ToastDemo = () => {
  const { addToast } = useToast();
  const [toastMessage, setToastMessage] = useState('This is a notification message');
  
  const showToast = (type: 'info' | 'success' | 'warning' | 'error') => {
    const titles = {
      info: 'Information',
      success: 'Success!',
      warning: 'Warning',
      error: 'Error',
    };
    
    addToast({
      title: titles[type],
      description: toastMessage || `This is a ${type} message`,
      type,
      duration: 5000,
    });
  };
  
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <TextInput
          label="Toast Message"
          value={toastMessage}
          onChange={(e) => setToastMessage(e.target.value)}
          placeholder="Enter a message to display"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => showToast('info')}
          className="bg-info/20 text-info-foreground hover:bg-info/30 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Show Info Toast
        </button>
        <button
          onClick={() => showToast('success')}
          className="bg-success/20 text-success-foreground hover:bg-success/30 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Show Success Toast
        </button>
        <button
          onClick={() => showToast('warning')}
          className="bg-warning/20 text-warning-foreground hover:bg-warning/30 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Show Warning Toast
        </button>
        <button
          onClick={() => showToast('error')}
          className="bg-destructive/20 text-destructive-foreground hover:bg-destructive/30 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Show Error Toast
        </button>
      </div>
    </div>
  );
};

const FeedbackPage = () => {
  const [alertVisibility, setAlertVisibility] = useState({
    info: true,
    success: true,
    warning: true,
    error: true,
  });

  const toggleAlert = (type: keyof typeof alertVisibility) => {
    setAlertVisibility(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container flex-1 py-12 px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <section className="space-y-4">
              <Heading level="h1">Feedback Components</Heading>
              <Text size="lg">
                Components for providing visual feedback to users, including alerts and toasts.
              </Text>
            </section>

            <section className="space-y-8">
              <div className="space-y-6">
                <Heading level="h2">Alert Banners</Heading>
                <Text>
                  Alert banners display important messages that require attention.
                  They come in different variants to indicate the nature of the message.
                </Text>
                
                <div className="space-y-4">
                  {alertVisibility.info && (
                    <Alert 
                      variant="info" 
                      title="Information" 
                      onClose={() => toggleAlert('info')}
                    >
                      This is an informational message. It provides additional context or guidance.
                    </Alert>
                  )}
                  
                  {alertVisibility.success && (
                    <Alert 
                      variant="success" 
                      title="Success" 
                      onClose={() => toggleAlert('success')}
                    >
                      The operation was completed successfully. Your changes have been saved.
                    </Alert>
                  )}
                  
                  {alertVisibility.warning && (
                    <Alert 
                      variant="warning" 
                      title="Warning" 
                      onClose={() => toggleAlert('warning')}
                    >
                      This action could have unexpected consequences. Please proceed with caution.
                    </Alert>
                  )}
                  
                  {alertVisibility.error && (
                    <Alert 
                      variant="error" 
                      title="Error" 
                      onClose={() => toggleAlert('error')}
                    >
                      An error occurred while processing your request. Please try again.
                    </Alert>
                  )}
                </div>

                <div className="mt-8">
                  <button 
                    onClick={() => setAlertVisibility({
                      info: true,
                      success: true,
                      warning: true,
                      error: true,
                    })}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Reset Alerts
                  </button>
                </div>

                <div className="mt-6">
                  <div className="bg-muted p-4 rounded-md">
                    <Text className="font-mono text-xs">
{`<Alert 
  variant="info" 
  title="Information" 
  onClose={() => handleClose()}
>
  This is an informational message.
</Alert>`}
                    </Text>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <Text weight="medium">Properties:</Text>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><Text><code>variant</code>: "info" | "success" | "warning" | "error"</Text></li>
                      <li><Text><code>title</code>: Optional alert title</Text></li>
                      <li><Text><code>children</code>: Alert content</Text></li>
                      <li><Text><code>onClose</code>: Optional function called when close button is clicked</Text></li>
                      <li><Text><code>icon</code>: Optional custom icon</Text></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8">
                <Heading level="h2">Toast Notifications</Heading>
                <Text>
                  Toast notifications provide non-intrusive feedback about actions
                  or events. They appear temporarily and disappear automatically.
                </Text>
                
                <ToastDemo />

                <div className="mt-6">
                  <div className="bg-muted p-4 rounded-md">
                    <Text className="font-mono text-xs">
{`// First, wrap your app or component with ToastProvider
<ToastProvider>
  <YourComponent />
</ToastProvider>

// Then use the useToast hook inside your component
const { addToast } = useToast();

// Show a toast
addToast({
  title: "Success!",
  description: "Your changes have been saved.",
  type: "success",
  duration: 5000,
});`}
                    </Text>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <Text weight="medium">Properties:</Text>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><Text><code>title</code>: Optional toast title</Text></li>
                      <li><Text><code>description</code>: Toast message</Text></li>
                      <li><Text><code>type</code>: "info" | "success" | "warning" | "error"</Text></li>
                      <li><Text><code>duration</code>: Time in milliseconds before toast disappears (default: 5000)</Text></li>
                      <li><Text><code>onClose</code>: Optional function called when toast is closed</Text></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <Heading level="h2">Accessibility Notes</Heading>
              <div className="space-y-2">
                <Text>
                  Our feedback components follow these accessibility guidelines:
                </Text>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <Text>Alert components have <code>role="alert"</code> to announce content to screen readers</Text>
                  </li>
                  <li>
                    <Text>Toast notifications use <code>aria-live="assertive"</code> for important announcements</Text>
                  </li>
                  <li>
                    <Text>Color is not used as the sole method of conveying information</Text>
                  </li>
                  <li>
                    <Text>Close buttons have accessible names</Text>
                  </li>
                  <li>
                    <Text>Toasts can be dismissed via keyboard</Text>
                  </li>
                  <li>
                    <Text>Focus management ensures modals and toasts are accessible</Text>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </ToastProvider>
  );
};

export default FeedbackPage;
