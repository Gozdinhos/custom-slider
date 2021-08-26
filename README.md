# Latana Take Home Test

This is a take home test performs a custom slider for Latana website that visualizes the information about Latana and 'how Latana works' with a custom slider. React is used for the project structure and CSS is used for styling and design.

For the project, the aim was to create a reusable, modular carousel component that works both for mobile and desktop sizes. For this, a react component (Carousel.js) was created that places the wrapped elements in a slider. To achieve responsiveness,predefined dimensions of the wrapped items are passed into the component as props:

```
itemSize={{ small: { w: 248, h: 389 }, large: { w: 384, h: 479 } }}
```

Which items were going to be faded or the sliding distance etc. are calculated with each render according to these props.

-In the project directory, you can run:

### `npm install`

then

### `npm start`

##### NOTE: Thanks for sending me this task, I have already gained different perspectives! Finger crossed for the next chapter! <3
