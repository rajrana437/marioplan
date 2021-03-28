import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import {
  reactReduxFirebase,
  getFirebase,
  createFirestoreInstance,
} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      enableRedirectHandling: false,
      resetBeforeLogin: false,
      attachAuthIsReady: true,
    })
  )
);

export default store;

// // import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './store/reducers/rootReducer';
// // import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
// // import { createFirestoreInstance } from 'redux-firestore'
// import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig';

// const initialState = {};

// const rrfConfig = { userProfile: 'users' }; // react-redux-firebase config

// // Initialize firebase instance
// firebase.initializeApp(fbConfig);

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     reactReduxFirebase(firebase, rrfConfig),
//     reduxFirestore(firebase),
//     applyMiddleware(...middleware)
//   )
// );
