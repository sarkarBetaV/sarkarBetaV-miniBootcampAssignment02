1. What is JSX, and why is it used?
    JSX is a syntax extension that lets you write HTML-like code in JavaScript. It's used because:
    - Makes code more readable and intuitive  
    - Allows embedding JavaScript expressions using `{}`

2. What is the difference between State and Props?

    State and Props are both fundamental concepts in React for managing data, but they serve different purposes. State is internal data that is managed within a component itself, meaning the component owns and can modify its own state using functions like useState() or setState(), and any change to state triggers a re-render of that component. In contrast, Props (short for properties) are external data passed from a parent component to a child component, and they are read-only, meaning the child component cannot modify the props it receives—it can only use them for rendering. While state is mutable and controlled by the component where it is defined, props are immutable and controlled by the parent component, allowing data to flow down the component tree.

3. What is the useState hook, and how does it work?
  -useState is a React Hook that adds state to functional components.

    How it works:

const [count, setCount] = useState(0);
// Returns: [currentState, functionToUpdateState]

- Takes initial state as argument
- Returns array with two values: current state and setter function
- When setter is called, component re-renders with new state

4. How can you share state between components in React?
  -Three common ways:
- Lifting State Up: Move state to closest common parent
- Context API: For global state without prop drilling
- State Management Libraries: Redux, Zustand, etc.


5. How is event handling done in React?
- Events are named using camelCase (`onClick` not `onclick`)
- Pass functions as event handlers, not strings
- Can pass parameters using arrow functions

Examples:

<button onClick={handleClick}>Click</button>
<button onClick={() => handleClick(id)}>With Param</button>
<input onChange={(e) => setValue(e.target.value)} />