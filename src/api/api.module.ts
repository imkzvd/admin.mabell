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

export interface LoginAdminDTO {
  /**
   * Username
   * @example "Hoyt41"
   */
  username: string;
  /**
   * Password
   * @example "KWEBUo7VsdZFVEg"
   */
  password: string;
}

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

export interface LoggedAdminProfileRO {
  /**
   * Id
   * @example "dec7c77dacdb9ba6dedb6b97"
   */
  id: string;
  /**
   * Name
   * @example "Lue"
   */
  name: string;
  /** Role */
  role: LabelValueRO;
}

export interface ErrorRO {
  /** @example 401 */
  statusCode: number;
  /** @example "Unauthorized" */
  message: string;
  /** @example "/login" */
  path: string;
  /** @example "2024-01-01T00:00:00Z" */
  timestamp: string;
}

export interface AdminRO {
  /**
   * Id
   * @example "d4e50c50fe06fdb2acb0a717"
   */
  id: string;
  /**
   * Username
   * @example "Dewitt.Heathcote49"
   */
  username: string;
  /**
   * Name
   * @example "Elise"
   */
  name: string;
  /** Role */
  role: LabelValueRO;
  /** Block */
  isBlocked: boolean;
  /**
   * Reg. date
   * @format date-time
   * @example "2025-08-11T07:44:02.965Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2024-09-21T09:19:48.490Z"
   */
  updatedAt: string;
}

export interface UpdateAdminDTO {
  /**
   * Birth Name
   * @example "Velva"
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
   * @example "Megane10"
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
   * @example "e71d0fdd46e6b009fd9b5db9"
   */
  id: string;
  /**
   * Username
   * @example "Colton.Will"
   */
  username: string;
  /**
   * Birth name
   * @example "Ken"
   */
  name: string;
  /**
   * Email
   * @example "Wilson_Heller43@hotmail.com"
   */
  email: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "1967-10-10T00:47:00.792Z"
   */
  birthDate: string | null;
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
   * @example "https://admin-api.mabell.dev/pointless_impressive.webp"
   */
  avatar: string | null;
  /**
   * Accent color
   * @example "#e1f0f1"
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
   * @example "2025-05-16T11:49:22.591Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2024-09-03T13:14:33.885Z"
   */
  updatedAt: string;
}

export interface UpdateUserDTO {
  /**
   * Birth name
   * @example "Nora"
   */
  name?: string;
  /**
   * Birth date
   * @format date-time
   * @example "1985-10-14T14:11:11.189Z"
   */
  birthDate?: string | null;
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
}

export interface UpdateUserUsernameDTO {
  /**
   * Username
   * @example "Rossie_Nolan97"
   */
  username: string;
}

export interface UpdateUserEmailDTO {
  /**
   * Email
   * @example "Vaughn.Mills5@yahoo.com"
   */
  email: string;
}

export interface UpdateUserAvatarDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/401/3562?lock=179343006094573"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#82890f"
   */
  color?: string | null;
}

export interface ArtistRO {
  /**
   * Id
   * @example "c7bbfaeedfb8cdd985e22ddb"
   */
  id: string;
  /**
   * Name
   * @example "Vida"
   */
  name: string;
  /**
   * Birth name
   * @example "Faye Willms"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-02-19T08:43:01.182Z"
   */
  birthDate: string | null;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "photographer, creator"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "https://admin-api.mabell.dev/briefly.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "https://admin-api.mabell.dev/advancement_phew_drat.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#bf7ad4"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#e530f6"
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
   * @example "2025-06-02T14:49:13.546Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-02-02T17:59:45.990Z"
   */
  updatedAt: string;
}

export interface UpdateArtistDTO {
  /**
   * Name
   * @example "Carroll"
   */
  name?: string;
  /**
   * Birth name
   * @example "Sandra Waters"
   */
  birthName?: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-03-07T00:39:34.154Z"
   */
  birthDate?: string | null;
  /**
   * Favorite genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Biography
   * @example "cricket supporter  🐤"
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
   * @example "https://loremflickr.com/1914/3777?lock=372463285698765"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#dde2f1"
   */
  color?: string | null;
}

