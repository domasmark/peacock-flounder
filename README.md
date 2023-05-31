# Peacock Flounder UI

### Install

Type the commmand to install
`yarn` or `npm instal`

### Run

Type the command to start running Tailwind CSS and Storybook
`yarn start` or `npm start`

### License

[ISC](./LICENSE)

### Components

[Go to Storybook](https://64454072e5893986554c85a8-sxvzqsxfbb.chromatic.com/)

### Figma Assets

[Get Figma Assets](https://www.figma.com/community/file/1244230497140495328)

## Details

This library is the result of an experiment conducted by a designer using Chat GPT. The creation of this library helped him learn code and test ideas. You can read about the creation process in this article:
https://medium.com/@domasmark/how-ai-powered-coding-transformed-the-design-process-7fae647fee85

The library was started using [this template](https://github.com/amitavdevzone/reactjs-tailwind-ui-storybook). It's based on [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/).

The core idea behind this library is to maximize versatility while minimizing the number of components. The library provides styled core components, while the overall layouting is intended to be done using Tailwind CSS. However, all major layouting CSS properties are exposed to the `Stack` and `Grid` components as React props too. Here's an example:

    <Stack variant='slip' gap='small' className='w-full items-center justify-center'>
        { toolbarControls.map((button, index) =>
            <Button
                key={index} 
                selected={selectedTabIndex === index}
                onClick={() => handleTabClick(index)}
                variant="light"
                labelPlacement='tooltip'
                icon={button.icon}
                label={button.label}
            />
        )}
    </Stack>

[Peacock Flounder](https://en.wikipedia.org/wiki/Peacock_flounder) is a fish that can change its color. The idea behind the name was to introduce a theming capability to this library someday, so its components can disguise themselves in various styles.

## What's Next

- Tests.
- Release as npm package.
- Checkbox and Select components.
