import React from 'react'
import Input from './Input'


export default {
  title: 'MyComponents/Input',
  component: Input
}

export const Large = () => <Input size={'large'} placeholder={'Large'} />
Large.storyName = 'Large Input'
export const Small = () => <Input size={'small'} placeholder={'Small'} />
Small.storyName = 'Small Input'