export interface AlbumRO {
  /**
   * Id
   * @example "fde93ffb39c2ed71ffa7bf26"
   */
  id: string;
  /**
   * Name
   * @example "Paperback Writer"
   */
  name: string;
  /** Artists */
  artists: ArtistRO[];
  /**
   * Artist ids
   * @example ["99a7ad5f06398ffa83bcb01b"]
   */
  artistIds: string[];
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
   * @example "https://loremflickr.com/1307/361?lock=8463225886632900"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#3f60bc"
   */
  color: string | null;
  /**
   * Description
   * @example "Tergo demitto arbustum usus amitto vicinus curo.
   * Sollers sufficio culpo crinis.
   * Succurro aequus blanditiis cur alienus abscido."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-07-23T15:16:02.068Z"
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
   * @example "2025-07-04T05:31:12.758Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-10-08T09:11:26.594Z"
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
   * @example "cc7dcd00c9bbcefe2af17b05"
   */
  id: string;
  /**
   * Name
   * @example "Born to Be Wild"
   */
  name: string;
  /**
   * Album id
   * @example "d5192185d99eb7b27c0c4ec3"
   */
  albumId: string;
  /** Album */
  album: AlbumRO;
  /**
   * Ids of artist
   * @example ["9a05bba580f5f5da00dd9035"]
   */
  artistIds: string[];
  /** Primary artist */
  artists: ArtistRO[];
  /**
   * Ids of featured artist
   * @example ["7fd6fd6c1f4a1d4bacd46d80"]
   */
  featArtistIds: string[];
  /** Featured artist */
  featArtists: ArtistRO[];
  /**
   * Url
   * @example "https://yellow-costume.biz"
   */
  file: string | null;
  /**
   * Duration
   * @example 240
   */
  duration: number | null;
  /**
   * Index
   * @example 0
   */
  trackNumber: number;
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
   * @example "2025-01-08T18:49:36.627Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-11-06T00:01:31.739Z"
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
   * @example "9fcf1ddfcd14d310ea9153b1"
   */
  artistId: string;
}

export interface UpdateAlbumDTO {
  /**
   * Name
   * @example "How Do I Live?"
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
   * @example "Cuppedia unus decumbo contego theologus ducimus quos textus vesica. Agnitio considero vaco cubitum utique apparatus curtus cibo. Viriliter balbus cado succedo.
   * Cornu vesco defendo territo pecto bonus culpo vae facilis. Cado consequuntur sint comminor debeo adnuo demergo. Nostrum suscipio video tripudio eligendi vivo maxime.
   * Temporibus sufficio cui sed esse charisma doloribus thermae. Hic adfectus aranea capio alo venustas conduco crepusculum armarium audentia. Brevis condico sollers cauda alii cuius delibero sulum."
   */
  description?: string;
  /**
   * Release date
   * @format date-time
   * @example "2024-10-12T20:08:24.390Z"
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
   * @example ["f3f4823cc9f8d1836f5ef8cb"]
   */
  artists: string[];
}

export interface UpdateAlbumCoverDTO {
  /**
   * Id of the uploaded file
   * @example "https://picsum.photos/seed/OdwqcAt/1893/2088"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#2fba0b"
   */
  color?: string | null;
}

export interface CreateTrackDTO {
  /**
   * Id of the album
   * @example "bfc2ed8d906beeaa9e71f64b"
   */
  albumId: string;
}

export interface UpdateTrackDTO {
  /**
   * Name
   * @example "Ain't No Sunshine"
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
   * @example ["d4178176f2ff2ee8f518bccb"]
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
   * @example "2d62346ccbd209b649d75baf"
   */
  ownerId: string;
}

