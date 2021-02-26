export default ({ app }, inject) => {
    inject('checkStatus', ( code, isLogin ) => {

        let statusCodes = {
            400: isLogin ? 'User does not exist' : 'Email exists already',
            500: 'put error message',
            null: 'Network Error'
        }
    
        if (statusCodes[code]) {
            return statusCodes[code]
        } else {
            return false
        }
    })
}
