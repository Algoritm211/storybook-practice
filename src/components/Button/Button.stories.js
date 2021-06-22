import React from 'react'
import Center from '../Center/Center'
import Button from './Button'
import { action, actions } from '@storybook/addon-actions'

export default {
  title: 'MyComponents/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  decorators: [(story) => <Center>{story()}</Center>],
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  ...actions('onClick', 'onMouseOver')
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  onClick: () => console.log('Alex S')
}

export const Error = Template.bind({})
Error.args = {
  variant: 'error'
}