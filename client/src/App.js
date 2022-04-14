import { useState, useEffect } from 'react';

import axios from 'axios'

import logo from './logo.svg';
import './App.css';

function App() {
  const [activities, setActivities] = useState([])
  const [activitiesFetched, setActivitiesFetched] = useState(false)

  useEffect(() => {
    if (!activitiesFetched) {
      async function fetchActivities() {
        const response = await axios({
          method: 'GET',
          url: `${process.env.REACT_APP_APIHOST}/api/activities`,
          headers: { 'content-format': 'application/json' }
        })

        setActivities(response.data)
      }

      fetchActivities()
      setActivitiesFetched(true)
    }
  }, [ activitiesFetched ])

  let status = 'Loading ...';
  if (!!activities) status = `${activities.length} activities found.`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {status}
        </a>
      </header>
    </div>
  );
}

export default App;
