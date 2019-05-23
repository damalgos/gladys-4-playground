import createActionsProfilePicture from './profilePicture';
import createActionProfile from './profile';
import { route } from 'preact-router';

function createActions(store) {
  const actionsProfilePicture = createActionsProfilePicture(store);
  const actionProfile = createActionProfile(store);

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
        const tasks = [actionProfile.getMySelf(state), actionsProfilePicture.loadProfilePicture(state)];
        await Promise.all(tasks);
      } catch (e) {
        route('/login');
      }
    }
  };

  return Object.assign(actions, actionsProfilePicture);
}

export default createActions;
