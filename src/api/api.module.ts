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
   * @example "e3cbbbd9572fe9d3cc129d0d"
   */
  regions: LabelValueRO[];
  /**
   * Genres
   * @example "1bd30ddbb4a28dacde364ac9"
   */
  genres: LabelValueRO[];
  /**
   * Admin roles
   * @example "0be2f8beafe5b9ca4be9076a"
   */
  adminRoles: LabelValueRO[];
  /**
   * Album types
   * @example "82e16c13afcffdb861e0bcc4"
   */
  albumTypes: LabelValueRO[];
}

export interface AdminRO {
  /**
   * Id
   * @example "51d6f055eb25ccd014a3a8da"
   */
  id: string;
  /**
   * Username
   * @example "Karine55"
   */
  username: string;
  /**
   * Name
   * @example "Marilie"
   */
  name: string;
  /** Role */
  role: LabelValueRO;
  /** Block */
  isBlocked: boolean;
  /**
   * Reg. date
   * @format date-time
   * @example "2025-08-03T22:57:39.651Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2025-11-28T23:41:36.201Z"
   */
  updatedAt: string;
}

export interface CreatedAdminWithPasswordRO {
  /** Created Admin */
  admin: AdminRO;
  /**
   * Password
   * @example "gOVRj1A0uWY_RTG"
   */
  password: string;
}

export interface UpdateAdminDTO {
  /**
   * Birth Name
   * @example "Moshe"
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
   * @example "Myrtis3"
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
   * @example "insist.mp3"
   */
  name: string;
  /**
   * Original name
   * @example "gee.mp3"
   */
  originalName: string;
  /**
   * URL
   * @example "/tmp/chairperson.mp3"
   */
  fullPath: string;
  /**
   * URL
   * @example "http://localhost:3000/midst_fold_off.mp3"
   */
  path: string;
  /**
   * Size
   * @example 10000
   */
  size: number;
  /**
   * Type
   * @example "audio/ogg"
   */
  type: string;
  /**
   * Date
   * @format date-time
   * @example "2024-05-31T12:13:12.733Z"
   */
  uploadedAt: string;
  /**
   * Expires Date
   * @format date-time
   * @example "2025-01-02T13:06:30.800Z"
   */
  expiresAt: string;
}

export interface UserRO {
  /**
   * Id
   * @example "a6b4aeef7dd64c6fe0698ebf"
   */
  id: string;
  /**
   * Username
   * @example "Shane.Lebsack"
   */
  username: string;
  /**
   * Birth name
   * @example "Chance"
   */
  name: string;
  /**
   * Email
   * @example "Enoch_Harber17@yahoo.com"
   */
  email: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "1995-09-03T18:12:39.096Z"
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
   * @example "http://localhost:3000/amidst_under.webp"
   */
  avatar: string | null;
  /**
   * Accent color
   * @example "#4274da"
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
   * @example "2025-06-30T10:06:48.434Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2024-12-05T00:34:14.728Z"
   */
  updatedAt: string;
}

export interface UpdateUserDTO {
  /**
   * Birth name
   * @example "Delaney"
   */
  name?: string;
  /**
   * Birth date
   * @format date-time
   * @example "1952-07-08T07:18:38.221Z"
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
   * @example "Adolph_Veum24"
   */
  username: string;
}

export interface UpdateUserEmailDTO {
  /**
   * Email
   * @example "Helene12@hotmail.com"
   */
  email: string;
}

export interface UpdateUserAvatarDTO {
  /**
   * Id of the uploaded file
   * @example "https://picsum.photos/seed/J9MPs/3780/1702"
   */
  fileId: string;
  /**
   * Color
   * @example "#5fc0da"
   */
  color?: string;
}

export interface CreateArtistDTO {
  /**
   * Name
   * @example "Darrel"
   */
  name?: string;
}

export interface ArtistRO {
  /**
   * Id
   * @example "aafd22a67aba25cb9a07e69e"
   */
  id: string;
  /**
   * Name
   * @example "Ashley"
   */
  name: string;
  /**
   * Birth name
   * @example "Patti Waelchi"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2024-07-07T14:21:49.078Z"
   */
  birthDate: string | null;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "geek, person, founder"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "http://localhost:3000/yum_weep.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "http://localhost:3000/gleefully_up_mmm.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#bcec3f"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#5419a7"
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
   * @example "2024-12-27T15:04:17.330Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-03-13T05:25:58.779Z"
   */
  updatedAt: string;
}