export interface PlaylistRO {
  /**
   * Id
   * @example "fa31756aa9cbd96ff1db03eb"
   */
  id: string;
  /** Owner */
  owner: UserRO;
  /**
   * Name
   * @example "Ring of Fire"
   */
  name: string;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/2243/1098?lock=7345849639356119"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#be0e2f"
   */
  color: string | null;
  /**
   * Description
   * @example "Celebrer thesaurus deporto ustulo. Desparatus stabilis adeptio quae curso cedo celebrer consuasor constans. Desidero supellex adipisci verbera capillus crudelis aequus.
   * Turpis confero aestus. Aequitas calculus appono canis textor tepesco. Infit caelestis eveniet tutis patria tripudio crastinus turpis suadeo sollicito.
   * Tribuo vallum concedo blandior soluta depraedor desidero uberrime uberrime. Causa thorax conor. Verbera utor tripudio rem sortitus comedo vox."
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
   * @example "2025-07-04T15:47:21.861Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-08-19T15:55:24.093Z"
   */
  updatedAt: string;
}

export interface UpdatePlaylistDTO {
  /**
   * Name
   * @example "My Man"
   */
  name?: string;
  /**
   * Genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Description
   * @example "Despecto admitto xiphias delectatio vapulus. Argentum triduana casso vereor ante repellendus. Vehemens communis vicinus vitium aliquid natus asporto comparo degusto bibo."
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
   * @example "https://picsum.photos/seed/Mb2SOfxWW/1799/758"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#e3caf9"
   */
  color?: string | null;
}

export interface AddTrackInPlaylistDTO {
  /**
   * Track id
   * @example "fa0f7fa93cad8d774a1f5ffa"
   */
  trackId: string;
}

export interface PlaylistTrackRO {
  /** Track */
  track: TrackRO | null;
  /**
   * Added date
   * @format date-time
   * @example "2025-02-26T18:51:52.863Z"
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

export interface IndexedArtistRO {
  /**
   * Id
   * @example "0a4e23dcb18bec1ee14bda6b"
   */
  id: string;
  /**
   * Name
   * @example "Lambert"
   */
  name: string;
  /**
   * Avatar
   * @example "https://loremflickr.com/2847/1417?lock=2998395971085535"
   */
  avatar: string | null;
}

export interface IndexedSimplifiedArtistRO {
  /**
   * Id
   * @example "a4d0ef22d7f6fb32a76b671f"
   */
  id: string;
  /**
   * Name
   * @example "Conrad"
   */
  name: string;
}

export interface IndexedAlbumRO {
  /**
   * Id
   * @example "dcefccfd79fabaafeba2bf77"
   */
  id: string;
  /**
   * Name
   * @example "Dallin"
   */
  name: string;
  /** Artists of the album */
  artists: IndexedSimplifiedArtistRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/1022/2035?lock=3906304584251850"
   */
  cover: string | null;
}

export interface IndexedTrackRO {
  /**
   * Id
   * @example "3ff3cd5c7732441edc46c77c"
   */
  id: string;
  /**
   * Name
   * @example "Rowan"
   */
  name: string;
  /** Artists of the album */
  album: IndexedAlbumRO;
  /**
   * Featured artists
   * @example [null]
   */
  featArtists: IndexedSimplifiedArtistRO[];
}

export interface IndexedUserRO {
  /**
   * Id
   * @example "ecc7ade5ccac87af4e45fefa"
   */
  id: string;
  /**
   * Name
   * @example "Camren.Breitenberg"
   */
  name: string;
  /**
   * Email
   * @example "Lia_Rogahn92@gmail.com"
   */
  email: string | null;
  /**
   * Avatar
   * @example "https://picsum.photos/seed/xuwqjif/1083/3819"
   */
  avatar: string | null;
}

export interface IndexedSimplifiedUserRO {
  /**
   * Id
   * @example "eab1ac5facac5d7d807affa7"
   */
  id: string;
  /**
   * Name
   * @example "Lisandro"
   */
  name: string;
}

