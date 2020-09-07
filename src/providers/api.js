import account from './account'

const API_URL = 'https://jelajah-nusantara.herokuapp.com'

const getHeader = async () => {
    const authInfo = await account.getAccount()
    return authInfo ? authInfo.accessToken : null
}

export default {
    request: async (url, method, model) => {
        const config = {
            method: method
        }
        const header = await getHeader()
        if (header) {
            config.header = header
        }
        if(model){
            config.data = model
        }
        const response = await fetch(`${API_URL}/${url}`, config)
        const json = await response.json()
        return json
    },

}