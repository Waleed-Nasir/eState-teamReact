import App from 'rmw-shell'
import React from 'react'
import WebTemplate from './components/webTemplate';
import config from './config'
import configureStore from './store'
import locales from './config/locales'
import { addLocalizationData } from 'rmw-shell/lib/config/locales'

addLocalizationData(locales)

const Main = () => <WebTemplate appConfig={{ configureStore, ...config }} />

export default Main
