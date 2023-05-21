# Peacock Flounder UI

# Install

Type the commmand to install
`yarn` or `npm instal`

# Run

Type the command to start running Tailwind CSS and Storybook
`yarn start` or `npm start`

# License

[ISC](./LICENSE)

# Components

[View components in Storybook](https://64454072e5893986554c85a8-mnifbpyuxb.chromatic.com/)

# Figma Assets

[Get Figma Assets](https://64454072e5893986554c85a8-mnifbpyuxb.chromatic.com/)

# Details

This library is a result of an experiment done by a designer using Chat GPT. The creation of this library helped him to learn code and test ideas. Read about the creation the process: Link will be added to Medium

The library was started using [this template](https://github.com/amitavdevzone/reactjs-tailwind-ui-storybook). It's based on [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/).

The core idea of this library is to provide as much verstatility as possible with the fewest number of components. The library provides styled core components, while the whole layouting is supposed to be done by using Tailwind CSS. Although, all major layouting CSS properties are exposed to `Stack` component as React props too. Example:

    <Stack variant='slip' gap='small' className='w-full items-center justify-center'>
        { textAlignToggle.map(((button, index) =>
            <Button
                key={index} 
                selected={selectedTabIndex === index}
                onClick={() => handleTabClick(index)}
                variant="light"
                labelPlacement='tooltip'
                icon={button.icon}
                label={button.label}
            />
        ))}
    </Stack>

Peacock Flounder is a fish that can change its color. The idea is to introduce a theming capability to this library someday, so its components can disguise in various colours.