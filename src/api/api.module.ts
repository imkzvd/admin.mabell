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
   * @example "Jermey_Zulauf17"
   */
  username: string;
  /**
   * Password
   * @example "RgaSPK_JXIzmvOW"
   */
  password: string;
}

export interface LabelValueRO {
  /**
   * Value
   * @example "Hip-Hop"
   */
  value: string;
  /**
   * Label
   * @example "HH"
   */
  label: string;
}

export interface LoggedAdminProfileRO {
  /**
   * Id
   * @example "aa0d2d563fdfb198284cbeed"
   */
  id: string;
  /**
   * Name
   * @example "Jensen"
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
   * @example "f6f3ebc99cf5dfde2b06fd7d"
   */
  id: string;
  /**
   * Username
   * @example "Parker57"
   */
  username: string;
  /**
   * Name
   * @example "Ernest"
   */
  name: string;
  /** Role */
  role: LabelValueRO;
  /** Block */
  isBlocked: boolean;
  /**
   * Reg. date
   * @format date-time
   * @example "2026-01-24T22:40:00.804Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2026-07-05T02:33:03.682Z"
   */
  updatedAt: string;
}

export interface UpdateAdminDTO {
  /**
   * Birth Name
   * @example "Lavonne"
   */
  name?: string;
  /**
   * Role
   * @example "GST"
   */
  role?: string;
  /**
   * Block
   * @example true
   */
  isBlocked?: boolean;
}

export interface UpdateAdminUsernameDTO {
  /**
   * Username
   * @example "Gregoria66"
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
   * @example "dbd06cb9cbed5aa229caa887"
   */
  id: string;
  /**
   * Username
   * @example "Jordon_Barton19"
   */
  username: string;
  /**
   * Birth name
   * @example "Evalyn"
   */
  name: string;
  /**
   * Email
   * @example "Shaina.Kautzer@hotmail.com"
   */
  email: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "1972-08-24T17:23:49.574Z"
   */
  birthDate: string | null;
  /** Region */
  region: LabelValueRO;
  /** Favorite genres */
  genres: LabelValueRO[];
  /**
   * Avatar URL
   * @example "https://admin-api.mabell.fun/reapply_until.webp"
   */
  avatar: string | null;
  /**
   * Accent color
   * @example "#a48b8a"
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
   * @example "2026-02-28T12:35:48.836Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2026-02-07T17:04:32.972Z"
   */
  updatedAt: string;
}

export interface UpdateUserDTO {
  /**
   * Birth name
   * @example "Leopold"
   */
  name?: string;
  /**
   * Birth date
   * @format date-time
   * @example "2005-12-12T09:25:21.711Z"
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
   * @example "Vesta_Abbott"
   */
  username: string;
}

export interface UpdateUserEmailDTO {
  /**
   * Email
   * @example "Hugh.Pagac16@gmail.com"
   */
  email: string;
}

export interface UpdateUserAvatarDTO {
  /**
   * Id of the uploaded file
   * @example "https://picsum.photos/seed/lwlMUdUSR/3834/3485"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#9d8bfc"
   */
  color?: string | null;
}

export interface ArtistRO {
  /**
   * Id
   * @example "14a49e4bb56eecc0200ebc2e"
   */
  id: string;
  /**
   * Name
   * @example "Jett"
   */
  name: string;
  /**
   * Birth name
   * @example "Mrs. Gloria Barton"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-06-04T10:30:44.230Z"
   */
  birthDate: string | null;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "ravioli devotee, singer 🛠️"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "https://admin-api.mabell.fun/but_whether.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "https://admin-api.mabell.fun/rule_even.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#7c6e42"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#ce2b53"
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
   * @example "2025-04-04T06:37:34.187Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-10-03T22:01:00.809Z"
   */
  updatedAt: string;
}

export interface UpdateArtistDTO {
  /**
   * Name
   * @example "Kiara"
   */
  name?: string;
  /**
   * Birth name
   * @example "Miss Alberta Gibson-Sanford"
   */
  birthName?: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-05-24T13:18:44.055Z"
   */
  birthDate?: string | null;
  /**
   * Favorite genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Biography
   * @example "person, patriot"
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
   * @example "https://loremflickr.com/2191/3277?lock=3999734831003937"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#49cf4c"
   */
  color?: string | null;
}

export interface SimplifiedArtistRO {
  /**
   * Id
   * @example "c5a978bced271f06ad1ae4b8"
   */
  id: string;
  /**
   * Name
   * @example "Kallie"
   */
  name: string;
  /**
   * Public
   * @example true
   */
  isPublic: boolean;
}

