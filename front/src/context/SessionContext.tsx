import { createContext, useContext } from 'react';
import { sessionReducer, initialSessionState } from '../stores/SessionStore';
export const SessionContext = createContext(initialSessionState);

const SessionContext = createContext(initialSessionState);

export const SessionConsumer = SessionContext.Consumer;
export const SessionConsumerHook = () => useContext(SessionContext);

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}
export const SessionProvider = ({children}: Props) => (
   <SessionContext.Provider value={useReducer(SessionReducer, initialSessionState)}>
       { children }
   </SessionContext.Provider>
);