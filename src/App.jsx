import { createStore } from 'redux'
import { Provider } from 'react-redux'
import jobsReducer from './reducer'
import { useEffect } from 'react'
import Filters from './components/Filters'
import JobList from './components/JobList'

const store = createStore(jobsReducer)

const App = () => {
  useEffect(() => {
    fetch().then((data) =>
      store.dispatch({ type: 'SET_JOBS', payload: data }).catch(() => {
        store.dispatch({ type: 'ERROR' })
      }),
    )
  }, [])

  return (
    <Provider store={store}>
      <div className="wrapper">
        <main>
          <Filters />
          <JobList />
        </main>
      </div>
    </Provider>
  )
}

export default App