export interface AlbumRO {
  /**
   * Id
   * @example "5dc509dde1b92effbc5f6dc2"
   */
  id: string;
  /**
   * Name
   * @example "Eight Days a Week"
   */
  name: string;
  /** Artists */
  artists: SimplifiedArtistRO[];
  /**
   * Artist ids
   * @example ["b512fe7beddfcfb8db46164f"]
   */
  artistIds: string[];
  /** Type */
  type: LabelValueRO;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/tc8SWp/2768/2930"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#35ecfd"
   */
  color: string | null;
  /**
   * Description
   * @example "Thema cursim animadverto.
   * Conservo ullam accendo."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-06-15T16:10:13.108Z"
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
   * @example "2025-02-07T21:58:24.463Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-09-06T04:32:31.020Z"
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
   * @example "c24ff733ce0fc2b89eab5edd"
   */
  id: string;
  /**
   * Name
   * @example "Wicked Game"
   */
  name: string;
  /**
   * Album id
   * @example "bb5efa2ccd6af961c144c514"
   */
  albumId: string;
  /** Album */
  album: AlbumRO;
  /**
   * Ids of artist
   * @example ["aea9cab73bbdd92a6ba2e4f2"]
   */
  artistIds: string[];
  /** Primary artist */
  artists: SimplifiedArtistRO[];
  /**
   * Ids of featured artist
   * @example ["473aecf505430c3da4cbeab5"]
   */
  featArtistIds: string[];
  /** Featured artist */
  featArtists: SimplifiedArtistRO[];
  /**
   * Url
   * @example "https://incomplete-vista.com"
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
   * @example "2025-01-22T15:06:58.683Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-05-09T17:40:06.572Z"
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
   * @example "f6946be91750e95f7bfa3ba9"
   */
  artistId: string;
}

export interface UpdateAlbumDTO {
  /**
   * Name
   * @example "Love Shack"
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
   * @example "Textilis custodia agnitio bardus. Allatus corroboro crinis approbo. Adopto decimus synagoga venia demoror decor. Ustilo calco venustas cursus subvenio sub beneficium."
   */
  description?: string;
  /**
   * Release date
   * @format date-time
   * @example "2024-12-17T20:01:39.834Z"
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
   * @example ["d5dd5336f7fa288267ecc8d0"]
   */
  artists: string[];
}

export interface UpdateAlbumCoverDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/2265/826?lock=7343407510394622"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#26c657"
   */
  color?: string | null;
}

export interface CreateTrackDTO {
  /**
   * Id of the album
   * @example "edfbafc0ca3fd1cac2591412"
   */
  albumId: string;
}

export interface UpdateTrackDTO {
  /**
   * Name
   * @example "Lights"
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
   * @example ["b8ae52bf0fa9e6ac137b4bba"]
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
   * @example "2f6e7c5b28db8edc9dc935af"
   */
  userId: string;
}

export interface SimplifiedUserRO {
  /**
   * Id
   * @example "c34ce7eadbb44efc16cbb968"
   */
  id: string;
  /**
   * Birth name
   * @example "Jamel"
   */
  name: string;
  /**
   * Public
   * @example false
   */
  isPublic: boolean;
}

export interface PlaylistRO {
  /**
   * Id
   * @example "870ca6bcd5c583fb5beceacf"
   */
  id: string;
  /** User id */
  userId: string;
  /** User */
  user: SimplifiedUserRO;
  /**
   * Name
   * @example "Black Or White"
   */
  name: string;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/1172/1894?lock=8598612800659384"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#4f4fb0"
   */
  color: string | null;
  /**
   * Description
   * @example "Deripio illo cito patrocinor crepusculum statua beneficium. Velut certus thymbra creator caveo. Vigilo comprehendo denego cubitum vallum appono atrocitas decipio cognatus sponte.
   * Alii clam baiulus veniam vehemens temeritas utrimque doloremque. Adulescens suspendo deporto accusamus adduco cultura. Abduco virga aut articulus.
   * Combibo tenuis desolo atqui aestas adduco. Casus agnitio auctor laboriosam deludo adfectus verus tabernus. Cui vulnus qui adhuc succedo."
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
   * @example "2025-05-12T23:58:08.443Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-11-16T06:51:09.954Z"
   */
  updatedAt: string;
}

export interface UpdatePlaylistDTO {
  /**
   * Name
   * @example "Stagger Lee"
   */
  name?: string;
  /**
   * Genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Description
   * @example "Praesentium sperno alius adulatio delinquo odit compono suppellex curvo. Vehemens crapula consequuntur vinitor terminatio capto bestia. Aestivus auctus coadunatio comparo arx saepe administratio.
   * Veritatis apud coma pecto decerno. Claudeo conatus amplus spargo vitiosus. Recusandae clibanus blandior degenero adulescens universe tribuo decretum acsi.
   * Alias sol corpus fugiat. Casus torrens speculum torrens. Urbs vitium amplexus absque cupiditate angulus."
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
   * @example "https://loremflickr.com/268/2082?lock=3227014106793942"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#9a74bb"
   */
  color?: string | null;
}

