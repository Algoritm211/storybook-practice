import React from 'react'
import Input from './Input'


export default {
  title: 'MyComponents/Input',
  component: Input
}

export const Large = () => <Input variant={'large'} placeholder={'Large'} />
Large.storyName = 'Large Input'
export const Small = () => <Input variant={'small'} placeholder={'Small'} />
Small.storyName = 'Small Input'