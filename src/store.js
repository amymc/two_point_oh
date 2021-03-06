import { createStore, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './reducers';

import menuItems from './data/menuitems';
import popups from './data/popups';
import projects from './data/projects';
import sideProjects from './data/sideprojects';

const defaultState = {
  menuItems,
  popups,
  projects,
  sideProjects
};

const store = createStore(
  rootReducer,
  defaultState
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