export interface IndexedPlaylistRO {
  /**
   * Id
   * @example "800ed68faebe9fcdba8f1dfe"
   */
  id: string;
  /**
   * Name
   * @example "Dane"
   */
  name: string;
  /** Owner */
  owner: IndexedSimplifiedUserRO;
  /**
   * Cover
   * @example "https://loremflickr.com/2602/1042?lock=1074010773527600"
   */
  cover: string | null;
  /**
   * Public
   * @example true
   */
  isPublic: boolean;
}

export interface SearchResultRO {
  /** Artists */
  artists: IndexedArtistRO[];
  /** Albums */
  albums: IndexedAlbumRO[];
  /** Tracks */
  tracks: IndexedTrackRO[];
  /** Users */
  users: IndexedUserRO[];
  /** Playlists */
  playlists: IndexedPlaylistRO[];
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
   * @example "nervous_why.mp3"
   */
  name: string;
  /**
   * Original name
   * @example "basket.mp3"
   */
  originalName: string;
  /**
   * URL
   * @example "/tmp/noisily_viability_circa.mp3"
   */
  fullPath: string;
  /**
   * URL
   * @example "https://admin-api.mabell.dev/ridge_lest_nocturnal.mp3"
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
   * @example "2025-04-17T07:08:30.997Z"
   */
  uploadedAt: string;
  /**
   * Expires Date
   * @format date-time
   * @example "2025-04-10T07:00:35.980Z"
   */
  expiresAt: string;
}

