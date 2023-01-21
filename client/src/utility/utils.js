
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


/**
 * sidebar
 * time string like this: 2023-01-19T23:47:36.575Z
 * format the string conditionally such as,
 * - if this is today, then only show time like this: 5:47 PM
 * - else if not today, but within the last 7 days, then only show day name, like, Thursday
 * - else, show the date in dd//mm/yyyy format, like 19/07/2021
 * @param date
 * @param locale
 * @returns {string}
 */
export const formatDateTime = (date, locale='en-US') => {
    const today = new Date();
    const time = new Date(date);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (time.toDateString() === today.toDateString()) {
        return time.toLocaleTimeString(locale, {
            hour: '2-digit',
            minute: '2-digit',
        });
    } else if (time.getTime() > today.getTime() - 7 * 24 * 60 * 60 * 1000) {
        return days[time.getUTCDay()];
    } else {
        return time.toLocaleDateString(locale, {
            day: "numeric",
            month: "numeric",
            year: "numeric"
        });
    }
};
