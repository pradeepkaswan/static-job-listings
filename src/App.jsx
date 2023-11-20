import './styles/styles.css'
import AppHeaderBanner from './components/AppHeaderBanner/AppHeaderBanner'
import AppViewContainer from './components/AppViewContainer/AppViewContainer'

const App = () => {
  return (
    <>
      <div className="App">
        <AppHeaderBanner BannerType={'desktop'} />
        <AppViewContainer />
      </div>
    </>
  )
}

export default App
