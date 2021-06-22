import React from 'react'
import Center from '../Center/Center'
import Button from './Button'
import { actions } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'

export default {
  title: 'MyComponents/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  decorators: [(story) => <Center>{story()}</Center>],
}

const Template = (args) => <Button disabled={boolean('Disabled', false)} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  ...actions('onClick', 'onMouseOver')
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  onClick: () => console.log(`Storybook author is ${process.env.STORYBOOK_AUTHOR || 'Alexey Horbunov'}`)
}

export const Error = Template.bind({})
Error.args = {
  variant: 'error'
}