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
   * @example "a9d9ebbb21ddafc9ebb9baef"
   */
  regions: LabelValueRO[];
  /**
   * Genres
   * @example "cda16f84faae20db82f4a5b5"
   */
  genres: LabelValueRO[];
  /**
   * Admin roles
   * @example "bee7bdcbcc291e97447ffb3c"
   */
  adminRoles: LabelValueRO[];
  /**
   * Album types
   * @example "292f7bacdeade974b5ff5f3c"
   */
  albumTypes: LabelValueRO[];
}

export interface AdminRO {
  /**
   * Id
   * @example "beea880b47b045b540a3d944"
   */
  id: string;
  /**
   * Username
   * @example "Mikayla.Walker96"
   */
  username: string;
  /**
   * Name
   * @example "Effie"
   */
  name: string;
  /** Role */
  role: LabelValueRO;
  /** Block */
  isBlocked: boolean;
  /**
   * Reg. date
   * @format date-time
   * @example "2025-04-10T12:28:13.072Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2024-08-27T04:59:56.112Z"
   */
  updatedAt: string;
}

export interface CreatedAdminWithPasswordRO {
  /** Created Admin */
  admin: AdminRO;
  /**
   * Password
   * @example "XLQ3qHBiMQTeNEk"
   */
  password: string;
}

export interface UpdateAdminDTO {
  /**
   * Birth Name
   * @example "Pierre"
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
   * @example "Lew_Mohr"
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
   * @example "airbus_favorable_if.mp3"
   */
  name: string;
  /**
   * Original name
   * @example "sunbathe_gosh.mp3"
   */
  originalName: string;
  /**
   * URL
   * @example "/tmp/ugh_loosely_towards.mp3"
   */
  fullPath: string;
  /**
   * URL
   * @example "http://localhost:3000/black_merrily.mp3"
   */
  path: string;
  /**
   * Size
   * @example 10000
   */
  size: number;
  /**
   * Type
   * @example "video/mp4"
   */
  type: string;
  /**
   * Date
   * @format date-time
   * @example "2025-05-11T21:22:22.950Z"
   */
  uploadedAt: string;
  /**
   * Expires Date
   * @format date-time
   * @example "2025-04-27T01:57:05.460Z"
   */
  expiresAt: string;
}

export interface UserRO {
  /**
   * Id
   * @example "ac1cfa1bd30f64ba2258be24"
   */
  id: string;
  /**
   * Username
   * @example "Neha_Steuber85"
   */
  username: string;
  /**
   * Birth name
   * @example "Caterina"
   */
  name: string;
  /**
   * Email
   * @example "Marianne.Koelpin10@gmail.com"
   */
  email: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "1992-09-14T23:05:22.845Z"
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
   * @example "http://localhost:3000/gee_flash.webp"
   */
  avatar: string | null;
  /**
   * Accent color
   * @example "#f1df27"
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
   * @example "2025-11-22T08:19:02.857Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2026-02-08T03:21:45.601Z"
   */
  updatedAt: string;
}

export interface UpdateUserDTO {
  /**
   * Birth name
   * @example "Amir"
   */
  name?: string;
  /**
   * Birth date
   * @format date-time
   * @example "2006-01-22T00:17:27.056Z"
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
   * @example "Royce.Williamson"
   */
  username: string;
}

export interface UpdateUserEmailDTO {
  /**
   * Email
   * @example "Brielle47@hotmail.com"
   */
  email: string;
}

export interface UpdateUserAvatarDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/3074/3712?lock=8228261817726592"
   */
  fileId: string;
  /**
   * Color
   * @example "#0fbba7"
   */
  color?: string;
}

export interface CreateArtistDTO {
  /**
   * Name
   * @example "Monica"
   */
  name?: string;
}

export interface ArtistRO {
  /**
   * Id
   * @example "affe886e2cf1190f5a4f0c2f"
   */
  id: string;
  /**
   * Name
   * @example "Kristopher"
   */
  name: string;
  /**
   * Birth name
   * @example "Emilio Barrows"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-01-12T08:25:25.305Z"
   */
  birthDate: string | null;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "parent, gamer, filmmaker 🥪"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "http://localhost:3000/surprisingly.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "http://localhost:3000/secret.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#25c9dd"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#f7cbc0"
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
   * @example "2024-11-09T06:30:28.423Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-10-25T05:20:46.633Z"
   */
  updatedAt: string;
}

