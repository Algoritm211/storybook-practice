import { withConsole } from '@storybook/addon-console'
import { addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addParameters({
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS }
  }
})