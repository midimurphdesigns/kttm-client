import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import genreReducer from './reducers/genre-reducer'
import locationReducer from './reducers/location-reducer';
import ticketmasterReducer from './reducers/ticketmaster-reducer';
import favoriteReducer from './reducers/favorite-reducer';
import contactReducer from './reducers/contacts-reducer';
import sideDrawerReducer from './reducers/side-drawer-reducer';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import { composeWithDevTools } from 'redux-devtools-extension';
import youtubeReducer from './reducers/youtube-reducer';

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		ticketmaster: ticketmasterReducer,
		genre: genreReducer,
		location: locationReducer,
		favorite: favoriteReducer,
		contact: contactReducer,
		sideDrawerOpen: sideDrawerReducer,
		youtube: youtubeReducer,
	}),
	composeWithDevTools(),
	applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;
