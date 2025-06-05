/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LabelValueRO {
  /**
   * Value
   * @example "RUS"
   */
  value: string;
  /**
   * Label
   * @example "Russian Federation"
   */
  label: string;
}

export interface MetadataRO {
  /**
   * Regions
   * @example "e0cb8caaa53a5b3dedbadb63"
   */
  regions: LabelValueRO[];
  /**
   * Genres
   * @example "3abba6ba0dc81ed1d4db9a8b"
   */
  genres: LabelValueRO[];
  /**
   * Admin roles
   * @example "2fa3e4d95aea6b3e91ffc686"
   */
  adminRoles: LabelValueRO[];
  /**
   * Album types
   * @example "28dccdb8fcdb2e91fdf1e605"
   */
  albumTypes: LabelValueRO[];
}

export interface UploadFileDTO {
  /**
   * File
   * @format binary
   */
  file: File;
}

export interface TmpFileRO {
  /** Id */
  id: string;
  /**
   * Name
   * @example "apud.mp3"
   */
  name: string;
  /**
   * Original name
   * @example "scholarship_uncork.mp3"
   */
  originalName: string;
  /**
   * URL
   * @example "/tmp/joyfully_hmph_snuggle.mp3"
   */
  fullPath: string;
  /**
   * URL
   * @example "http://localhost:3000/yahoo.mp3"
   */
  path: string;
  /**
   * Size
   * @example 10000
   */
  size: number;
  /**
   * Type
   * @example "video/mp2t"
   */
  type: string;
  /**
   * Date
   * @format date-time
   * @example "2024-10-08T11:02:23.460Z"
   */
  uploadedAt: string;
  /**
   * Expires Date
   * @format date-time
   * @example "2024-07-02T01:23:53.291Z"
   */
  expiresAt: string;
}

export interface AdminRO {
  /**
   * Id
   * @example "4cbe78a21d1af6fcc3c574f9"
   */
  id: string;
  /**
   * Username
   * @example "Brycen40"
   */
  username: string;
  /**
   * Name
   * @example "Ryley"
   */
  name: string;
  /** Role */
  role: LabelValueRO;
  /** Block */
  isBlocked: boolean;
  /**
   * Reg. date
   * @format date-time
   * @example "2024-12-08T19:51:35.514Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2025-02-18T16:55:53.773Z"
   */
  updatedAt: string;
}

export interface UpdateAdminDTO {
  /**
   * Birth Name
   * @example "Perry"
   */
  name?: string;
  /**
   * Role
   * @example "GST"
   */
  role?: string;
  /**
   * BLock
   * @example true
   */
  isBlocked?: boolean;
}

export interface UpdateAdminUsernameDTO {
  /**
   * Username
   * @example "Jackeline_Zieme"
   */
  username: string;
}

export interface AdminRefreshedPasswordRO {
  /** Password */
  password: string;
}

export interface AdminsRO {
  /** Items */
  items: AdminRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface UserRO {
  /**
   * Id
   * @example "c2e7aa98c3d9edc84d28f5dc"
   */
  id: string;
  /**
   * Username
   * @example "Vern66"
   */
  username: string;
  /**
   * Birth name
   * @example "Burdette"
   */
  name: string;
  /**
   * Email
   * @example "Maymie_Beer@yahoo.com"
   */
  email: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "1996-11-12T08:29:53.366Z"
   */
  birthDate: string;
  /**
   * Region
   * @example {"value":"RUS","label":"Russian Federation"}
   */
  region: LabelValueRO;
  /**
   * Favorite genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Avatar URL
   * @example "http://localhost:3000/or_notwithstanding.webp"
   */
  avatar: string | null;
  /**
   * Accent color
   * @example "#f537f5"
   */
  color: string | null;
  /**
   * Block
   * @example false
   */
  isBlocked: boolean;
  /**
   * Verification
   * @example false
   */
  isVerified: boolean;
  /**
   * Public
   * @example false
   */
  isPublic: boolean;
  /**
   * Premium
   * @example false
   */
  isPremium: boolean;
  /**
   * Reg. date
   * @format date-time
   * @example "2024-12-25T12:00:44.089Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2024-08-10T02:24:10.577Z"
   */
  updatedAt: string;
}

export interface UpdateUserDTO {
  /**
   * Birth name
   * @example "Harvey"
   */
  name?: string;
  /**
   * Birth date
   * @format date-time
   * @example "2005-12-20T05:58:16.407Z"
   */
  birthDate?: string;
  /**
   * Region
   * @example "RUS"
   */
  region?: string;
  /**
   * Favorite genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Premium
   * @example false
   */
  isPremium?: boolean;
  /**
   * Block
   * @example false
   */
  isBlocked?: boolean;
  /**
   * Public
   * @example false
   */
  isPublic?: boolean;
}

export interface UpdateUserUsernameDTO {
  /**
   * Username
   * @example "Chauncey_Brakus49"
   */
  username: string;
}

export interface UpdateUserEmailDTO {
  /**
   * Email
   * @example "Danial_Kling@gmail.com"
   */
  email: string;
}

export interface UpdateUserAvatarDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/270/2356?lock=1470461183643784"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#e9288f"
   */
  color?: string | null;
}

