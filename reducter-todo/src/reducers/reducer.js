

export const initialState = {
  todoItems: [
    {
      item: 'go to the bank',
      completed: false,
      id: Date.now()
    },
    {
      item: 'eat food',
      completed: false,
      id: Date.now()
    },
    {
      item: 'dance',
      completed: false,
      id: Date.now()
    },

  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        groceries: [...state.todoItems, newItem]
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.map(todoItem => {
          if (action.payload === todoItem.id) {
            return {
              ...todoItem,
              completed: !todoItem.completed
            };
          }
          return todoItem;
        })
      };
    case CLEAR_PURCHASED:
      return {
        ...state,
        todoItems: state.todoItems.filter(todoItem => !todoItem.completed)
      };
    default:
      return state;
  }
};