export interface UpdateArtistDTO {
  /**
   * Name
   * @example "Maximillian"
   */
  name?: string;
  /**
   * Birth name
   * @example "Agnes Dare PhD"
   */
  birthName?: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2024-11-14T22:02:26.412Z"
   */
  birthDate?: string | null;
  /**
   * Favorite genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Biography
   * @example "mouser devotee, engineer"
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
   * @example "https://loremflickr.com/205/2382?lock=2683585724487174"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#e4ec06"
   */
  color?: string | null;
}

export interface OffsetLimitPaginationRO {
  /** Items */
  items: string[];
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

export interface AlbumRO {
  /**
   * Id
   * @example "ac009fddae87ded4ecbbd1be"
   */
  id: string;
  /**
   * Name
   * @example "Ray of Light"
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
   * @example "https://picsum.photos/seed/46lGBzLy/2612/3822"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#129ad0"
   */
  color: string | null;
  /**
   * Description
   * @example "Baiulus vigor tolero vigilo decretum vobis video."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-01-20T03:44:15.307Z"
   */
  releaseAt: string | null;
  /** Album tracks */
  tracks: OffsetLimitPaginationRO;
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
   * @example "2024-09-17T18:05:49.614Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-11-13T14:27:02.181Z"
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
   * @example "1fa6878bbdaffc0c2f6bddee"
   */
  id: string;
  /**
   * Name
   * @example "Nothing's Gonna Stop Us Now"
   */
  name: string;
  /**
   * Album id
   * @example "79ff3a14cb899a7a666aaeae"
   */
  albumId: string;
  /** Album */
  album: AlbumRO;
  /**
   * Ids of artists
   * @example ["52bbceb8dbab525babf6f9b4"]
   */
  artistIds: string[];
  /** Primary artists */
  artists: ArtistRO[];
  /**
   * Ids of featured artists
   * @example ["5929fb2df4e947c0a2ee44fa"]
   */
  featArtistIds: string[];
  /** Featured artists */
  featArtists: ArtistRO[];
  /**
   * Url
   * @example "https://intent-knickers.com/"
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
   * @example "2024-09-02T15:03:01.158Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-04-11T21:35:44.743Z"
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
   * @example "39fb7c5c3aa370e3abe91c3a"
   */
  artist: string;
  /**
   * Name
   * @example "Abbigail"
   */
  name?: string;
}

export interface UpdateAlbumDTO {
  /**
   * Name
   * @example "Green Onions"
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
   * @example "Tabernus tollo curia distinctio cito basium. Vel tondeo alter dignissimos occaecati alveus vero corroboro annus. Rem tertius aro terga patrocinor umquam thesis."
   */
  description?: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-03-09T08:05:31.268Z"
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
   * @example ["41ba6dda29d9fcadc08a6f6b"]
   */
  artists: string[];
}

export interface UpdateAlbumCoverDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/74/2518?lock=7314796604013596"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#1be02b"
   */
  color?: string | null;
}

export interface CreateTrackDTO {
  /**
   * Id of the album
   * @example "10f6eeb2aac13c9824c66cc8"
   */
  albumId: string;
  /**
   * Name
   * @example "Groove is in the Heart"
   */
  name?: string;
}

export interface UpdateTrackDTO {
  /**
   * Name
   * @example "What'd I Say"
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
   * @example ["2a07fbbbcc47aaa8adbdcfbe"]
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
   * @example "e87a3f54de356fba123bef2e"
   */
  owner: string;
}

