import React from 'react'
import Center from '../Center/Center'
import Button from './Button'

export default {
  title: 'MyComponents/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    onClick: { action: 'clicked' }
  },
  decorators: [(story) => <Center>{story()}</Center>],
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary'
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success'
}

export const Error = Template.bind({})
Error.args = {
  variant: 'error'
}