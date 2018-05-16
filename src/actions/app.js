export const LOGIN_USER = 'LOGIN_USER';
export const RESTORE_LOGIN = 'RESTORE_LOGIN';
export const LOGOUT = 'LOGOUT';

//this is an example because there no backend for this
export async function loginUser(request) {

    // let response;
    // let auth_data;
    // try {
    //     response = await axios.post(`${Config.auth_url}login-user`,
    //         {
    //             username: request.email,
    //             password: request.password,
    //             client_id: Config.client_id,
    //             client_secret: Config.client_secret,
    //             grant_type: "password",
    //         }
    //     );
    //     auth_data = response.data;
    // } catch(err) {
    //         Util.showError('Could not login. Username or password may be incorrect.');
    //     return {
    //         type: false,
    //     }
    // }

    // // Save access_token in localStorage
    // localStorage.setItem('access_token', auth_data.access_token);
    // localStorage.setItem('refresh_token', auth_data.refresh_token);

    // // Add access_token to axios
    // axios.defaults.headers.common['Authorization'] = "Bearer " + auth_data.access_token;
    // axios.defaults.headers.common['Content-Type'] = "application/json";

    // return {
    //     type: LOGIN_USER,
    //     payload: response,
    // }
}
