import React from 'react'
import Button from './Button'

export default {
  title: 'MyComponents/Button',
  component: Button,
}

export const Primary = () => <Button variant={'primary'}>Primary</Button>
export const Success = () => <Button variant={'success'}>Success</Button>
export const Error = () => <Button variant={'error'}>Error</Button>