export interface ArtistRO {
  /**
   * Id
   * @example "5f838f743daaad385d6f7f5a"
   */
  id: string;
  /**
   * Name
   * @example "Bud"
   */
  name: string;
  /**
   * Birth name
   * @example "Lindsey Stehr"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-01-13T22:01:39.721Z"
   */
  birthDate: string | null;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "activist, person"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "http://localhost:3000/despite_excluding_dulcimer.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "http://localhost:3000/though_incidentally_weary.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#c824a3"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#5e1ee7"
   */
  secondaryColor: string | null;
  /**
   * Activation
   * @example true
   */
  isActive: boolean;
  /**
   * Public
   * @example true
   */
  isPublic: boolean;
  /**
   * Created date
   * @format date-time
   * @example "2025-06-04T03:33:41.911Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-04-18T01:41:48.649Z"
   */
  updatedAt: string;
}

export interface UpdateArtistDTO {
  /**
   * Name
   * @example "Llewellyn"
   */
  name?: string;
  /**
   * Birth name
   * @example "Rodney Schinner"
   */
  birthName?: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2024-12-18T10:56:57.054Z"
   */
  birthDate?: string | null;
  /**
   * Favorite genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Biography
   * @example "parent, photographer, film lover 😿"
   */
  biography?: string;
  /**
   * Active
   * @example true
   */
  isActive?: boolean;
  /**
   * Public
   * @example true
   */
  isPublic?: boolean;
}

export interface UpdateArtistImageDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/2378/3408?lock=1292305408891902"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#a1c247"
   */
  color?: string | null;
}

export interface AlbumRO {
  /**
   * Id
   * @example "bc91aeeee9d8102ebb5ac2ac"
   */
  id: string;
  /**
   * Name
   * @example "Night Fever"
   */
  name: string;
  /** Artists */
  artists: ArtistRO[];
  /**
   * Type
   * @example {"value":"ALBUM","label":"Album"}
   */
  type: LabelValueRO;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/2430/637?lock=4571249548565343"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#eebeb7"
   */
  color: string | null;
  /**
   * Description
   * @example "Anser uberrime comis depraedor unus tactus ago adicio. Decimus natus peccatus solvo quam. Unde doloribus amiculum cursus cernuus quae. Consectetur succurro delectatio. Amitto thermae caterva conspergo amitto. Contabesco veniam suffragium territo."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-05-04T05:59:43.847Z"
   */
  releaseAt: string | null;
  /**
   * Active
   * @example true
   */
  isActive: boolean;
  /**
   * Public
   * @example true
   */
  isPublic: boolean;
  /**
   * Created date
   * @format date-time
   * @example "2024-10-01T18:45:01.121Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-05-31T10:11:57.740Z"
   */
  updatedAt: string;
}

