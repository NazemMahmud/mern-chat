import Keyv from 'keyv';

// create single instance
const keyvCache = new Keyv();

/**
 * calculate cache time limit for a token to push into block list
 * @param tokenExpiresIn (milliseconds)
 * @returns {number}
 */
const calculateCacheTTL = tokenExpiresIn => {
    const now = new Date();
    const expire = new Date(tokenExpiresIn);
    console.log('cache: ', now.getTime() - expire.getTime());
    return now.getTime() - expire.getTime();
};

export { keyvCache, calculateCacheTTL };
