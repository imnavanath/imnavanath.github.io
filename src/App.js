import React from "react";
import config from './profile.config';
import Profile from './components/Profile';

function App() {
	return <Profile config={config} />;
}

export default App;
