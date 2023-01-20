
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


export const getFriend = () => {
    // TODO
}

// TODO: needs to update, AM, PM better
export const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}


// TODO: date for sameday, previous day, normal day, local datetime string (need both in message box & sidebar)
