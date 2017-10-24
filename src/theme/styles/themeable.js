import React from 'react'
import PropTypes from 'prop-types'
import createTheme from './createTheme'

export default () => {
  const getDisplayName = c => c.displayName || c.name || 'Component'
  return Component => {
    const WrappedComponent =  (props, context) => {
      const {theme = createTheme()} = context
      return <Component theme={theme} {...props} />
    }
    WrappedComponent.contextTypes = { 
      theme: PropTypes.object
    }
    WrappedComponent.displayName = getDisplayName(Component)
    return WrappedComponent
  }
}
