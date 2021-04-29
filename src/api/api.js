import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5f1d6e4b-198c-454d-8ded-0d641b154fc2"
    },
});


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {

        return instance
            .get(
                `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    deleteSubscription(userId) {

        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    postSubscription(userId) {

        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    getAuth() {
        console.warn("Obsolote method. Please, use loginAPI obj instead.")
        return loginAPI.getAuth()
    },

    getUserProfile(userId) {
        
        console.warn("Obsolote method. Please, use profileAPI obj instead.")
        return profileAPI.getUserProfile(userId)
    }

}

export const profileAPI = {

    getUserProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },

    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus (status) {
        return instance.put(`profile/status`, {status})
    },

    savePhoto (file) {
        let formData = new FormData();
        formData.append("image", file)
        
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile (formData) {

        return instance.put(`profile`, formData);
    }
}

export const loginAPI = {

    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    },

    postAuth(loginData) {
        return instance.post(`auth/login`, {...loginData}).then(response => response.data)
    },

    deleteAuth(loginData) {
        return instance.delete(`auth/login`)
    },

}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    },
}