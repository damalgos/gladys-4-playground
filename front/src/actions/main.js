import createActionsProfilePicture from './profilePicture';
import { route } from 'preact-router';

function createActions(store) {
  const actionsProfilePicture = createActionsProfilePicture(store);

  const actions = {
    handleRoute(state, e) {
      store.setState({
        currentUrl: e.url,
        showDropDown: false
      });
    },
    toggleDropDown(state) {
      store.setState({
        showDropDown: !state.showDropDown
      });
    },
    async checkSession(state) {
      state.session.init();
      if (!state.session.isConnected() && state.currentUrl.url !== '/login') {
        route('/login');
      }
      try {
        const tasks = [state.httpClient.get('/api/v1/me'), actionsProfilePicture.loadProfilePicture(state)];
        await Promise.all(tasks);
        store.setState({
          user: tasks[0]
        });
      } catch (e) {
        route('/login');
      }
    }
  };

  return Object.assign(actions, actionsProfilePicture);
}

export default createActions;