export interface PlaylistTrackRO {
  /** Track */
  track: TrackRO;
  /**
   * Added date
   * @format date-time
   * @example "2024-09-24T04:56:56.634Z"
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

export interface PlaylistRO {
  /**
   * Id
   * @example "58314f4eccb7e7d81fdade6b"
   */
  id: string;
  /** Owner */
  owner: UserRO;
  /**
   * Name
   * @example "Swinging On a Star"
   */
  name: string;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/3166/2087?lock=4587787873685913"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#9b0fb9"
   */
  color: string | null;
  /**
   * Description
   * @example "Abscido adaugeo alioqui tolero quo decor textus arcus tempore creta. Vere quod calculus tollo accusamus tergo theatrum. Delectatio tempus animi caecus.
   * Cohaero arca conculco esse toties excepturi tum eos textilis utique. Vulgaris degero umbra deleo. Crebro utique neque commemoro patria barba cado distinctio uredo communis.
   * Administratio abduco texo non depono ea arcus tero culpo. Tergum via pectus ipsa tabella vociferor adamo. Quia vestigium corrigo tyrannus."
   */
  description: string;
  /** Album tracks */
  tracks: PlaylistTracksRO;
  /**
   * Public
   * @example false
   */
  isPublic: boolean;
  /**
   * Created date
   * @format date-time
   * @example "2025-04-04T03:14:38.316Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-12-15T22:37:13.842Z"
   */
  updatedAt: string;
}

export interface UpdatePlaylistDTO {
  /**
   * Name
   * @example "Go Your Own Way"
   */
  name?: string;
  /**
   * Genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Description
   * @example "Nisi addo ascisco quam aeneus pecto conicio."
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
   * @example "https://loremflickr.com/420/901?lock=3087909498055277"
   */
  fileId: string;
  /**
   * Color
   * @example "#5940bb"
   */
  color?: string | null;
}

