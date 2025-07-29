### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a Javascript Library developed by Facebook. React is used to building User Interfaces.
    This is often single-page applications where the rendering takes on the client side.


- What is Babel?
    Babel is a JavaScript compiler, primarily used to convert modern JavaScript (ES6+) code into a version that older browsers can understand. This allows developers to use the latest language features without worrying about browser compatibility issues.

- What is JSX?
    JSX stands for JavaScript XML. This is an extension that allows Javascript to write HTML-like code 
    directly inside of Javascript. This is used in React to help with client side rendering of HTML pages.

- How is a Component created in React?
    In React, a component is basically a reusable piece of UI, written as either a function or a class.
    Most components are function components using hooks.

    A function component is a Javascript function that returns JSX with the use of hooks like useState or useEffect.

    A class component is written in class syntax and extends React.Component and uses a render() method.



- What are some difference between state and props?

    The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.

    Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.


- What does "downward data flow" refer to in React?

    Downward data flow refers to the passing of data and/or functions via props from parent to child components. These props are passed down when a child component gets created. We pass data down to child components, so they can render them on to the DOM.

- What is a controlled component?
    Controlled components are form elements (like input, textarea, or select) that are managed by React state. This means that the value of the form element is set and updated through React state, making React the "single source of truth" for the form data. Controlled components in React ensure that the form data is handled by the React state, providing a consistent and predictable way to manage user input.


- What is an uncontrolled component?

    Uncontrolled components in React manage their own state internally rather than relying on React state. This approach is useful for simple forms where you don't need to manipulate the input data through React state updates. Uncontrolled components manage their state internally using DOM refs (useRef hook in functional components or React.createRef() in class components) to access form element values directly.

- What is the purpose of the `key` prop when rendering a list of components?

    The key prop is a unique identifier that React uses to efficiently manage and update elements within a list. When rendering a list of elements, it is crucial to assign a unique key to each element to help React differentiate between the items and perform updates more efficiently.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

     Using an array index as the key prop in React is considered a bad practice in most cases because it can break React's reconciliation process, leading to unexpected UI bugs. The reconciliation process in React is how React figures out what changes need to be made to the DOM when your app's state or props update.




- Describe useEffect.  What use cases is it used for in React components?
    
    useEffect is a Hook in React that lets you perform side effects in function components.
A side effect is any operation that affects something outside the function’s scope or requires cleanup, like:

Fetching data from an API, subscribing to events, updating the DOM manually, and setting up timers


- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef is a React Hook that creates a mutable reference object which persists across component renders without causing a re-render when it changes. Updating myRef.current does NOT trigger a re-render because React does not track changes to refs the way it does with state.


- When would you use a ref? When wouldn't you use one?

You use a ref when you need to store or access something that doesn’t affect rendering. Common cases:
Direct DOM Access, storing Mutable Values (that don’t trigger re-render), and preserving Values Across Renders.

You shouldn’t use refs for things that React’s state system handles better:
When the value should trigger a re-render, to replace controlled components, and for global state or logic.




- What is a custom hook in React? When would you want to write one?
A custom hook is a JavaScript function that:
starts with use (by convention, like useMyHook), uses React hooks (useState, useEffect, etc.) inside, and encapsulates reusable logic so multiple components can share it without duplicating code.

You create a custom hook when you need to reuse logic that involves hooks across multiple components, such as fetching data from an API using useEffect and useState. Custom hooks help separate concerns, making your code cleaner and more maintainable by moving complex state logic out of components. They also allow you to create reusable abstractions for side effects or state handling, reducing duplication and improving consistency across your application.