export interface AddTrackInPlaylistDTO {
  /**
   * Track id
   * @example "15abe380adb47911bc6cbca9"
   */
  trackId: string;
}

export interface PlaylistsRO {
  /** Items */
  items: PlaylistRO[];
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

export interface PlaylistTrackRO {
  /** Track */
  track: TrackRO | null;
  /** Track Id */
  trackId: string;
  /**
   * Added date
   * @format date-time
   * @example "2024-10-21T12:18:03.045Z"
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
   * @example "bd8931607ded763b8cec2f3c"
   */
  id: string;
  /**
   * Name
   * @example "Herbert"
   */
  name: string;
  /**
   * Avatar
   * @example "https://loremflickr.com/952/1683?lock=1690490592754106"
   */
  avatar: string | null;
}

export interface IndexedSimplifiedArtistRO {
  /**
   * Id
   * @example "abaa647ae4db8abd2b0cb98a"
   */
  id: string;
  /**
   * Name
   * @example "Avery"
   */
  name: string;
}

export interface IndexedAlbumRO {
  /**
   * Id
   * @example "8a18bde0cbd3c7613a92ac89"
   */
  id: string;
  /**
   * Name
   * @example "Lilliana"
   */
  name: string;
  /** Artists of the album */
  artists: IndexedSimplifiedArtistRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/636/1027?lock=612945156680371"
   */
  cover: string | null;
}

export interface IndexedTrackRO {
  /**
   * Id
   * @example "ce9ef7c29c433aae3227b54f"
   */
  id: string;
  /**
   * Name
   * @example "Raul"
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
   * @example "ad6cc0db24fac8eefcddcae2"
   */
  id: string;
  /**
   * Name
   * @example "Lupe48"
   */
  name: string;
  /**
   * Email
   * @example "Mathew8@yahoo.com"
   */
  email: string | null;
  /**
   * Avatar
   * @example "https://picsum.photos/seed/H6AOhMQ/648/1245"
   */
  avatar: string | null;
}

export interface IndexedSimplifiedUserRO {
  /**
   * Id
   * @example "925d0f21daa7a2a0ab82d0bf"
   */
  id: string;
  /**
   * Name
   * @example "Jerad"
   */
  name: string;
}

export interface IndexedPlaylistRO {
  /**
   * Id
   * @example "7f077c7ddad3bf2e1dcaea6e"
   */
  id: string;
  /**
   * Name
   * @example "Geovanni"
   */
  name: string;
  /** Owner */
  owner: IndexedSimplifiedUserRO;
  /**
   * Cover
   * @example "https://loremflickr.com/3113/2068?lock=2095049616439932"
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
   * @example "where_unless_key.mp3"
   */
  name: string;
  /**
   * Original name
   * @example "flawed_limping.mp3"
   */
  originalName: string;
  /**
   * URL
   * @example "/tmp/till_inasmuch.mp3"
   */
  fullPath: string;
  /**
   * URL
   * @example "https://admin-api.mabell.fun/phew.mp3"
   */
  path: string;
  /**
   * Size
   * @example 10000
   */
  size: number;
  /**
   * Type
   * @example "text/javascript"
   */
  type: string;
  /**
   * Date
   * @format date-time
   * @example "2025-08-30T19:12:33.582Z"
   */
  uploadedAt: string;
  /**
   * Expires Date
   * @format date-time
   * @example "2024-11-27T15:25:55.648Z"
   */
  expiresAt: string;
}

export interface MetadataRO {
  /**
   * Regions
   * @example "a1f2e11c4ac3a8c76eef06d7"
   */
  regions: LabelValueRO[];
  /**
   * Genres
   * @example "fdd4e5ad0d81f4988019cc90"
   */
  genres: LabelValueRO[];
  /**
   * Admin roles
   * @example "8980a84f28bf0afcb78dda07"
   */
  adminRoles: LabelValueRO[];
  /**
   * Album types
   * @example "c0d5508dca64fe7c880526b4"
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
 * @version 1.0.0-alpha.6
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

    /**
     * No description
     *
     * @tags User
     * @name GetMabellUser
     * @summary Get mabell user
     * @request GET:/users/mabell
     */
    getMabellUser: (params: RequestParams = {}) =>
      this.request<UserRO, any>({
        path: `/users/mabell`,
        method: 'GET',
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
      query: {
        limit: number;
        offset: number;
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
     * @name GetUserPlaylists
     * @summary Get playlists
     * @request GET:/playlists
     */
    getUserPlaylists: (
      query: {
        /**
         * User Id
         * @example "c836eefa7adca743bcfd126f"
         */
        userId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistsRO, any>({
        path: `/playlists`,
        method: 'GET',
        query: query,
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
