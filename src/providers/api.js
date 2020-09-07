import account from './account'

const API_URL = 'https://jelajah-nusantara.herokuapp.com'

const getAccessToken = async () => {
    const authInfo = await account.getAccount()
    return authInfo ? authInfo.accessToken : null
}

export default {
    request: async (url, method, model) => {
        const config = {
            method: method
        }
        const accessToken = await getAccessToken()
        if (accessToken) {
            config.headers = {
                Authorization: `Bearer ${accessToken}`
            }
        }
        if (model) {
            config.data = model
        }
        const response = await fetch(`${API_URL}/${url}`, config)
        const json = await response.json()
        return json
    },

}