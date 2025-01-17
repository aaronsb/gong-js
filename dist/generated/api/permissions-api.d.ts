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
import { type RequestArgs, BaseAPI } from '../base';
import type { BaseResponse } from '../models';
import type { CallsAccessDetailsResponse } from '../models';
import type { CallsUsersAccessAddDto } from '../models';
import type { CallsUsersAccessDeleteDto } from '../models';
import type { FilterRequestCallsAccessGetDto } from '../models';
import type { PermissionProfileDTO } from '../models';
import type { PermissionProfileResponse } from '../models';
import type { PermissionProfileUsersResponse } from '../models';
import type { PermissionProfilesResponse } from '../models';
/**
 * PermissionsApi - axios parameter creator
 * @export
 */
export declare const PermissionsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Give individual users access to calls.  If a user already has access (perhaps the call was shared with them, or they have access through their permission profiles) the request will have no effect.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Give individual users access to calls (/v2/calls/users-access)
     * @param {CallsUsersAccessAddDto} callsUsersAccessAddDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addUsersAccessToCalls: (callsUsersAccessAddDto: CallsUsersAccessAddDto, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Create a permission profile in a given workspace.
     * @summary Create permission profile (/v2/permission-profile)
     * @param {string} workspaceId Workspace identifier.  You can retrieve the workspace using the \&quot;workspaces\&quot; (under \&quot;Settings\&quot;) API.
     * @param {PermissionProfileDTO} permissionProfileDTO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPermissionProfile: (workspaceId: string, permissionProfileDTO: PermissionProfileDTO, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Remove individual user access from calls. The request can only remove access previously given by the /v2/calls/users-access API.  If a given user does not have access to the call, they will be unaffected.  If a given user does have access to the call, but not through the pubic API (for example if the call was shared with the user), the user\'s access will remain unchanged.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Remove specific individual users access from calls (/v2/calls/users-access)
     * @param {CallsUsersAccessDeleteDto} callsUsersAccessDeleteDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUsersAccessToCalls: (callsUsersAccessDeleteDto: CallsUsersAccessDeleteDto, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a permission profile.
     * @summary Permission profile for a given profile Id (/v2/permission-profile)
     * @param {string} profileId Permission profile identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPermissionProfile: (profileId: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a list of users who have received individual access to calls through the API.  This endpoint doesn\'t cover user that have access for other reasons (such as sharing recipients, or access through permission profiles).  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:read\'.
     * @summary Retrieve users that have specific individual access to calls (/v2/calls/users-access)
     * @param {FilterRequestCallsAccessGetDto} filterRequestCallsAccessGetDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersAccessToCalls: (filterRequestCallsAccessGetDto: FilterRequestCallsAccessGetDto, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a list of all permission profiles.  The listing is in the alphabetical order of the profile names.
     * @summary List all company permission profiles for a given workspace (/v2/all-permission-profiles)
     * @param {string} workspaceId Workspace identifier, the API will return only the profiles belonging to this workspace.  You can retrieve the workspace using the \&quot;workspaces\&quot; (under \&quot;Settings\&quot;) API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPermissionProfile: (workspaceId: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a list of all users whose access is controlled by the given permission profile.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary List all users attached to a given permission profile (/v2/permission-profile/users)
     * @param {string} profileId Permission profile identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPermissionProfileUsers: (profileId: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Update a permission profile.
     * @summary Update permission profile (/v2/permission-profile)
     * @param {string} profileId Permission profile identifier.
     * @param {PermissionProfileDTO} permissionProfileDTO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePermissionProfile: (profileId: string, permissionProfileDTO: PermissionProfileDTO, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * PermissionsApi - functional programming interface
 * @export
 */
export declare const PermissionsApiFp: (configuration?: Configuration) => {
    /**
     * Give individual users access to calls.  If a user already has access (perhaps the call was shared with them, or they have access through their permission profiles) the request will have no effect.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Give individual users access to calls (/v2/calls/users-access)
     * @param {CallsUsersAccessAddDto} callsUsersAccessAddDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addUsersAccessToCalls(callsUsersAccessAddDto: CallsUsersAccessAddDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseResponse>>;
    /**
     * Create a permission profile in a given workspace.
     * @summary Create permission profile (/v2/permission-profile)
     * @param {string} workspaceId Workspace identifier.  You can retrieve the workspace using the \&quot;workspaces\&quot; (under \&quot;Settings\&quot;) API.
     * @param {PermissionProfileDTO} permissionProfileDTO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPermissionProfile(workspaceId: string, permissionProfileDTO: PermissionProfileDTO, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermissionProfileResponse>>;
    /**
     * Remove individual user access from calls. The request can only remove access previously given by the /v2/calls/users-access API.  If a given user does not have access to the call, they will be unaffected.  If a given user does have access to the call, but not through the pubic API (for example if the call was shared with the user), the user\'s access will remain unchanged.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Remove specific individual users access from calls (/v2/calls/users-access)
     * @param {CallsUsersAccessDeleteDto} callsUsersAccessDeleteDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUsersAccessToCalls(callsUsersAccessDeleteDto: CallsUsersAccessDeleteDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseResponse>>;
    /**
     * Returns a permission profile.
     * @summary Permission profile for a given profile Id (/v2/permission-profile)
     * @param {string} profileId Permission profile identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPermissionProfile(profileId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermissionProfileResponse>>;
    /**
     * Returns a list of users who have received individual access to calls through the API.  This endpoint doesn\'t cover user that have access for other reasons (such as sharing recipients, or access through permission profiles).  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:read\'.
     * @summary Retrieve users that have specific individual access to calls (/v2/calls/users-access)
     * @param {FilterRequestCallsAccessGetDto} filterRequestCallsAccessGetDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersAccessToCalls(filterRequestCallsAccessGetDto: FilterRequestCallsAccessGetDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CallsAccessDetailsResponse>>;
    /**
     * Returns a list of all permission profiles.  The listing is in the alphabetical order of the profile names.
     * @summary List all company permission profiles for a given workspace (/v2/all-permission-profiles)
     * @param {string} workspaceId Workspace identifier, the API will return only the profiles belonging to this workspace.  You can retrieve the workspace using the \&quot;workspaces\&quot; (under \&quot;Settings\&quot;) API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPermissionProfile(workspaceId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermissionProfilesResponse>>;
    /**
     * Returns a list of all users whose access is controlled by the given permission profile.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary List all users attached to a given permission profile (/v2/permission-profile/users)
     * @param {string} profileId Permission profile identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPermissionProfileUsers(profileId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermissionProfileUsersResponse>>;
    /**
     * Update a permission profile.
     * @summary Update permission profile (/v2/permission-profile)
     * @param {string} profileId Permission profile identifier.
     * @param {PermissionProfileDTO} permissionProfileDTO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePermissionProfile(profileId: string, permissionProfileDTO: PermissionProfileDTO, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermissionProfileResponse>>;
};
/**
 * PermissionsApi - factory interface
 * @export
 */
export declare const PermissionsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Give individual users access to calls.  If a user already has access (perhaps the call was shared with them, or they have access through their permission profiles) the request will have no effect.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Give individual users access to calls (/v2/calls/users-access)
     * @param {PermissionsApiAddUsersAccessToCallsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addUsersAccessToCalls(requestParameters: PermissionsApiAddUsersAccessToCallsRequest, options?: RawAxiosRequestConfig): AxiosPromise<BaseResponse>;
    /**
     * Create a permission profile in a given workspace.
     * @summary Create permission profile (/v2/permission-profile)
     * @param {PermissionsApiCreatePermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPermissionProfile(requestParameters: PermissionsApiCreatePermissionProfileRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfileResponse>;
    /**
     * Remove individual user access from calls. The request can only remove access previously given by the /v2/calls/users-access API.  If a given user does not have access to the call, they will be unaffected.  If a given user does have access to the call, but not through the pubic API (for example if the call was shared with the user), the user\'s access will remain unchanged.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Remove specific individual users access from calls (/v2/calls/users-access)
     * @param {PermissionsApiDeleteUsersAccessToCallsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUsersAccessToCalls(requestParameters: PermissionsApiDeleteUsersAccessToCallsRequest, options?: RawAxiosRequestConfig): AxiosPromise<BaseResponse>;
    /**
     * Returns a permission profile.
     * @summary Permission profile for a given profile Id (/v2/permission-profile)
     * @param {PermissionsApiGetPermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPermissionProfile(requestParameters: PermissionsApiGetPermissionProfileRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfileResponse>;
    /**
     * Returns a list of users who have received individual access to calls through the API.  This endpoint doesn\'t cover user that have access for other reasons (such as sharing recipients, or access through permission profiles).  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:read\'.
     * @summary Retrieve users that have specific individual access to calls (/v2/calls/users-access)
     * @param {PermissionsApiGetUsersAccessToCallsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUsersAccessToCalls(requestParameters: PermissionsApiGetUsersAccessToCallsRequest, options?: RawAxiosRequestConfig): AxiosPromise<CallsAccessDetailsResponse>;
    /**
     * Returns a list of all permission profiles.  The listing is in the alphabetical order of the profile names.
     * @summary List all company permission profiles for a given workspace (/v2/all-permission-profiles)
     * @param {PermissionsApiListPermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPermissionProfile(requestParameters: PermissionsApiListPermissionProfileRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfilesResponse>;
    /**
     * Returns a list of all users whose access is controlled by the given permission profile.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary List all users attached to a given permission profile (/v2/permission-profile/users)
     * @param {PermissionsApiListPermissionProfileUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPermissionProfileUsers(requestParameters: PermissionsApiListPermissionProfileUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfileUsersResponse>;
    /**
     * Update a permission profile.
     * @summary Update permission profile (/v2/permission-profile)
     * @param {PermissionsApiUpdatePermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePermissionProfile(requestParameters: PermissionsApiUpdatePermissionProfileRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfileResponse>;
};
/**
 * PermissionsApi - interface
 * @export
 * @interface PermissionsApi
 */
export interface PermissionsApiInterface {
    /**
     * Give individual users access to calls.  If a user already has access (perhaps the call was shared with them, or they have access through their permission profiles) the request will have no effect.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Give individual users access to calls (/v2/calls/users-access)
     * @param {PermissionsApiAddUsersAccessToCallsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApiInterface
     */
    addUsersAccessToCalls(requestParameters: PermissionsApiAddUsersAccessToCallsRequest, options?: RawAxiosRequestConfig): AxiosPromise<BaseResponse>;
    /**
     * Create a permission profile in a given workspace.
     * @summary Create permission profile (/v2/permission-profile)
     * @param {PermissionsApiCreatePermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApiInterface
     */
    createPermissionProfile(requestParameters: PermissionsApiCreatePermissionProfileRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfileResponse>;
    /**
     * Remove individual user access from calls. The request can only remove access previously given by the /v2/calls/users-access API.  If a given user does not have access to the call, they will be unaffected.  If a given user does have access to the call, but not through the pubic API (for example if the call was shared with the user), the user\'s access will remain unchanged.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Remove specific individual users access from calls (/v2/calls/users-access)
     * @param {PermissionsApiDeleteUsersAccessToCallsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApiInterface
     */
    deleteUsersAccessToCalls(requestParameters: PermissionsApiDeleteUsersAccessToCallsRequest, options?: RawAxiosRequestConfig): AxiosPromise<BaseResponse>;
    /**
     * Returns a permission profile.
     * @summary Permission profile for a given profile Id (/v2/permission-profile)
     * @param {PermissionsApiGetPermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApiInterface
     */
    getPermissionProfile(requestParameters: PermissionsApiGetPermissionProfileRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfileResponse>;
    /**
     * Returns a list of users who have received individual access to calls through the API.  This endpoint doesn\'t cover user that have access for other reasons (such as sharing recipients, or access through permission profiles).  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:read\'.
     * @summary Retrieve users that have specific individual access to calls (/v2/calls/users-access)
     * @param {PermissionsApiGetUsersAccessToCallsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApiInterface
     */
    getUsersAccessToCalls(requestParameters: PermissionsApiGetUsersAccessToCallsRequest, options?: RawAxiosRequestConfig): AxiosPromise<CallsAccessDetailsResponse>;
    /**
     * Returns a list of all permission profiles.  The listing is in the alphabetical order of the profile names.
     * @summary List all company permission profiles for a given workspace (/v2/all-permission-profiles)
     * @param {PermissionsApiListPermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApiInterface
     */
    listPermissionProfile(requestParameters: PermissionsApiListPermissionProfileRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfilesResponse>;
    /**
     * Returns a list of all users whose access is controlled by the given permission profile.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary List all users attached to a given permission profile (/v2/permission-profile/users)
     * @param {PermissionsApiListPermissionProfileUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApiInterface
     */
    listPermissionProfileUsers(requestParameters: PermissionsApiListPermissionProfileUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfileUsersResponse>;
    /**
     * Update a permission profile.
     * @summary Update permission profile (/v2/permission-profile)
     * @param {PermissionsApiUpdatePermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApiInterface
     */
    updatePermissionProfile(requestParameters: PermissionsApiUpdatePermissionProfileRequest, options?: RawAxiosRequestConfig): AxiosPromise<PermissionProfileResponse>;
}
/**
 * Request parameters for addUsersAccessToCalls operation in PermissionsApi.
 * @export
 * @interface PermissionsApiAddUsersAccessToCallsRequest
 */
export interface PermissionsApiAddUsersAccessToCallsRequest {
    /**
     *
     * @type {CallsUsersAccessAddDto}
     * @memberof PermissionsApiAddUsersAccessToCalls
     */
    readonly callsUsersAccessAddDto: CallsUsersAccessAddDto;
}
/**
 * Request parameters for createPermissionProfile operation in PermissionsApi.
 * @export
 * @interface PermissionsApiCreatePermissionProfileRequest
 */
export interface PermissionsApiCreatePermissionProfileRequest {
    /**
     * Workspace identifier.  You can retrieve the workspace using the \&quot;workspaces\&quot; (under \&quot;Settings\&quot;) API.
     * @type {string}
     * @memberof PermissionsApiCreatePermissionProfile
     */
    readonly workspaceId: string;
    /**
     *
     * @type {PermissionProfileDTO}
     * @memberof PermissionsApiCreatePermissionProfile
     */
    readonly permissionProfileDTO: PermissionProfileDTO;
}
/**
 * Request parameters for deleteUsersAccessToCalls operation in PermissionsApi.
 * @export
 * @interface PermissionsApiDeleteUsersAccessToCallsRequest
 */
export interface PermissionsApiDeleteUsersAccessToCallsRequest {
    /**
     *
     * @type {CallsUsersAccessDeleteDto}
     * @memberof PermissionsApiDeleteUsersAccessToCalls
     */
    readonly callsUsersAccessDeleteDto: CallsUsersAccessDeleteDto;
}
/**
 * Request parameters for getPermissionProfile operation in PermissionsApi.
 * @export
 * @interface PermissionsApiGetPermissionProfileRequest
 */
export interface PermissionsApiGetPermissionProfileRequest {
    /**
     * Permission profile identifier.
     * @type {string}
     * @memberof PermissionsApiGetPermissionProfile
     */
    readonly profileId: string;
}
/**
 * Request parameters for getUsersAccessToCalls operation in PermissionsApi.
 * @export
 * @interface PermissionsApiGetUsersAccessToCallsRequest
 */
export interface PermissionsApiGetUsersAccessToCallsRequest {
    /**
     *
     * @type {FilterRequestCallsAccessGetDto}
     * @memberof PermissionsApiGetUsersAccessToCalls
     */
    readonly filterRequestCallsAccessGetDto: FilterRequestCallsAccessGetDto;
}
/**
 * Request parameters for listPermissionProfile operation in PermissionsApi.
 * @export
 * @interface PermissionsApiListPermissionProfileRequest
 */
export interface PermissionsApiListPermissionProfileRequest {
    /**
     * Workspace identifier, the API will return only the profiles belonging to this workspace.  You can retrieve the workspace using the \&quot;workspaces\&quot; (under \&quot;Settings\&quot;) API.
     * @type {string}
     * @memberof PermissionsApiListPermissionProfile
     */
    readonly workspaceId: string;
}
/**
 * Request parameters for listPermissionProfileUsers operation in PermissionsApi.
 * @export
 * @interface PermissionsApiListPermissionProfileUsersRequest
 */
export interface PermissionsApiListPermissionProfileUsersRequest {
    /**
     * Permission profile identifier.
     * @type {string}
     * @memberof PermissionsApiListPermissionProfileUsers
     */
    readonly profileId: string;
}
/**
 * Request parameters for updatePermissionProfile operation in PermissionsApi.
 * @export
 * @interface PermissionsApiUpdatePermissionProfileRequest
 */
export interface PermissionsApiUpdatePermissionProfileRequest {
    /**
     * Permission profile identifier.
     * @type {string}
     * @memberof PermissionsApiUpdatePermissionProfile
     */
    readonly profileId: string;
    /**
     *
     * @type {PermissionProfileDTO}
     * @memberof PermissionsApiUpdatePermissionProfile
     */
    readonly permissionProfileDTO: PermissionProfileDTO;
}
/**
 * PermissionsApi - object-oriented interface
 * @export
 * @class PermissionsApi
 * @extends {BaseAPI}
 */
export declare class PermissionsApi extends BaseAPI implements PermissionsApiInterface {
    /**
     * Give individual users access to calls.  If a user already has access (perhaps the call was shared with them, or they have access through their permission profiles) the request will have no effect.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Give individual users access to calls (/v2/calls/users-access)
     * @param {PermissionsApiAddUsersAccessToCallsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    addUsersAccessToCalls(requestParameters: PermissionsApiAddUsersAccessToCallsRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BaseResponse, any>>;
    /**
     * Create a permission profile in a given workspace.
     * @summary Create permission profile (/v2/permission-profile)
     * @param {PermissionsApiCreatePermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    createPermissionProfile(requestParameters: PermissionsApiCreatePermissionProfileRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PermissionProfileResponse, any>>;
    /**
     * Remove individual user access from calls. The request can only remove access previously given by the /v2/calls/users-access API.  If a given user does not have access to the call, they will be unaffected.  If a given user does have access to the call, but not through the pubic API (for example if the call was shared with the user), the user\'s access will remain unchanged.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:write\'.
     * @summary Remove specific individual users access from calls (/v2/calls/users-access)
     * @param {PermissionsApiDeleteUsersAccessToCallsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    deleteUsersAccessToCalls(requestParameters: PermissionsApiDeleteUsersAccessToCallsRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<BaseResponse, any>>;
    /**
     * Returns a permission profile.
     * @summary Permission profile for a given profile Id (/v2/permission-profile)
     * @param {PermissionsApiGetPermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    getPermissionProfile(requestParameters: PermissionsApiGetPermissionProfileRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PermissionProfileResponse, any>>;
    /**
     * Returns a list of users who have received individual access to calls through the API.  This endpoint doesn\'t cover user that have access for other reasons (such as sharing recipients, or access through permission profiles).  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:call-user-access:read\'.
     * @summary Retrieve users that have specific individual access to calls (/v2/calls/users-access)
     * @param {PermissionsApiGetUsersAccessToCallsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    getUsersAccessToCalls(requestParameters: PermissionsApiGetUsersAccessToCallsRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CallsAccessDetailsResponse, any>>;
    /**
     * Returns a list of all permission profiles.  The listing is in the alphabetical order of the profile names.
     * @summary List all company permission profiles for a given workspace (/v2/all-permission-profiles)
     * @param {PermissionsApiListPermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    listPermissionProfile(requestParameters: PermissionsApiListPermissionProfileRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PermissionProfilesResponse, any>>;
    /**
     * Returns a list of all users whose access is controlled by the given permission profile.  When accessed through a Bearer token authorization method, this endpoint requires the scope \'api:users:read\'.
     * @summary List all users attached to a given permission profile (/v2/permission-profile/users)
     * @param {PermissionsApiListPermissionProfileUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    listPermissionProfileUsers(requestParameters: PermissionsApiListPermissionProfileUsersRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PermissionProfileUsersResponse, any>>;
    /**
     * Update a permission profile.
     * @summary Update permission profile (/v2/permission-profile)
     * @param {PermissionsApiUpdatePermissionProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    updatePermissionProfile(requestParameters: PermissionsApiUpdatePermissionProfileRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PermissionProfileResponse, any>>;
}
