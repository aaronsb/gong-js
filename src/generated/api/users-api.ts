/* tslint:disable */
/* eslint-disable */
/**
 * Gong API
 * <h2>Overview</h2> <p> The Gong API allows you to: </p> <ol> <li> Receive the following information from Gong: <ol type=\"a\"> <li> Your company\'s <a href=\"#tag--Calls\">calls</a> in Gong </li> <li> Your company\'s <a href=\"#tag--Users\">users</a> in Gong </li> <li> Your company\'s user <a href=\"#tag--Stats\">stats</a> in Gong </li> <li> Your company\'s user <a href=\"#tag--Settings\">settings</a> in Gong </li> <li> Your company\'s <a href=\"#tag--Library\">libraries</a> in Gong </li> </ol></li> <li> <a href=\"#post-/v2/calls\">Upload</a> new or  <a href=\"#put-/v2/calls/-id-/media\">update</a>  call recordings in Gong, in order to support cases where you have an internal system that records  calls or obtains them from a third-party entity. </li> <li> <a href=\"#post-/v2/data-privacy/erase-data-for-email-address\">Data Privacy</a>:  Delete users and all their associated elements.</li> <li> Upload <a href=\"#tag--CRM\">CRM</a> data into Gong.  </li> </ol> <p>Check <a href=\"https://app.gong.io/company/api-authentication?currentTab=MY_API_TAB\">here</a> what\'s your base URL for all API calls. </p> <h2>Authentication</h2>  <p> There are two ways to retrieve credentials to the Gong Public API: </p> <ol><li>Retrieve Manually:<br> <p> In the <a href=\"https://app.gong.io/company/api\">Gong API Page</a> (you must be a technical administrator in Gong), click \"Create\" to receive an <b>Access Key</b>  and an <b>Access Key Secret</b>.<br> </p> <p> Use the Basic Authorization HTTP header (as per <a target=\"_blank\" href=\"https://www.rfc-editor.org/rfc/rfc7617.txt\">RFC</a>) to access the Public API as shown below:<br> <code>Authorization: Basic &lt;token&gt;</code><br> </p> <p> To create the basic token, combine the <b>Access Key</b> and the <b>Access Key Secret</b> with  colon (:) and then encode in Base64 as following:<br> <code>Base64(&lt;accessKey&gt; : &lt;accessKeySecret&gt;)</code><br><br> </p></li> <li>Retrieve through OAuth<br> <p> To obtain the Bearer token, follow the steps described in the <a target=\"_blank\" href=\"https://help.gong.io/hc/en-us/articles/13944551222157-Create-an-app-for-Gong\">Gong OAuth Guide</a>. <br></p> <p> After obtaining the token, use the Bearer Authorization HTTP header (as per <a target=\"_blank\" href=\"https://www.rfc-editor.org/rfc/rfc6750.txt\">RFC</a>) to access the Public API as shown below:<br> <code>Authorization: Bearer &lt;token&gt;</code> </p> </li></ol> <h2>Limits</h2>  <p> By default Gong limits your company\'s access to the service to 3 API calls per second, and 10,000 API calls per day. </p> <p> When the rate of API calls exceeds these limits an HTTP status code <b>429</b> is returned and a <b>Retry-After</b> header indicates  how many seconds to wait before making a new request. </p><p> If required, contact <a target=\"_blank\" href=\"https://help.gong.io\">help.gong.io</a> to change these limits. </p>  <h2>Cursors</h2>  <p> Some API calls that return a list are limited in the amount of records they may return, so multiple API calls may be  required to bring all records. Such an API call also returns a <b>records</b> field, which contains the number of records  in the current page, the current page number and the total number of records. </p> <p> In cases where the total number of records exceeds the number of records thus far retrieved, the <b>records</b> field will also  contain a <b>cursor</b> field which can be used to access the next page of records. To retrieve the next page, repeat the API call with  the <b>cursor</b> value as supplied by the previous API call. All other request inputs should remain the same. </p> <h2>Forward Compatibility</h2>  <p> When coding a system to accept Gong data, take into account that Gong may, without prior warning, add fields to the JSON output.  It is recommended to future proof your code so that it disregards all JSON fields you don\'t actually use.  </p><p></p>
 *
 * The version of the OpenAPI document: V2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ErrorResponse } from '../models';
// @ts-ignore
import type { PublicApiBaseRequestV2MultipleUsersRequestWithCreationDates } from '../models';
// @ts-ignore
import type { SettingsHistory } from '../models';
// @ts-ignore
import type { User } from '../models';
// @ts-ignore
import type { UsersMetadata } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve a specific user.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary Retrieve user (/v2/users/{id})
         * @param {string} id Gong\&#39;s unique numeric identifier for the user (up to 20 digits).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUser', 'id', id)
            const localVarPath = `/v2/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a specific user\'s settings history.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary Retrieve user settings history (/v2/users/{id}/settings-history)
         * @param {string} id Gong\&#39;s unique numeric identifier for the user (up to 20 digits).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserHistory: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUserHistory', 'id', id)
            const localVarPath = `/v2/users/{id}/settings-history`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List multiple Users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary List users by filter (/v2/users/extensive)
         * @param {PublicApiBaseRequestV2MultipleUsersRequestWithCreationDates} publicApiBaseRequestV2MultipleUsersRequestWithCreationDates 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMultipleUsers: async (publicApiBaseRequestV2MultipleUsersRequestWithCreationDates: PublicApiBaseRequestV2MultipleUsersRequestWithCreationDates, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'publicApiBaseRequestV2MultipleUsersRequestWithCreationDates' is not null or undefined
            assertParamExists('listMultipleUsers', 'publicApiBaseRequestV2MultipleUsersRequestWithCreationDates', publicApiBaseRequestV2MultipleUsersRequestWithCreationDates)
            const localVarPath = `/v2/users/extensive`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(publicApiBaseRequestV2MultipleUsersRequestWithCreationDates, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all of the company\'s users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary List all users (/v2/users)
         * @param {string} [cursor] When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
         * @param {boolean} [includeAvatars] Avatars are synthetic users representing Gong employees (CSMs and support providers) when they access your instance. References to avatars\&#39; IDs may be found in the outputs of other API endpoints. This parameter is optional, if not provided avatars will not be included in the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUsers: async (cursor?: string, includeAvatars?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (includeAvatars !== undefined) {
                localVarQueryParameter['includeAvatars'] = includeAvatars;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve a specific user.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary Retrieve user (/v2/users/{id})
         * @param {string} id Gong\&#39;s unique numeric identifier for the user (up to 20 digits).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieve a specific user\'s settings history.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary Retrieve user settings history (/v2/users/{id}/settings-history)
         * @param {string} id Gong\&#39;s unique numeric identifier for the user (up to 20 digits).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserHistory(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SettingsHistory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserHistory(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getUserHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List multiple Users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary List users by filter (/v2/users/extensive)
         * @param {PublicApiBaseRequestV2MultipleUsersRequestWithCreationDates} publicApiBaseRequestV2MultipleUsersRequestWithCreationDates 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMultipleUsers(publicApiBaseRequestV2MultipleUsersRequestWithCreationDates: PublicApiBaseRequestV2MultipleUsersRequestWithCreationDates, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersMetadata>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMultipleUsers(publicApiBaseRequestV2MultipleUsersRequestWithCreationDates, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.listMultipleUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List all of the company\'s users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary List all users (/v2/users)
         * @param {string} [cursor] When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
         * @param {boolean} [includeAvatars] Avatars are synthetic users representing Gong employees (CSMs and support providers) when they access your instance. References to avatars\&#39; IDs may be found in the outputs of other API endpoints. This parameter is optional, if not provided avatars will not be included in the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUsers(cursor?: string, includeAvatars?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersMetadata>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listUsers(cursor, includeAvatars, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.listUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Retrieve a specific user.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary Retrieve user (/v2/users/{id})
         * @param {UsersApiGetUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(requestParameters: UsersApiGetUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.getUser(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a specific user\'s settings history.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary Retrieve user settings history (/v2/users/{id}/settings-history)
         * @param {UsersApiGetUserHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserHistory(requestParameters: UsersApiGetUserHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<SettingsHistory> {
            return localVarFp.getUserHistory(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * List multiple Users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary List users by filter (/v2/users/extensive)
         * @param {UsersApiListMultipleUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMultipleUsers(requestParameters: UsersApiListMultipleUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<UsersMetadata> {
            return localVarFp.listMultipleUsers(requestParameters.publicApiBaseRequestV2MultipleUsersRequestWithCreationDates, options).then((request) => request(axios, basePath));
        },
        /**
         * List all of the company\'s users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
         * @summary List all users (/v2/users)
         * @param {UsersApiListUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUsers(requestParameters: UsersApiListUsersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<UsersMetadata> {
            return localVarFp.listUsers(requestParameters.cursor, requestParameters.includeAvatars, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - interface
 * @export
 * @interface UsersApi
 */