export interface AlbumsRO {
  /** Items */
  items: AlbumRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface TrackRO {
  /**
   * Id
   * @example "fc79d73feaf83cd0ee36bb8e"
   */
  id: string;
  /**
   * Name
   * @example "Whispering"
   */
  name: string;
  /**
   * Album id
   * @example "cbefbe0be5b7e8cea3e1db4c"
   */
  albumId: string;
  /** Album */
  album: AlbumRO;
  /**
   * Ids of artist
   * @example ["e0d7f55aeb6ef4f3d8cc39a9"]
   */
  artistIds: string[];
  /** Primary artist */
  artists: ArtistRO[];
  /**
   * Ids of featured artist
   * @example ["d257ad326d3d32a0ff4e6124"]
   */
  featArtistIds: string[];
  /** Featured artist */
  featArtists: ArtistRO[];
  /**
   * Url
   * @example "https://self-reliant-restaurant.net"
   */
  file: string | null;
  /**
   * Duration
   * @example 240
   */
  duration: number | null;
  /**
   * Explicit
   * @example true
   */
  isExplicit: boolean;
  /**
   * Activation
   * @example true
   */
  isActive: boolean;
  /**
   * Public
   * @example true
   */
  isPublic: boolean;
  /**
   * Created date
   * @format date-time
   * @example "2024-10-30T06:00:13.971Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-08-13T23:45:12.950Z"
   */
  updatedAt: string;
}

export interface TracksRO {
  /** Items */
  items: TrackRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface CreateAlbumDTO {
  /**
   * Artist id
   * @example "3afc0d63e2abeeccf25d6c48"
   */
  artistId: string;
}

export interface UpdateAlbumDTO {
  /**
   * Name
   * @example "Just My Imagination (Running Away With Me)"
   */
  name?: string;
  /**
   * Type
   * @example "ALBUM"
   */
  type?: string;
  /**
   * Favorite genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Description
   * @example "Vicissitudo vicissitudo caput argumentum. Cruciamentum accendo compono copiose suspendo dolores demum ver culpa. Temporibus vilicus consequuntur volaticus accusator subiungo. Dolore ipsum bestia qui dolor."
   */
  description?: string;
  /**
   * Release date
   * @format date-time
   * @example "2024-07-04T19:59:05.051Z"
   */
  releaseAt?: string | null;
  /**
   * Active
   * @example true
   */
  isActive?: boolean;
  /**
   * Public
   * @example true
   */
  isPublic?: boolean;
}

export interface UpdateAlbumArtistsDTO {
  /**
   * Artist ids
   * @example ["41e52dcf185b5957fb6db76e"]
   */
  artists: string[];
}

export interface UpdateAlbumCoverDTO {
  /**
   * Id of the uploaded file
   * @example "https://picsum.photos/seed/F00TcSPx/23/3551"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#2cbaca"
   */
  color?: string | null;
}

export interface CreateTrackDTO {
  /**
   * Id of the album
   * @example "4674c90b9de1ab50a6eaebaa"
   */
  albumId: string;
}

export interface UpdateTrackDTO {
  /**
   * Name
   * @example "Sledgehammer"
   */
  name?: string;
  /**
   * Explicit
   * @example true
   */
  isExplicit?: boolean;
  /**
   * Active
   * @example true
   */
  isActive?: boolean;
  /**
   * Public
   * @example true
   */
  isPublic?: boolean;
}

export interface UpdateTrackFeatArtistsDTO {
  /**
   * Artist ids
   * @example ["6f6e9f042af9edbe2a3fbef8"]
   */
  artists: string[];
}

export interface UpdateTrackFileDTO {
  /** Uploaded file id */
  fileId: string;
  /**
   * Duration
   * @example 240
   */
  duration: number;
}

export interface CreatePlaylistDTO {
  /**
   * User id
   * @example "06595b8a98b7ba5eba816ed1"
   */
  ownerId: string;
}

export interface PlaylistRO {
  /**
   * Id
   * @example "2a9a9fc48a26d2feee97c0ae"
   */
  id: string;
  /** Owner */
  owner: UserRO;
  /**
   * Name
   * @example "West End Blues"
   */
  name: string;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/995/1655?lock=5729905454949531"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#87a6fe"
   */
  color: string | null;
  /**
   * Description
   * @example "A brevis comparo comptus vespillo arguo summa. Asperiores vomer ducimus currus adduco omnis. Casus tabula vaco veritas theatrum virga est."
   */
  description: string;
  /**
   * Public
   * @example false
   */
  isPublic: boolean;
  /**
   * Created date
   * @format date-time
   * @example "2025-02-02T04:13:06.418Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-04-27T05:15:30.452Z"
   */
  updatedAt: string;
}

export interface UpdatePlaylistDTO {
  /**
   * Name
   * @example "Green River"
   */
  name?: string;
  /**
   * Genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Description
   * @example "Thymum varius ipsum coaegresco. Decretum degero alter subnecto cras tergum sed cohaero. Patrocinor cur viriliter conspergo undique convoco demens cornu somniculosus aut. Alias credo tyrannus stillicidium pectus accusator defluo abstergo atqui. Ut numquam crur laudantium decimus reprehenderit volaticus pariatur."
   */
  description?: string;
  /**
   * Public
   * @example true
   */
  isPublic?: boolean;
}

export interface UpdatePlaylistCoverDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/2239/152?lock=468330504922902"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#38c7f8"
   */
  color?: string | null;
}

export interface AddTrackInPlaylistDTO {
  /**
   * Track id
   * @example "9bfaa7ecd3f2b8eceeb8e323"
   */
  trackId: string;
}

export interface PlaylistTrackRO {
  /** Track */
  track: TrackRO | null;
  /**
   * Added date
   * @format date-time
   * @example "2025-05-07T04:15:31.209Z"
   */
  addedAt: string;
}

export interface PlaylistTracksRO {
  /** Items */
  items: PlaylistTrackRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      return data;
    });
  };
}

