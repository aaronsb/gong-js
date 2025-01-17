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
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setBasicAuthToObject, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI, operationServerMap } from '../base';
/**
 * CoachingApi - axios parameter creator
 * @export
 */
export const CoachingApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * List all of the coaching metrics of a manager.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:coaching:read\'.
         * @summary List all coaching metrics (/v2/coaching)
         * @param {number} workspaceId
         * @param {number} managerId
         * @param {string} from Association time filter - only the associations made after that time will be listed. The time is in the ISO-8601 format (e.g., \&#39;2018-02-18T02:30:00-07:00\&#39; or \&#39;2018-02-18T08:00:00Z\&#39;, where Z stands for UTC); if not specified all association events will be listed.
         * @param {string} to Association time filter - only the associations made after that time will be listed. The time is in the ISO-8601 format (e.g., \&#39;2018-02-18T02:30:00-07:00\&#39; or \&#39;2018-02-18T08:00:00Z\&#39;, where Z stands for UTC); if not specified all association events will be listed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUsers1: async (workspaceId, managerId, from, to, options = {}) => {
            // verify required parameter 'workspaceId' is not null or undefined
            assertParamExists('listUsers1', 'workspaceId', workspaceId);
            // verify required parameter 'managerId' is not null or undefined
            assertParamExists('listUsers1', 'managerId', managerId);
            // verify required parameter 'from' is not null or undefined
            assertParamExists('listUsers1', 'from', from);
            // verify required parameter 'to' is not null or undefined
            assertParamExists('listUsers1', 'to', to);
            const localVarPath = `/v2/coaching`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration);
            if (workspaceId !== undefined) {
                localVarQueryParameter['workspace-id'] = workspaceId;
            }
            if (managerId !== undefined) {
                localVarQueryParameter['manager-id'] = managerId;
            }
            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * CoachingApi - functional programming interface
 * @export
 */
export const CoachingApiFp = function (configuration) {
    const localVarAxiosParamCreator = CoachingApiAxiosParamCreator(configuration);
    return {
        /**
         * List all of the coaching metrics of a manager.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:coaching:read\'.
         * @summary List all coaching metrics (/v2/coaching)
         * @param {number} workspaceId
         * @param {number} managerId
         * @param {string} from Association time filter - only the associations made after that time will be listed. The time is in the ISO-8601 format (e.g., \&#39;2018-02-18T02:30:00-07:00\&#39; or \&#39;2018-02-18T08:00:00Z\&#39;, where Z stands for UTC); if not specified all association events will be listed.
         * @param {string} to Association time filter - only the associations made after that time will be listed. The time is in the ISO-8601 format (e.g., \&#39;2018-02-18T02:30:00-07:00\&#39; or \&#39;2018-02-18T08:00:00Z\&#39;, where Z stands for UTC); if not specified all association events will be listed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUsers1(workspaceId, managerId, from, to, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listUsers1(workspaceId, managerId, from, to, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CoachingApi.listUsers1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * CoachingApi - factory interface
 * @export
 */
export const CoachingApiFactory = function (configuration, basePath, axios) {
    const localVarFp = CoachingApiFp(configuration);
    return {
        /**
         * List all of the coaching metrics of a manager.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:coaching:read\'.
         * @summary List all coaching metrics (/v2/coaching)
         * @param {CoachingApiListUsers1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUsers1(requestParameters, options) {
            return localVarFp.listUsers1(requestParameters.workspaceId, requestParameters.managerId, requestParameters.from, requestParameters.to, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * CoachingApi - object-oriented interface
 * @export
 * @class CoachingApi
 * @extends {BaseAPI}
 */
export class CoachingApi extends BaseAPI {
    /**
     * List all of the coaching metrics of a manager.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:coaching:read\'.
     * @summary List all coaching metrics (/v2/coaching)
     * @param {CoachingApiListUsers1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoachingApi
     */
    listUsers1(requestParameters, options) {
        return CoachingApiFp(this.configuration).listUsers1(requestParameters.workspaceId, requestParameters.managerId, requestParameters.from, requestParameters.to, options).then((request) => request(this.axios, this.basePath));
    }
}
