import { combineReducers } from 'redux';

import counter from '@redux/slices/counter';
import homepage from '@redux/slices/homepage';

const rootReducer = combineReducers({ counter, homepage });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