export interface UsersApiInterface {
    /**
     * Retrieve a specific user.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary Retrieve user (/v2/users/{id})
     * @param {UsersApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    getUser(requestParameters: UsersApiGetUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<User>;

    /**
     * Retrieve a specific user\'s settings history.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary Retrieve user settings history (/v2/users/{id}/settings-history)
     * @param {UsersApiGetUserHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    getUserHistory(requestParameters: UsersApiGetUserHistoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<SettingsHistory>;

    /**
     * List multiple Users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary List users by filter (/v2/users/extensive)
     * @param {UsersApiListMultipleUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    listMultipleUsers(requestParameters: UsersApiListMultipleUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<UsersMetadata>;

    /**
     * List all of the company\'s users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary List all users (/v2/users)
     * @param {UsersApiListUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    listUsers(requestParameters?: UsersApiListUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<UsersMetadata>;

}

/**
 * Request parameters for getUser operation in UsersApi.
 * @export
 * @interface UsersApiGetUserRequest
 */
export interface UsersApiGetUserRequest {
    /**
     * Gong\&#39;s unique numeric identifier for the user (up to 20 digits).
     * @type {string}
     * @memberof UsersApiGetUser
     */
    readonly id: string
}

/**
 * Request parameters for getUserHistory operation in UsersApi.
 * @export
 * @interface UsersApiGetUserHistoryRequest
 */
export interface UsersApiGetUserHistoryRequest {
    /**
     * Gong\&#39;s unique numeric identifier for the user (up to 20 digits).
     * @type {string}
     * @memberof UsersApiGetUserHistory
     */
    readonly id: string
}

/**
 * Request parameters for listMultipleUsers operation in UsersApi.
 * @export
 * @interface UsersApiListMultipleUsersRequest
 */
export interface UsersApiListMultipleUsersRequest {
    /**
     * 
     * @type {PublicApiBaseRequestV2MultipleUsersRequestWithCreationDates}
     * @memberof UsersApiListMultipleUsers
     */
    readonly publicApiBaseRequestV2MultipleUsersRequestWithCreationDates: PublicApiBaseRequestV2MultipleUsersRequestWithCreationDates
}

/**
 * Request parameters for listUsers operation in UsersApi.
 * @export
 * @interface UsersApiListUsersRequest
 */
export interface UsersApiListUsersRequest {
    /**
     * When paging is needed, provide the value supplied by the previous API call to bring the following page of records.
     * @type {string}
     * @memberof UsersApiListUsers
     */
    readonly cursor?: string