/**
 * @title Admin API
 * @version 1.0
 * @contact
 *
 * The API description
 */
export class ApiModule<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  metadata = {
    /**
     * No description
     *
     * @tags Metadata
     * @name GetMetadata
     * @summary Get metadata
     * @request GET:/metadata
     * @secure
     */
    getMetadata: (params: RequestParams = {}) =>
      this.request<MetadataRO, any>({
        path: `/metadata`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  uploads = {
    /**
     * No description
     *
     * @tags Uploads
     * @name UploadFile
     * @summary Upload file
     * @request POST:/uploads
     */
    uploadFile: (data: UploadFileDTO, params: RequestParams = {}) =>
      this.request<TmpFileRO, any>({
        path: `/uploads`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uploads
     * @name DeleteAllFiles
     * @summary Delete all tmp file
     * @request DELETE:/uploads
     */
    deleteAllFiles: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/uploads`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uploads
     * @name DeleteFile
     * @summary Delete tmp file by id
     * @request DELETE:/uploads/{id}
     */
    deleteFile: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/uploads/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uploads
     * @name GetFile
     * @summary Get uploaded file by id
     * @request GET:/uploads/{id}
     */
    getFile: (id: string, params: RequestParams = {}) =>
      this.request<TmpFileRO, any>({
        path: `/uploads/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  admins = {
    /**
     * No description
     *
     * @tags Admins
     * @name CreateAdmin
     * @summary Create an admin
     * @request POST:/admins
     */
    createAdmin: (params: RequestParams = {}) =>
      this.request<AdminRO, any>({
        path: `/admins`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name GetAdmins
     * @summary Get admins
     * @request GET:/admins
     */
    getAdmins: (
      query?: {
        /**
         * Limit
         * @default 50
         * @example 50
         */
        limit?: number;
        /**
         * Offset
         * @default 10
         * @example 10
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminsRO, any>({
        path: `/admins`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name UpdateAdmin
     * @summary Update admin data
     * @request PATCH:/admins/{id}
     */
    updateAdmin: (id: string, data: UpdateAdminDTO, params: RequestParams = {}) =>
      this.request<AdminRO, any>({
        path: `/admins/${id}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name DeleteAdmin
     * @summary Delete an admin by id
     * @request DELETE:/admins/{id}
     */
    deleteAdmin: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/admins/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name GetAdmin
     * @summary Get admin
     * @request GET:/admins/{id}
     */
    getAdmin: (id: string, params: RequestParams = {}) =>
      this.request<AdminRO, any>({
        path: `/admins/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name UpdateAdminUsername
     * @summary Update admin username
     * @request PATCH:/admins/{id}/username
     */
    updateAdminUsername: (id: string, data: UpdateAdminUsernameDTO, params: RequestParams = {}) =>
      this.request<AdminRO, any>({
        path: `/admins/${id}/username`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name RefreshAdminPassword
     * @summary Refresh admin password
     * @request PATCH:/admins/{id}/password
     */
    refreshAdminPassword: (id: string, params: RequestParams = {}) =>
      this.request<AdminRefreshedPasswordRO, any>({
        path: `/admins/${id}/password`,
        method: 'PATCH',
        format: 'json',
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name CreateUser
     * @summary Create user
     * @request POST:/users
     */
    createUser: (params: RequestParams = {}) =>
      this.request<UserRO, any>({
        path: `/users`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateUser
     * @summary Update user data
     * @request PATCH:/users/{id}
     */
    updateUser: (id: string, data: UpdateUserDTO, params: RequestParams = {}) =>
      this.request<UserRO, any>({
        path: `/users/${id}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name DeleteUser
     * @summary Delete user
     * @request DELETE:/users/{id}
     */
    deleteUser: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/users/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUser
     * @summary Get user by id
     * @request GET:/users/{id}
     */
    getUser: (id: string, params: RequestParams = {}) =>
      this.request<UserRO, any>({
        path: `/users/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateUserUsername
     * @summary Update user's username
     * @request PATCH:/users/{id}/username
     */
    updateUserUsername: (id: string, data: UpdateUserUsernameDTO, params: RequestParams = {}) =>
      this.request<UserRO, any>({
        path: `/users/${id}/username`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateUserEmail
     * @summary Update user's email
     * @request PATCH:/users/{id}/email
     */
    updateUserEmail: (id: string, data: UpdateUserEmailDTO, params: RequestParams = {}) =>
      this.request<UserRO, any>({
        path: `/users/${id}/email`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateUserAvatar
     * @summary Update user's avatar
     * @request PATCH:/users/{id}/avatar
     */
    updateUserAvatar: (id: string, data: UpdateUserAvatarDTO, params: RequestParams = {}) =>
      this.request<UserRO, any>({
        path: `/users/${id}/avatar`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name DeleteUserAvatar
     * @summary Delete user's avatar
     * @request DELETE:/users/{id}/avatar
     */
    deleteUserAvatar: (id: string, params: RequestParams = {}) =>
      this.request<UserRO, any>({
        path: `/users/${id}/avatar`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name RefreshUserPassword
     * @summary Refresh user's password
     * @request PATCH:/users/{id}/password/refresh
     */
    refreshUserPassword: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/users/${id}/password/refresh`,
        method: 'PATCH',
        format: 'json',
        ...params,
      }),
  };
  artists = {
    /**
     * No description
     *
     * @tags Artists
     * @name CreateArtist
     * @summary Create an artist
     * @request POST:/artists
     */
    createArtist: (params: RequestParams = {}) =>
      this.request<ArtistRO, any>({
        path: `/artists`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name UpdateArtist
     * @summary Update artist data
     * @request PATCH:/artists/{id}
     */
    updateArtist: (id: string, data: UpdateArtistDTO, params: RequestParams = {}) =>
      this.request<ArtistRO, any>({
        path: `/artists/${id}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name DeleteArtist
     * @summary Delete an artist by id
     * @request DELETE:/artists/{id}
     */
    deleteArtist: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/artists/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name GetArtist
     * @summary Get an artist by id
     * @request GET:/artists/{id}
     */
    getArtist: (id: string, params: RequestParams = {}) =>
      this.request<ArtistRO, any>({
        path: `/artists/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name UpdateArtistAvatar
     * @summary Update artist's avatar
     * @request PATCH:/artists/{id}/avatar
     */
    updateArtistAvatar: (id: string, data: UpdateArtistImageDTO, params: RequestParams = {}) =>
      this.request<ArtistRO, any>({
        path: `/artists/${id}/avatar`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name DeleteArtistAvatar
     * @summary Delete artist's avatar
     * @request DELETE:/artists/{id}/avatar
     */
    deleteArtistAvatar: (id: string, params: RequestParams = {}) =>
      this.request<ArtistRO, any>({
        path: `/artists/${id}/avatar`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name UpdateArtistCover
     * @summary Update artist's cover
     * @request PATCH:/artists/{id}/cover
     */
    updateArtistCover: (id: string, data: UpdateArtistImageDTO, params: RequestParams = {}) =>
      this.request<ArtistRO, any>({
        path: `/artists/${id}/cover`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name DeleteArtistCover
     * @summary Delete artist's cover
     * @request DELETE:/artists/{id}/cover
     */
    deleteArtistCover: (id: string, params: RequestParams = {}) =>
      this.request<ArtistRO, any>({
        path: `/artists/${id}/cover`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name GetArtistAlbums
     * @summary Get artist albums
     * @request GET:/artists/{id}/albums
     */
    getArtistAlbums: (
      id: string,
      query?: {
        /**
         * Limit
         * @example 50
         */
        limit?: number;
        /**
         * Offset
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlbumsRO, any>({
        path: `/artists/${id}/albums`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name GetArtistTracks
     * @summary Get artist tracks
     * @request GET:/artists/{id}/tracks
     */
    getArtistTracks: (
      id: string,
      query?: {
        /**
         * Limit
         * @example 50
         */
        limit?: number;
        /**
         * Offset
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TracksRO, any>({
        path: `/artists/${id}/tracks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  albums = {
    /**
     * No description
     *
     * @tags Albums
     * @name CreateAlbum
     * @summary Create an album
     * @request POST:/albums
     */
    createAlbum: (data: CreateAlbumDTO, params: RequestParams = {}) =>
      this.request<AlbumRO, any>({
        path: `/albums`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Albums
     * @name UpdateAlbum
     * @summary Update album data
     * @request PATCH:/albums/{id}
     */
    updateAlbum: (id: string, data: UpdateAlbumDTO, params: RequestParams = {}) =>
      this.request<AlbumRO, any>({
        path: `/albums/${id}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Albums
     * @name DeleteAlbum
     * @summary Delete an album by id
     * @request DELETE:/albums/{id}
     */
    deleteAlbum: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/albums/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Albums
     * @name GetAlbum
     * @summary Get an album by id
     * @request GET:/albums/{id}
     */
    getAlbum: (id: string, params: RequestParams = {}) =>
      this.request<AlbumRO, any>({
        path: `/albums/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Albums
     * @name UpdateAlbumArtists
     * @summary Update artists of the album
     * @request PATCH:/albums/{id}/artists
     */
    updateAlbumArtists: (id: string, data: UpdateAlbumArtistsDTO, params: RequestParams = {}) =>
      this.request<AlbumRO, any>({
        path: `/albums/${id}/artists`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Albums
     * @name UpdateAlbumCover
     * @summary Update cover of the album
     * @request PATCH:/albums/{id}/cover
     */
    updateAlbumCover: (id: string, data: UpdateAlbumCoverDTO, params: RequestParams = {}) =>
      this.request<AlbumRO, any>({
        path: `/albums/${id}/cover`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Albums
     * @name DeleteAlbumCover
     * @summary Delete cover of the album
     * @request DELETE:/albums/{id}/cover
     */
    deleteAlbumCover: (id: string, params: RequestParams = {}) =>
      this.request<AlbumRO, any>({
        path: `/albums/${id}/cover`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Albums
     * @name GetAlbumTracks
     * @summary Get album tracks
     * @request GET:/albums/{id}/tracks
     */
    getAlbumTracks: (
      id: string,
      query?: {
        /**
         * Limit
         * @example 50
         */
        limit?: number;
        /**
         * Offset
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TracksRO, any>({
        path: `/albums/${id}/tracks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  tracks = {
    /**
     * No description
     *
     * @tags Tracks
     * @name CreateTrack
     * @summary Create an track
     * @request POST:/tracks
     */
    createTrack: (data: CreateTrackDTO, params: RequestParams = {}) =>
      this.request<TrackRO, any>({
        path: `/tracks`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracks
     * @name UpdateTrack
     * @summary Update track data
     * @request PATCH:/tracks/{id}
     */
    updateTrack: (id: string, data: UpdateTrackDTO, params: RequestParams = {}) =>
      this.request<TrackRO, any>({
        path: `/tracks/${id}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracks
     * @name DeleteTrack
     * @summary Delete an track by id
     * @request DELETE:/tracks/{id}
     */
    deleteTrack: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/tracks/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracks
     * @name GetTrack
     * @summary Get an track by id
     * @request GET:/tracks/{id}
     */
    getTrack: (id: string, params: RequestParams = {}) =>
      this.request<TrackRO, any>({
        path: `/tracks/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracks
     * @name UpdateTrackFeatArtists
     * @summary Update track feat. artists
     * @request PATCH:/tracks/{id}/featured-artists
     */
    updateTrackFeatArtists: (
      id: string,
      data: UpdateTrackFeatArtistsDTO,
      params: RequestParams = {},
    ) =>
      this.request<TrackRO, any>({
        path: `/tracks/${id}/featured-artists`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracks
     * @name UpdateTrackFile
     * @summary Update track file
     * @request PATCH:/tracks/{id}/file
     */
    updateTrackFile: (id: string, data: UpdateTrackFileDTO, params: RequestParams = {}) =>
      this.request<TrackRO, any>({
        path: `/tracks/${id}/file`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracks
     * @name DeleteTrackFile
     * @summary Delete track file
     * @request DELETE:/tracks/{id}/file
     */
    deleteTrackFile: (id: string, params: RequestParams = {}) =>
      this.request<TrackRO, any>({
        path: `/tracks/${id}/file`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),
  };
  playlists = {
    /**
     * No description
     *
     * @tags Playlists
     * @name CreatePlaylist
     * @summary Create an playlist
     * @request POST:/playlists
     */
    createPlaylist: (data: CreatePlaylistDTO, params: RequestParams = {}) =>
      this.request<PlaylistRO, any>({
        path: `/playlists`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlists
     * @name UpdatePlaylist
     * @summary Update playlist data
     * @request PATCH:/playlists/{id}
     */
    updatePlaylist: (id: string, data: UpdatePlaylistDTO, params: RequestParams = {}) =>
      this.request<PlaylistRO, any>({
        path: `/playlists/${id}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlists
     * @name DeletePlaylist
     * @summary Delete an playlist by id
     * @request DELETE:/playlists/{id}
     */
    deletePlaylist: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/playlists/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlists
     * @name GetPlaylist
     * @summary Get playlist by id
     * @request GET:/playlists/{id}
     */
    getPlaylist: (id: string, params: RequestParams = {}) =>
      this.request<PlaylistRO, any>({
        path: `/playlists/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlists
     * @name UpdatePlaylistCover
     * @summary Update playlist cover
     * @request PATCH:/playlists/{id}/cover
     */
    updatePlaylistCover: (id: string, data: UpdatePlaylistCoverDTO, params: RequestParams = {}) =>
      this.request<PlaylistRO, any>({
        path: `/playlists/${id}/cover`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlists
     * @name DeletePlaylistCover
     * @summary Delete cover of the playlist
     * @request DELETE:/playlists/{id}/cover
     */
    deletePlaylistCover: (id: string, params: RequestParams = {}) =>
      this.request<PlaylistRO, any>({
        path: `/playlists/${id}/cover`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlists
     * @name AddTrackInPlaylist
     * @summary Add artist in playlist
     * @request PATCH:/playlists/{id}/tracks
     */
    addTrackInPlaylist: (id: string, data: AddTrackInPlaylistDTO, params: RequestParams = {}) =>
      this.request<PlaylistRO, any>({
        path: `/playlists/${id}/tracks`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlists
     * @name GetPlaylistTracks
     * @summary Get playlist tracks
     * @request GET:/playlists/{id}/tracks
     */
    getPlaylistTracks: (
      id: string,
      query?: {
        /**
         * Limit
         * @example 50
         */
        limit?: string;
        /**
         * Offset
         * @example 0
         */
        offset?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistTracksRO, any>({
        path: `/playlists/${id}/tracks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlists
     * @name DeleteTrackFromPlaylist
     * @summary Delete artist from the playlist
     * @request DELETE:/playlists/{id}/tracks/{trackId}
     */
    deleteTrackFromPlaylist: (id: string, trackId: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/playlists/${id}/tracks/${trackId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),
  };
}
