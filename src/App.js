import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import TrendingVideo from './components/TrendingVideo'
import GamingVideo from './components/GamingVideo'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkMode: false, savedVideoList: []}

  darkLightMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  toAddSavedVideo = videoDetailsObject => {
    const {savedVideoList} = this.state
    const {id} = videoDetailsObject
    const findIsAlreadySaved = savedVideoList.find(
      eachItem => eachItem.id === id,
    )

    if (findIsAlreadySaved === undefined) {
      this.setState(prevState => ({
        savedVideoList: [...prevState.savedVideoList, videoDetailsObject],
      }))
    } else {
      this.setState({
        savedVideoList: savedVideoList.filter(eachItem => eachItem.id !== id),
      })
    }
  }

  darkLightMode = value => {
    this.setState({isDarkMode: value})
  }

  render() {
    const {isDarkMode, savedVideoList} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          darkLightMode: this.darkLightMode,
          savedVideoList,
          toAddSavedVideo: this.toAddSavedVideo,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideo} />
          <ProtectedRoute exact path="/gaming" component={GamingVideo} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