    /**
     * Avatars are synthetic users representing Gong employees (CSMs and support providers) when they access your instance. References to avatars\&#39; IDs may be found in the outputs of other API endpoints. This parameter is optional, if not provided avatars will not be included in the results.
     * @type {boolean}
     * @memberof UsersApiListUsers
     */
    readonly includeAvatars?: boolean
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI implements UsersApiInterface {
    /**
     * Retrieve a specific user.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary Retrieve user (/v2/users/{id})
     * @param {UsersApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUser(requestParameters: UsersApiGetUserRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUser(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a specific user\'s settings history.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary Retrieve user settings history (/v2/users/{id}/settings-history)
     * @param {UsersApiGetUserHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserHistory(requestParameters: UsersApiGetUserHistoryRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUserHistory(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List multiple Users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary List users by filter (/v2/users/extensive)
     * @param {UsersApiListMultipleUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public listMultipleUsers(requestParameters: UsersApiListMultipleUsersRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).listMultipleUsers(requestParameters.publicApiBaseRequestV2MultipleUsersRequestWithCreationDates, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all of the company\'s users.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary List all users (/v2/users)
     * @param {UsersApiListUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public listUsers(requestParameters: UsersApiListUsersRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).listUsers(requestParameters.cursor, requestParameters.includeAvatars, options).then((request) => request(this.axios, this.basePath));
    }
}

