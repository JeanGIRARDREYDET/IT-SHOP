import { createContext } from 'react';
import { sessionReducer, initialSessionState } from '../stores/SessionStore';
export const CartContext = createContext(initialCartState);