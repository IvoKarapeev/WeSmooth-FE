import authStore from '../../store/auth/authStore'

/**
 * Calls an URL.
 * @param url the URL to call.
 * @param requestOptions the request options (like headers, http method, request body).
 * @returns Promise<Response> as the standard fetch function.
 */
export const callBackendApi = (url: string, requestOptions: RequestInit) => {
    return fetch(url, requestOptions)
}

/**
 * Calls an URL with appended "Authorization: Bearer {accessToken}" header,
 * where the {accessToken} is taken from the Shared State.
 * @param url the URL to call.
 * @param requestOptions the request options (like headers, http method, request body).
 * @returns Undefined if the {accessToken} in the Shared State is undefined or
 * Promise<Response> as the standard fetch function.
 */
export const callSecuredBackendApi = (
    url: string,
    requestOptions: RequestInit
) => {
    const { accessToken } = authStore.getState().shared
    if (accessToken) {
        requestOptions.headers = {
            ...requestOptions.headers,
            Authorization: 'Bearer ' + accessToken,
        }
        return fetch(url, requestOptions)
    }
}
