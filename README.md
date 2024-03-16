# UseContext

## AIM:

- To pass data from component A to component C.

Steps:

1. Create the context (in App.js).
2. Provide this context with a value and the provider must wrap the children components for the value to be available.
3. Now consume the context value using render props method

// Using useContext hook

- Use context hook makes consumption simpler

1. same as above
2. same as above
3. import useContext hook from react and necessary context
4. Call the use context function, passing in the context as its arguments.

## Hitesh

1. create context (context is like a global variable)
2. create context provider for that context.

- children is a like a generic name, ki jo bhi aapke paas aa raha hai usko as it is pass kar do

3. import provider in app.jsx

- Ab app.jsx ke andar me jo bhi component lenge, usme already access milega userContext ka
