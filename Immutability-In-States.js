(state, actions) => {
  const index = state.todos.findIndex(todo => todo.id === actions.payload);

  if (index === -1) return state;

  return {
    ...state,
    todos: [
      ...state.todos.slice(0, index),
      ...state.todos.slice(index + 1)
    ]
  };
};

// Here we are using the react redux toolkit therefore we have state and actions as an arguments. 
// the syntax of using the spread operator (...) combined with slice is a powerful way to create a new array by merging segments of an existing array. This technique is particularly useful when you want to maintain immutability, as is often required in React.

// Analogy Behind slice and spread Combined:
// Imagine you have a row of items on a table, and you want to remove one specific item from the middle. To do this without disturbing the order of the remaining items, you might:

// Slice the Items Before and After the One You Want to Remove:

// First, you carefully take all the items before the one you want to remove and set them aside.
// Then, you take all the items after the one you want to remove and set them aside.
// Combine the Two Groups:

// Finally, you bring the two groups back together, placing them side by side, effectively recreating the original row minus the removed item.
