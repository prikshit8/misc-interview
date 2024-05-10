async function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    try {
        const data = await fetcher();
        return data;
    }
    catch (e) {
        if (maximumRetryCount === 0) {
            throw e;
        }
        else {
            return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
        }
    }
}