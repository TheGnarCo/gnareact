import createHistory from 'history/createBrowserHistory';

global.window.gnarHistory = global.window.gnarHistory || createHistory();

export default global.window.gnarHistory;
