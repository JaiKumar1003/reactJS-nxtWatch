import Header from '../Header/index'

import NxtWatchContext from '../../context/NxtWatchContext'

import ContactUs from '../ContactUs/index'

import {
  NotFoundContainer,
  NotFoundCard,
  NotFoundResult,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const notFoundImg = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer>
          <Header />
          <NotFoundCard>
            <ContactUs />
            <NotFoundResult isDarkMode={isDarkMode}>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundHeading isDarkMode={isDarkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundResult>
          </NotFoundCard>
        </NotFoundContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
