
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducer'; 
import rootSaga from './userSaga';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {user:userReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
