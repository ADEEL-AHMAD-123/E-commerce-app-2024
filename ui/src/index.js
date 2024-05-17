import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store, { persistor } from './store'; // Import the persistor
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';

const stripePromise = loadStripe("pk_test_51O573sJ58GFVPPaePXWYrXiZvMYHYUUzOAlzgVDQOdkFtFsM6HwKzCxSEIp75TGiU6PBmIJVWbrvPji8SOc9yRhj00HrJutuEy");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Elements stripe={stripePromise}>
          <App />
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
        </Elements>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
