
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Heading, Text } from '@/components/design-system/typography/Typography';
import { TextInput } from '@/components/design-system/input/TextInput';
import { Select } from '@/components/design-system/select/Select';
import { Search, Mail } from 'lucide-react';

const InputsPage = () => {
  const [textValue, setTextValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [errorTextValue, setErrorTextValue] = useState('');

  const fruitOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'kiwi', label: 'Kiwi' },
  ];

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container flex-1 py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <section className="space-y-4">
            <Heading level="h1">Data Entry Components</Heading>
            <Text size="lg">
              Form components for collecting user input with a focus on accessibility,
              validation, and user feedback.
            </Text>
          </section>

          <section className="space-y-8">
            <div className="space-y-4">
              <Heading level="h2">Text Input</Heading>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <TextInput 
                    label="Default Input"
                    placeholder="Enter text here"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    helperText="This is helper text for the input field"
                  />
                  
                  <TextInput 
                    label="Input with Left Icon"
                    placeholder="Search..."
                    leftIcon={<Search className="h-4 w-4" />}
                    className="pl-8"
                  />
                  
                  <TextInput 
                    label="Input with Right Icon"
                    placeholder="Enter email"
                    rightIcon={<Mail className="h-4 w-4" />}
                    type="email"
                    className="pr-8"
                  />
                </div>
                
                <div className="space-y-6">
                  <TextInput 
                    label="Error State"
                    placeholder="Enter text here"
                    value={errorTextValue}
                    onChange={(e) => setErrorTextValue(e.target.value)}
                    errorMessage="This field is required"
                    variant="error"
                  />
                  
                  <TextInput 
                    label="Disabled Input"
                    placeholder="Cannot edit this field"
                    disabled
                  />
                  
                  <div className="space-y-4">
                    <TextInput 
                      label="Small Input"
                      placeholder="Small size"
                      size="sm"
                    />
                    
                    <TextInput 
                      label="Large Input"
                      placeholder="Large size"
                      size="lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="bg-muted p-4 rounded-md">
                  <Text className="font-mono text-xs">
{`<TextInput 
  label="Default Input"
  placeholder="Enter text here"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  helperText="This is helper text for the input field"
/>`}
                  </Text>
                </div>
                
                <div className="mt-4 space-y-2">
                  <Text weight="medium">Properties:</Text>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><Text><code>label</code>: Optional label text</Text></li>
                    <li><Text><code>helperText</code>: Optional helper text displayed below the input</Text></li>
                    <li><Text><code>errorMessage</code>: Optional error message</Text></li>
                    <li><Text><code>variant</code>: "default" | "error"</Text></li>
                    <li><Text><code>size</code>: "sm" | "md" | "lg"</Text></li>
                    <li><Text><code>leftIcon</code>: Optional React node for left icon</Text></li>
                    <li><Text><code>rightIcon</code>: Optional React node for right icon</Text></li>
                    <li><Text>All standard HTML input attributes</Text></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <Heading level="h2">Select Menu</Heading>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <Select
                    label="Default Select"
                    placeholder="Choose a fruit"
                    options={fruitOptions}
                    value={selectValue}
                    onChange={setSelectValue}
                    helperText="Select one option from the list"
                  />
                  
                  <Select
                    label="Required Select"
                    placeholder="Choose a country"
                    options={countryOptions}
                    required
                    helperText="This field is required"
                  />
                </div>
                
                <div className="space-y-6">
                  <Select
                    label="Error State"
                    placeholder="Choose a fruit"
                    options={fruitOptions}
                    variant="error"
                    errorMessage="Please select an option"
                  />
                  
                  <Select
                    label="Disabled Select"
                    placeholder="Cannot select"
                    options={fruitOptions}
                    disabled
                  />
                  
                  <div className="space-y-4">
                    <Select
                      label="Small Select"
                      placeholder="Small size"
                      options={fruitOptions.slice(0, 3)}
                      size="sm"
                    />
                    
                    <Select
                      label="Large Select"
                      placeholder="Large size"
                      options={fruitOptions.slice(0, 3)}
                      size="lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="bg-muted p-4 rounded-md">
                  <Text className="font-mono text-xs">
{`<Select
  label="Default Select"
  placeholder="Choose a fruit"
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ]}
  value={value}
  onChange={setValue}
  helperText="Select one option from the list"
/>`}
                  </Text>
                </div>
                
                <div className="mt-4 space-y-2">
                  <Text weight="medium">Properties:</Text>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><Text><code>label</code>: Optional label text</Text></li>
                    <li><Text><code>helperText</code>: Optional helper text</Text></li>
                    <li><Text><code>errorMessage</code>: Optional error message</Text></li>
                    <li><Text><code>options</code>: Array of { '{' }value: string, label: string, disabled?: boolean{ '}' } objects</Text></li>
                    <li><Text><code>placeholder</code>: Placeholder text when no option is selected</Text></li>
                    <li><Text><code>variant</code>: "default" | "error"</Text></li>
                    <li><Text><code>size</code>: "sm" | "md" | "lg"</Text></li>
                    <li><Text><code>disabled</code>, <code>required</code>: Boolean attributes</Text></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <Heading level="h2">Accessibility Notes</Heading>
            <div className="space-y-2">
              <Text>
                Our form components follow these accessibility guidelines:
              </Text>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Text>All inputs have proper labels that are programmatically associated</Text>
                </li>
                <li>
                  <Text>Error messages are associated with inputs via <code>aria-describedby</code></Text>
                </li>
                <li>
                  <Text>Invalid states are indicated with <code>aria-invalid</code></Text>
                </li>
                <li>
                  <Text>Select component is keyboard navigable with arrow keys</Text>
                </li>
                <li>
                  <Text>Focus states are clearly visible with high contrast</Text>
                </li>
                <li>
                  <Text>Required fields are properly marked with <code>aria-required</code></Text>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default InputsPage;
