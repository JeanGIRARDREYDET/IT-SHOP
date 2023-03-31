import { createContext, ReactNode, useContext } from 'react';
import { sessionReducer, initialSessionState } from '../stores/SessionStore';
export const SessionContext = createContext(initialSessionState);


export const SessionConsumer = SessionContext.Consumer;
export const SessionConsumerHook = () => useContext(SessionContext);

type Props = {
  children: ReactNode
}
export const SessionProvider = ({children}: Props) => (
  // @ts-ignore
   <SessionContext.Provider value={useReducer(SessionReducer, initialSessionState)}>
       { children }
   </SessionContext.Provider>
);