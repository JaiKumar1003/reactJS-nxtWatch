import React from 'react'

const nxtWatchContext = React.createContext({
  isDarkMode: false,
  darkLightMode: () => {},
  savedVideoList: [],
  toAddSavedVideo: () => {},
})

export default nxtWatchContext
