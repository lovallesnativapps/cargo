// import axios from 'axios';
//import store from '../reducers';
export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const EDIT_PROFILE = 'EDIT_PROFILE';

//change-password

/**
 * @param {String} opts.password
 */
export async function changePassword(opts) {
    // try {
    //     await axios.post(, {
    //         ...opts,
    //     });
    //     Util.showDialogue('Password was successfully updated', 'Notice');
    // } catch (err) {
    //     Util.showError('Could not change password: ', err);
    // }
}

//getUsers
export async function getUsers(Id) {

    // return axios.get().then(response => {
    //     console
    //     return {
    //         type: Enums.reducers.GET_USERS,
    //         payload: response.data || [],
    //     }
    // }).catch(err => {
    //     Util.showError('Error while getting users: ', err);
    // });
}

//update user
export function updateUser(userinfo) {
	// return {
	// 	type: Enums.reducers.UPDATE_USER,
	// 	payload: {
	// 		userinfo,
	// 	},
	// }
}
//edit profile

export async function editProfile(id, user) {
    // let socket = store.getState().app.socket;

    // try {
    //     var responses = await Promise.all();

    // } catch (err) {
    //     Util.showError('Could not update profile: ', err);
    // }

    // Util.showSnackBar('Successfully updated User', Enums.snackBarTypes.SUCCESS);

    // return {
    //     type: EDIT_PROFILE,
    //     payload: responses[0]
    // };
}