export interface AddTrackInPlaylistDTO {
  /**
   * Track id
   * @example "060bbced63f1047cded9dbc1"
   */
  track: string;
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
     * @name GetAll
     * @summary Get all metadata
     * @request GET:/metadata
     * @secure
     */
    getAll: (params: RequestParams = {}) =>
      this.request<MetadataRO, any>({
        path: `/metadata`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  admins = {
    /**
     * No description
     *
     * @tags Admins
     * @name Create
     * @summary Create an admin
     * @request POST:/admins
     */
    create: (params: RequestParams = {}) =>
      this.request<CreatedAdminWithPasswordRO, any>({
        path: `/admins`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name Find
     * @summary Find admins
     * @request GET:/admins
     */
    find: (
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
     * @name Update
     * @summary Update admin data
     * @request PATCH:/admins/{id}
     */
    update: (id: string, data: UpdateAdminDTO, params: RequestParams = {}) =>
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
     * @name Delete
     * @summary Delete an admin by id
     * @request DELETE:/admins/{id}
     */
    delete: (id: string, params: RequestParams = {}) =>
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
     * @name FindOne
     * @summary Find an admin by id
     * @request GET:/admins/{id}
     */
    findOne: (id: string, params: RequestParams = {}) =>
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
     * @name UpdateUsername
     * @summary Update admin username
     * @request PATCH:/admins/{id}/username
     */
    updateUsername: (id: string, data: UpdateAdminUsernameDTO, params: RequestParams = {}) =>
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
     * @name RefreshPassword
     * @summary Refresh admin password
     * @request PATCH:/admins/{id}/password
     */
    refreshPassword: (id: string, params: RequestParams = {}) =>
      this.request<AdminRefreshedPasswordRO, any>({
        path: `/admins/${id}/password`,
        method: 'PATCH',
        format: 'json',
        ...params,
      }),
  };
  uploads = {
    /**
     * No description
     *
     * @tags Uploads
     * @name Upload
     * @summary Upload file
     * @request POST:/uploads
     */
    upload: (data: UploadFileDTO, params: RequestParams = {}) =>
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
     * @name DeleteAll
     * @summary Delete all tmp file
     * @request DELETE:/uploads
     */
    deleteAll: (params: RequestParams = {}) =>
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
     * @name Delete
     * @summary Delete tmp file by id
     * @request DELETE:/uploads/{id}
     */
    delete: (id: string, params: RequestParams = {}) =>
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
     * @name FindOne
     * @summary Find uploaded file by id
     * @request GET:/uploads/{id}
     */
    findOne: (id: string, params: RequestParams = {}) =>
      this.request<TmpFileRO, any>({
        path: `/uploads/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name Create
     * @summary Create user
     * @request POST:/users
     */
    create: (params: RequestParams = {}) =>
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
     * @name Update
     * @summary Update user data
     * @request PATCH:/users/{id}
     */
    update: (id: string, data: UpdateUserDTO, params: RequestParams = {}) =>
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
     * @name Delete
     * @summary Delete user
     * @request DELETE:/users/{id}
     */
    delete: (id: string, params: RequestParams = {}) =>
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
     * @name FindOne
     * @summary Find user by id
     * @request GET:/users/{id}
     */
    findOne: (id: string, params: RequestParams = {}) =>
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
     * @name UpdateUsername
     * @summary Update user's username
     * @request PATCH:/users/{id}/username
     */
    updateUsername: (id: string, data: UpdateUserUsernameDTO, params: RequestParams = {}) =>
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
     * @name UpdateEmail
     * @summary Update user's email
     * @request PATCH:/users/{id}/email
     */
    updateEmail: (id: string, data: UpdateUserEmailDTO, params: RequestParams = {}) =>
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
     * @name UpdateAvatar
     * @summary Update user's avatar
     * @request PATCH:/users/{id}/avatar
     */
    updateAvatar: (id: string, data: UpdateUserAvatarDTO, params: RequestParams = {}) =>
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
     * @name DeleteAvatar
     * @summary Delete user's avatar
     * @request DELETE:/users/{id}/avatar
     */
    deleteAvatar: (id: string, params: RequestParams = {}) =>
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
     * @name RefreshPassword
     * @summary Refresh user's password
     * @request PATCH:/users/{id}/password/refresh
     */
    refreshPassword: (id: string, params: RequestParams = {}) =>
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
     * @name Create
     * @summary Create an artist
     * @request POST:/artists
     */
    create: (data?: CreateArtistDTO, params: RequestParams = {}) =>
      this.request<ArtistRO, any>({
        path: `/artists`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name Update
     * @summary Update artist data
     * @request PATCH:/artists/{id}
     */
    update: (id: string, data: UpdateArtistDTO, params: RequestParams = {}) =>
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
     * @name Delete
     * @summary Delete an artist by id
     * @request DELETE:/artists/{id}
     */
    delete: (id: string, params: RequestParams = {}) =>
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
     * @name FindOne
     * @summary Find an artist by id
     * @request GET:/artists/{id}
     */
    findOne: (id: string, params: RequestParams = {}) =>
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
     * @name UpdateAvatar
     * @summary Update artist's avatar
     * @request PATCH:/artists/{id}/avatar
     */
    updateAvatar: (id: string, data: UpdateArtistImageDTO, params: RequestParams = {}) =>
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
     * @name DeleteAvatar
     * @summary Delete artist's avatar
     * @request DELETE:/artists/{id}/avatar
     */
    deleteAvatar: (id: string, params: RequestParams = {}) =>
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
     * @name UpdateCover
     * @summary Update artist's cover
     * @request PATCH:/artists/{id}/cover
     */
    updateCover: (id: string, data: UpdateArtistImageDTO, params: RequestParams = {}) =>
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
     * @name DeleteCover
     * @summary Delete artist's cover
     * @request DELETE:/artists/{id}/cover
     */
    deleteCover: (id: string, params: RequestParams = {}) =>
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
     * @name GetAlbums
     * @summary Get artist albums
     * @request GET:/artists/{id}/albums
     */
    getAlbums: (
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
     * @name GetTracks
     * @summary Get artist tracks
     * @request GET:/artists/{id}/tracks
     */
    getTracks: (
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
     * @name Create
     * @summary Create an album
     * @request POST:/albums
     */
    create: (data: CreateAlbumDTO, params: RequestParams = {}) =>
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
     * @name Update
     * @summary Update album data
     * @request PATCH:/albums/{id}
     */
    update: (id: string, data: UpdateAlbumDTO, params: RequestParams = {}) =>
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
     * @name Delete
     * @summary Delete an album by id
     * @request DELETE:/albums/{id}
     */
    delete: (id: string, params: RequestParams = {}) =>
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
     * @name FindOne
     * @summary Find an album by id
     * @request GET:/albums/{id}
     */
    findOne: (id: string, params: RequestParams = {}) =>
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
     * @name UpdateArtists
     * @summary Update artists of the album
     * @request PATCH:/albums/{id}/artists
     */
    updateArtists: (id: string, data: UpdateAlbumArtistsDTO, params: RequestParams = {}) =>
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
     * @name UpdateCover
     * @summary Update cover of the album
     * @request PATCH:/albums/{id}/cover
     */
    updateCover: (id: string, data: UpdateAlbumCoverDTO, params: RequestParams = {}) =>
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
     * @name DeleteCover
     * @summary Delete cover of the album
     * @request DELETE:/albums/{id}/cover
     */
    deleteCover: (id: string, params: RequestParams = {}) =>
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
     * @name GetTracks
     * @summary Get album tracks
     * @request GET:/albums/{id}/tracks
     */
    getTracks: (
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
     * @name Create
     * @summary Create an track
     * @request POST:/tracks
     */
    create: (data: CreateTrackDTO, params: RequestParams = {}) =>
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
     * @name Update
     * @summary Update track data
     * @request PATCH:/tracks/{id}
     */
    update: (id: string, data: UpdateTrackDTO, params: RequestParams = {}) =>
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
     * @name DeleteById
     * @summary Delete an track by id
     * @request DELETE:/tracks/{id}
     */
    deleteById: (id: string, params: RequestParams = {}) =>
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
     * @name GetById
     * @summary Get an track by id
     * @request GET:/tracks/{id}
     */
    getById: (id: string, params: RequestParams = {}) =>
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
     * @name UpdateFeatArtists
     * @summary Update track feat. artists
     * @request PATCH:/tracks/{id}/featured-artists
     */
    updateFeatArtists: (id: string, data: UpdateTrackFeatArtistsDTO, params: RequestParams = {}) =>
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
     * @name UpdateFile
     * @summary Update file of the track
     * @request PATCH:/tracks/{id}/file
     */
    updateFile: (id: string, data: UpdateTrackFileDTO, params: RequestParams = {}) =>
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
     * @name DeleteFile
     * @summary Delete file of the track
     * @request DELETE:/tracks/{id}/file
     */
    deleteFile: (id: string, params: RequestParams = {}) =>
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
     * @name Create
     * @summary Create an playlist
     * @request POST:/playlists
     */
    create: (data: CreatePlaylistDTO, params: RequestParams = {}) =>
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
     * @name Update
     * @summary Update playlist data
     * @request PATCH:/playlists/{id}
     */
    update: (id: string, data: UpdatePlaylistDTO, params: RequestParams = {}) =>
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
     * @name Delete
     * @summary Delete an playlist by id
     * @request DELETE:/playlists/{id}
     */
    delete: (id: string, params: RequestParams = {}) =>
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
     * @name Get
     * @summary Get playlist by id
     * @request GET:/playlists/{id}
     */
    get: (id: string, params: RequestParams = {}) =>
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
     * @name UpdateCover
     * @summary Update playlist cover
     * @request PATCH:/playlists/{id}/cover
     */
    updateCover: (id: string, data: UpdatePlaylistCoverDTO, params: RequestParams = {}) =>
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
     * @name DeleteCover
     * @summary Delete cover of the playlist
     * @request DELETE:/playlists/{id}/cover
     */
    deleteCover: (id: string, params: RequestParams = {}) =>
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
     * @name AddTrack
     * @summary Add track in playlist
     * @request PATCH:/playlists/{id}/tracks
     */
    addTrack: (id: string, data: AddTrackInPlaylistDTO, params: RequestParams = {}) =>
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
     * @name GetTracks
     * @summary Get playlist tracks
     * @request GET:/playlists/{id}/tracks
     */
    getTracks: (
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
     * @name DeleteTrack
     * @summary Delete track from the playlist
     * @request DELETE:/playlists/{id}/tracks/{trackId}
     */
    deleteTrack: (id: string, trackId: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/playlists/${id}/tracks/${trackId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),
  };
}
