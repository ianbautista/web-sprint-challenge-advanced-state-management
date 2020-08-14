1. What problem does the context API help solve?

`The context API is a way for a child component to access a value in a parent component. It solves the problem of prop drilling`

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`Reducers are function, which creates a new state in response to actions. Actions are represented by an object with a type and an optional payload. The Redux Store acts as a central hub for states, providing a 'single source of truth. Actions, Reducers and the Store works cohesively to make the states globally available without mutating the states directly.'`

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

`Application states are available globally and can be accessed throughout the application, while Component states are local and can only be accessed within its containing component. To make the app more efficient using only Application states for states that you know are needed globally or in multiple components, and should keep states that are only used onces in that specific component, this way the app wont be "expensive" to run.`

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   `Redux-thunk is middleware for Redux that allows asynchronous actions like actions coming from network requests, to be dispatched to the Redux store. It changes Action creators so that an inner function returned from an outer function can allow the dispatch function to be referenced asynchronously.`

5. What is your favorite state management system you've learned and this sprint? Please explain why!

`I would say Redux is my favorite although its more complicated to setup it is more robust to use and it scales well.`
