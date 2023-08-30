src /
  index.tsx```jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const DEV_MODE = process.env.NODE_ENV !== 'production';

const HookedComponent = () => {
    useEffect(() => {
        if (DEV_MODE) {
            console.log('App-loaded');
        }
    }, []);

    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

ReactDOM.render(
    <HookedComponent />,
    document.getElementById('root')
);

serviceWorker.unregister();
```;
