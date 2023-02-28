// Libraries
import React from 'react';
import Storybook from '@storybook/react';

// Components
import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Storybook.ComponentMeta<typeof Button>;

const Template: Storybook.ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  variant: 'primary'
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  variant: 'default'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  variant: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  variant: 'danger'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  label: 'Primary'
};
