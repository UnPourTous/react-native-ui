/*
 * @flow
 */

import React from 'react'

import AppFrame from './AppFrame'
// import HomePage from './HomePage';
import PageWithSidebar from './PageWithSidebar'
import MDPage from './MDPage'

import {
  TabRouter,
  addNavigationHelpers,
  createNavigator
} from 'react-navigation'

import type { NavigationScreenComponent } from 'react-navigation'

type ScreenOptions = {
  linkName: string,
  icon: string,
  title: string,
};

const NavView = ({ navigation, router }: { navigation: any, router: any }) => {
  const { state } = navigation
  const Component = router.getComponentForState(state)
  return (
    <Component
      navigation={addNavigationHelpers({
        ...navigation,
        state: state.routes[state.index]
      })}
    />
  )
}

type DocPageConfig = {
  doc: string,
  title: string,
  linkName: string,
};

const createDocPage = (
  config: DocPageConfig
): (() => NavigationScreenComponent<*, ScreenOptions>) => {
  const Page: NavigationScreenComponent<*, ScreenOptions> = ({
    navigation
  }: {
    navigation: any,
  }) => <MDPage docPath={config.doc} navigation={navigation} />
  Page.navigationOptions = {
    doc: config.doc,
    title: config.title,
    linkName: config.linkName
  }
  return Page
}

const GuideDocs = createNavigator(
  TabRouter({
    GettingStarted: {
      screen: createDocPage({
        doc: 'guides/Guide-Intro',
        title: 'Hello React-Native-UI', // browser title
        linkName: 'Hello React-Native-UI'
      }),
      path: ''
    }
  })
)(NavView)

GuideDocs.navigationOptions = {
  linkName: 'Getting Started',
  icon: 'pt-icon-flows'
}

const ButtonDocs = createNavigator(
  TabRouter({
    Button: {
      screen: createDocPage({
        doc: 'api/button/Button1',
        title: 'Button1', // browser title
        linkName: 'Button1'
      }),
      path: 'button1'
    },
    Button2: {
      screen: createDocPage({
        doc: 'api/button/Button2',
        title: 'Button2', // browser title
        linkName: 'Button2'
      }),
      path: 'button2'
    }
  })
)(NavView)

ButtonDocs.navigationOptions = {
  linkName: 'Button',
  icon: 'pt-icon-flows'
}

const PopupDocs = createNavigator(
  TabRouter({
    Dialog: {
      screen: createDocPage({
        doc: 'api/popup/Dialog',
        title: 'Button', // browser title
        linkName: 'Button'
      }),
      path: 'button'
    },
    Toast: {
      screen: createDocPage({
        doc: 'api/popup/Toast',
        title: 'Toast', // browser title
        linkName: 'Toast'
      }),
      path: 'toast'
    },
    ActionSheet: {
      screen: createDocPage({
        doc: 'api/popup/ActionSheet',
        title: 'ActionSheet', // browser title
        linkName: 'ActionSheet'
      }),
      path: 'actions-sheet'
    },
    Custom: {
      screen: createDocPage({
        doc: 'api/popup/Custom',
        title: 'Custom', // browser title
        linkName: 'Custom'
      }),
      path: 'custom'
    },
    Animation: {
      screen: createDocPage({
        doc: 'api/popup/Animation',
        title: 'Animation', // browser title
        linkName: 'Animation'
      }),
      path: 'animation'
    }
  })
)(NavView)

PopupDocs.navigationOptions = {
  linkName: 'Popup',
  icon: 'pt-icon-briefcase'
}

const DocsPage = createNavigator(
  TabRouter({
    GuideDocs: {
      screen: GuideDocs,
      path: 'intro'
    },
    ButtonTab: {
      screen: ButtonDocs,
      path: 'button'
    },
    PopupTab: {
      screen: PopupDocs,
      path: 'popup'
    }
  })
)(PageWithSidebar)
DocsPage.navigationOptions = ({
  navigationOptions
}: {
  navigationOptions: any,
}) => ({
  title: `${navigationOptions.title} | React Navigation`
})

const NotFoundError = () =>
  <div className='errorScreen'>
    <h1>Page not found</h1>
  </div>

const App = createNavigator(
  TabRouter({
    // Home: {
    //   screen: HomePage,
    //   path: '',
    // },
    Docs: {
      screen: DocsPage,
      path: 'docs'
    },
    // Blog: {
    //   screen: BlogPage,
    //   path: 'blog',
    // },
    NotFound: {
      screen: NotFoundError,
      navigationOptions: {
        title: 'Page Not Found | React Navigation'
      }
    }
  })
)(AppFrame)

export default App