export interface MetadataRO {
  /**
   * Regions
   * @example "426a71c3cc4abacaacc50bf4"
   */
  regions: LabelValueRO[];
  /**
   * Genres
   * @example "c1b5bfbc4fedd47bf7bfffdf"
   */
  genres: LabelValueRO[];
  /**
   * Admin roles
   * @example "cf7eaa2eeb5c6a6eaa2a21ed"
   */
  adminRoles: LabelValueRO[];
  /**
   * Album types
   * @example "2ccdbdf7c124bcc2dd3b52ab"
   */
  albumTypes: LabelValueRO[];
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
 * @version 1.0.0
 * @contact
 *
 * The API description
 */
export class ApiModule<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name Login
     * @summary Admin login
     * @request POST:/auth/login
     */
    login: (data: LoginAdminDTO, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name Logout
     * @summary Admin logout
     * @request POST:/auth/logout
     */
    logout: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/auth/logout`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name RefreshAccessToken
     * @summary Refresh access token
     * @request POST:/auth/refresh
     */
    refreshAccessToken: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/auth/refresh`,
        method: 'POST',
        format: 'json',
        ...params,
      }),
  };
  me = {
    /**
     * No description
     *
     * @tags Me
     * @name GetProfile
     * @summary Get profile of logged user
     * @request GET:/me/profile
     */
    getProfile: (params: RequestParams = {}) =>
      this.request<LoggedAdminProfileRO, any>({
        path: `/me/profile`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags Admin
     * @name CreateAdmin
     * @summary Create an admin
     * @request POST:/admins
     */
    createAdmin: (params: RequestParams = {}) =>
      this.request<AdminRO, ErrorRO>({
        path: `/admins`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
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
      this.request<AdminsRO, ErrorRO>({
        path: `/admins`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name UpdateAdmin
     * @summary Update admin data
     * @request PATCH:/admins/{id}
     */
    updateAdmin: (id: string, data: UpdateAdminDTO, params: RequestParams = {}) =>
      this.request<AdminRO, ErrorRO>({
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
     * @tags Admin
     * @name DeleteAdmin
     * @summary Delete an admin by id
     * @request DELETE:/admins/{id}
     */
    deleteAdmin: (id: string, params: RequestParams = {}) =>
      this.request<any, ErrorRO>({
        path: `/admins/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name GetAdmin
     * @summary Get admin
     * @request GET:/admins/{id}
     */
    getAdmin: (id: string, params: RequestParams = {}) =>
      this.request<AdminRO, ErrorRO>({
        path: `/admins/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name UpdateAdminUsername
     * @summary Update admin username
     * @request PATCH:/admins/{id}/username
     */
    updateAdminUsername: (id: string, data: UpdateAdminUsernameDTO, params: RequestParams = {}) =>
      this.request<AdminRO, ErrorRO>({
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
     * @tags Admin
     * @name RefreshAdminPassword
     * @summary Refresh admin password
     * @request PATCH:/admins/{id}/password
     */
    refreshAdminPassword: (id: string, params: RequestParams = {}) =>
      this.request<AdminRefreshedPasswordRO, ErrorRO>({
        path: `/admins/${id}/password`,
        method: 'PATCH',
        format: 'json',
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags User
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
     * @tags User
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
     * @tags User
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
     * @tags User
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
     * @tags User
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
     * @tags User
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
     * @tags User
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
     * @tags User
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
     * @tags User
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
  artist = {
    /**
     * No description
     *
     * @tags Artist
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
     * @tags Artist
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
     * @tags Artist
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
     * @tags Artist
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
     * @tags Artist
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
     * @tags Artist
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
     * @tags Artist
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
     * @tags Artist
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
     * @tags Artist
     * @name CreateAlbum
     * @summary Create album
     * @request POST:/artists/{id}/albums
     */
    createAlbum: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          albumId: string;
        },
        any
      >({
        path: `/artists/${id}/albums`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artist
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
     * @tags Artist
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
  album = {
    /**
     * No description
     *
     * @tags Album
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
     * @tags Album
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
     * @tags Album
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
     * @tags Album
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
     * @tags Album
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
     * @tags Album
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
     * @tags Album
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
     * @tags Album
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
  track = {
    /**
     * No description
     *
     * @tags Track
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
     * @tags Track
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
     * @tags Track
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
     * @tags Track
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
     * @tags Track
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
     * @tags Track
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
     * @tags Track
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
  playlist = {
    /**
     * No description
     *
     * @tags Playlist
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
     * @tags Playlist
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
     * @tags Playlist
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
     * @tags Playlist
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
     * @tags Playlist
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
     * @tags Playlist
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
     * @tags Playlist
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
     * @tags Playlist
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
     * @tags Playlist
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
  search = {
    /**
     * No description
     *
     * @tags Search
     * @name Search
     * @summary Global search
     * @request GET:/search
     */
    search: (
      query: {
        /**
         * QueryTypes
         * @example "eminem"
         */
        q: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResultRO, any>({
        path: `/search`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Search
     * @name UserSearch
     * @summary User search
     * @request GET:/search/users
     */
    userSearch: (
      query: {
        /**
         * QueryTypes
         * @example "james007"
         */
        q: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IndexedUserRO[], any>({
        path: `/search/users`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Search
     * @name ArtistSearch
     * @summary Artist search
     * @request GET:/search/artists
     */
    artistSearch: (
      query: {
        /**
         * QueryTypes
         * @example "eminem"
         */
        q: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IndexedArtistRO[], any>({
        path: `/search/artists`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Search
     * @name AlbumSearch
     * @summary Album search
     * @request GET:/search/albums
     */
    albumSearch: (
      query: {
        /**
         * QueryTypes
         * @example "kamikaze"
         */
        q: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IndexedAlbumRO[], any>({
        path: `/search/albums`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Search
     * @name TrackSearch
     * @summary Track search
     * @request GET:/search/tracks
     */
    trackSearch: (
      query: {
        /**
         * QueryTypes
         * @example "lucky you"
         */
        q: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IndexedTrackRO[], any>({
        path: `/search/tracks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Search
     * @name PlaylistSearch
     * @summary Playlist search
     * @request GET:/search/playlists
     */
    playlistSearch: (
      query: {
        /**
         * QueryTypes
         * @example "hip-hop 2025"
         */
        q: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IndexedPlaylistRO[], any>({
        path: `/search/playlists`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @tags Upload
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
     * @tags Upload
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
     * @tags Upload
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
     * @tags Upload
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
}
