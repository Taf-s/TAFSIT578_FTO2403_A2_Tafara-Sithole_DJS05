# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

In this challenge, you will venture into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. Your primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, you'll subscribe to state updates and log them to the console, highlighting the power of state management in applications.

## Objective

Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. Your implementation will not involve UI rendering; instead, it will use console logs to demonstrate state management effectively.

Observer Pattern resource from Refactoring Guru: https://refactoring.guru/design-patterns/observer

## User Stories (Gherkin Syntax)

Your challenge will encompass the following scenarios, tested through your store's implementation:

### SCENARIO 1: Initial State Verification

```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter

```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter

```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter

```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

## Requirements

- **Implement a Global Store**: Create a Redux-inspired store that holds the state of the tally counter. The store should have the ability to dispatch actions and subscribe to state changes.
- **State Management Functions**:
  - **getState**: Returns the current state.
  - **dispatch**: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
  - **subscribe**: Accepts a function that gets called whenever the state changes. This function should log the new state to the console.
- **No UI Rendering**: This challenge focuses on state management without the complexity of UI rendering. All state changes should be observable through console logs.
- **Functional Programming Principles**: Draw upon functional programming concepts as illustrated in the reference videos. While Redux is the inspiration, you're encouraged to apply these principles creatively in your implementation.

## Reflections

- How to run the code.

1. **Open Terminal or Command Prompt**

   Navigate to your project directory if you are not already there:

   ```sh
   cd path/to/your/tally-counter
   ```

2. **Run the `index.js` File**

   Execute the `index.js` file using Node.js:

   ```sh
   node index.js
   ```

   This will run your JavaScript code and log the state changes to the console.

- Brief overview of approach.

  This approach follows a simplified Redux pattern with action creators, a reducer, and a store. The store manages the state and allows for dispatching actions
  and subscribing to state changes. This approach provides a clear and modular structure for managing state in a JavaScript application.

- Any challenges you faced and how you overcame them.

  Wrapping my head around implementing the store without having to use Redux but with a Redux inspired approach was quite challenging.
  I overcame this by breaking down the process of creating the store with the different state management functions, getting the initial state, dispatching actions and
  then subscribing to the store.

## Loom Video Link

 https://www.loom.com/share/61c1c186dbc64c2686bc7ed401cec24b?sid=3da1e081-7d89-44df-964d-c5724ae3e8f7
