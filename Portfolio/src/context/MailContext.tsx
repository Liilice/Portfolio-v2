import React, { createContext, ReactNode, useContext, useReducer } from "react";

export type Mail = {
  id: number;
  email: string;
  subject: string;
  html: string;
  read: boolean;
  saved: boolean;
  archived: boolean;
  createdAt: string;
  updatedAt: string;
};

type State = {
  mails: Mail[];
};

type Action =
  | { type: "ADD_MAIL_PENDING"; payload: Mail }
  | { type: "REMOVE_MAIL_PENDING"; payload: Mail }
  | { type: "RESET" };

const initialMails: State = {
  mails: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_MAIL_PENDING":
      console.log("ADD_MAIL_PENDING", action.payload);
      return state;
    case "REMOVE_MAIL_PENDING":
      console.log("REMOVE_MAIL_PENDING", action.payload);
      return state;
    case "RESET":
      console.log("RESET", state);
      return state;
    default:
      return state;
  }
};

export const MailContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

export const MailProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialMails);

  return (
    <MailContext.Provider value={{ state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};

export const useMail = () => {
  const context = useContext(MailContext);
  if (!context) {
    throw new Error(
      "useShoppingList must be used within a ShoppingListProvider"
    );
  }
  return context;
};
