
export const getAccessToken = localStorage.getItem('accessToken') || ''

export const getUserData = () => {
    const userData = localStorage.getItem('userData') || ''
    return userData ? JSON.parse(userData) : {}
}

/**
 * Check submit button should remain disabled or not
 * @param formInput
 * @returns {boolean}
 */
export const checkDisableButton = formInput => {
    for (const property in formInput) {
        if (!formInput[property].isValid) {
            return true
        }
    }
    return false
}

/**
 * Returns in hour:min AM format
 * @param date
 * @returns {string}
 */
export const formatHourAndMinute = date => {
    return new Date(date).toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' });
}


// TODO: date for sameday, previous day, normal day, local datetime string (need in sidebar)