export interface UpdateArtistDTO {
  /**
   * Name
   * @example "Martina"
   */
  name?: string;
  /**
   * Birth name
   * @example "Janet Thiel"
   */
  birthName?: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2024-07-08T14:41:40.191Z"
   */
  birthDate?: string | null;
  /**
   * Favorite genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Biography
   * @example "author, business owner, inventor 🇧🇳"
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
   * @example "https://loremflickr.com/2490/3194?lock=8131332671464932"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#ccca8a"
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
   * @example "2d5e8571dafedc1c9f8690e2"
   */
  id: string;
  /**
   * Name
   * @example "Hanky Panky"
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
   * @example "https://loremflickr.com/1157/1759?lock=6780780846174141"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#f7536e"
   */
  color: string | null;
  /**
   * Description
   * @example "Quibusdam dens desolo vox. Auctor consectetur illum. Absque arbitro non acervus arto tempora temperantia utpote. Aurum adulescens stipes admoveo dolor civis expedita sophismata. Pectus sonitus candidus."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2024-07-02T02:07:23.723Z"
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
   * @example "2025-01-03T05:58:45.227Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-12-13T03:25:26.075Z"
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
   * @example "2b2a49f9938bbc74611ceca8"
   */
  id: string;
  /**
   * Name
   * @example "Umbrella"
   */
  name: string;
  /**
   * Album id
   * @example "fbaf75fbdb1a1bb3afd28a08"
   */
  albumId: string;
  /** Album */
  album: AlbumRO;
  /**
   * Ids of artists
   * @example ["daacfa396c9fdde6e652ae15"]
   */
  artistIds: string[];
  /** Primary artists */
  artists: ArtistRO[];
  /**
   * Ids of featured artists
   * @example ["e29feeead0ba0141dcded448"]
   */
  featArtistIds: string[];
  /** Featured artists */
  featArtists: ArtistRO[];
  /**
   * Url
   * @example "https://agitated-creator.org"
   */
  file: string | null;
  /**
   * Duration
   * @example 240
   */
  duration: object | null;
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
   * @example "2024-08-28T14:01:52.380Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-01-29T23:48:41.118Z"
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
   * @example "0f560e0ec868cb1694d3224f"
   */
  artist: string;
  /**
   * Name
   * @example "Noel"
   */
  name?: string;
}

export interface UpdateAlbumDTO {
  /**
   * Name
   * @example "More Than Words"
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
   * @example "Voluntarius aufero uxor demoror confero inflammatio crapula sol cunabula turpis."
   */
  description?: string;
  /**
   * Release date
   * @format date-time
   * @example "2024-07-27T10:16:03.119Z"
   */
  releaseAt?: string;
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
   * @example ["be9db2bb557fd57a61ae26cc"]
   */
  artists: string[];
}

export interface UpdateAlbumCoverDTO {
  /**
   * Id of the uploaded file
   * @example "https://picsum.photos/seed/VC6oRw4/967/424"
   */
  fileId: string;
  /**
   * Color
   * @example "#4f8aba"
   */
  color?: string | null;
}

export interface CreateTrackDTO {
  /**
   * Id of the album
   * @example "dde58d93ecae11c08eaab58e"
   */
  albumId: string;
  /**
   * Name
   * @example "I'll Make Love to You"
   */
  name: string;
}

export interface UpdateTrackDTO {
  /**
   * Name
   * @example "Centerfold"
   */
  name: string;
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
   * @example ["df6de56d8decaccbdfa04fbb"]
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
   * @example "6fb8f1bfbebafdacbf08b2e7"
   */
  owner: string;
}

export interface PlaylistTrackRO {
  /** Track */
  track: TrackRO;
  /**
   * Added date
   * @format date-time
   * @example "2024-12-08T08:59:09.164Z"
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
   * @example "d06f3c122fd76bd4a639ea5f"
   */
  id: string;
  /** Owner */
  owner: UserRO;
  /**
   * Name
   * @example "My Man"
   */
  name: string;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/i3MGxGtcD/1100/969"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#90cfa7"
   */
  color: string | null;
  /**
   * Description
   * @example "Timor maiores utroque cui id accommodo dolorum ipsam. Veniam currus versus uter cibus ara substantia solitudo aestivus. Decet cohibeo beneficium illo curiositas."
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
   * @example "2024-06-07T13:03:39.023Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-09-29T22:31:29.119Z"
   */
  updatedAt: string;
}

export interface UpdatePlaylistDTO {
  /**
   * Name
   * @example "Love Will Keep Us Together"
   */
  name?: string;
  /**
   * Genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Description
   * @example "Amplitudo eos socius occaecati velociter solitudo cohors. Temporibus stips eos amoveo tutamen synagoga cruciamentum. Iste viridis appositus decor vix cunae solium.
   * Sustineo vacuus vigilo. Quisquam aestas uterque creator. Abduco crebro cibo timidus clamo necessitatibus.
   * Amo vero cometes illum tametsi inventore. Sub cupressus textus tantillus tolero angelus. Tondeo quaerat tempus."
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
   * @example "https://picsum.photos/seed/4EqRp/3845/2791"
   */
  fileId: string;
  /**
   * Color
   * @example "#eea64e"
   */
  color?: string | null;
}

export interface AddTrackInPlaylistDTO {
  /**
   * Track id
   * @example "fdf0adf8f72bea665be0ccfc"
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
