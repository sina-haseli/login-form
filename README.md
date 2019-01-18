## Login form Reactjs:
login form example for reactjs that can post data with axios (post) but still do not have token :)
use below code in your Login action
```
const axios = Axios.create({
    baseURL: CONSTANTS.BASE_URL,
    timeout: 1000,
    headers: {'x-access-token': ' localStorage '  }
});


export const login = (user) => dispatch => {
    axios.post('URL-API', user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            console.log(token);
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.status
            });
        });
};
```
and for your `setAuthToken` in line 19 make a new file with setAuthToken.js name and copy that code :
```
import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-access-token'] = "Bearer " + token;
    }
    else {
        delete axios.defaults.headers.common['x-access-token'];
    }
};

export default setAuthToken;
```
##How to use
1.clone the repository<br/>
2.`cd` into the project folder<br/>
3.`npm install`<br/>
4.`npm start`<br/>


### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

