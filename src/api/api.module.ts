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
   * @example "Erling47"
   */
  username: string;
  /**
   * Password
   * @example "qjxgZcPjXzWmlD6"
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
   * @example "dbd5dbdcbd8d32c7baf96a8e"
   */
  id: string;
  /**
   * Name
   * @example "Ressie"
   */
  name: string;
  /** Role */
  role: LabelValueRO;
}

export interface AdminRO {
  /**
   * Id
   * @example "c6b65ac21a3fcf5e67e07dd9"
   */
  id: string;
  /**
   * Username
   * @example "Veda_Gorczany23"
   */
  username: string;
  /**
   * Name
   * @example "Keon"
   */
  name: string;
  /** Role */
  role: LabelValueRO;
  /** Block */
  isBlocked: boolean;
  /**
   * Reg. date
   * @format date-time
   * @example "2025-07-18T06:02:57.674Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2025-12-17T04:47:10.949Z"
   */
  updatedAt: string;
}

export interface UpdateAdminDTO {
  /**
   * Birth Name
   * @example "Araceli"
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
   * @example "Willy36"
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
   * @example "4a9e81dc8b31c0aabe3d4f3c"
   */
  id: string;
  /**
   * Username
   * @example "Florence_Wilkinson82"
   */
  username: string;
  /**
   * Birth name
   * @example "Valentina"
   */
  name: string;
  /**
   * Email
   * @example "Flavie_Haley20@hotmail.com"
   */
  email: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "1998-04-17T04:11:48.963Z"
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
   * @example "undefined/forenenst_knotty.webp"
   */
  avatar: string | null;
  /**
   * Accent color
   * @example "#5ce20a"
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
   * @example "2025-01-22T13:02:01.940Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2025-06-26T07:25:11.348Z"
   */
  updatedAt: string;
}

export interface UpdateUserDTO {
  /**
   * Birth name
   * @example "Urban"
   */
  name?: string;
  /**
   * Birth date
   * @format date-time
   * @example "1951-12-15T08:12:43.105Z"
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
   * @example "Garrick31"
   */
  username: string;
}

export interface UpdateUserEmailDTO {
  /**
   * Email
   * @example "Devin.Towne49@gmail.com"
   */
  email: string;
}

export interface UpdateUserAvatarDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/1306/2319?lock=102470446483819"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#c17fd1"
   */
  color?: string | null;
}

export interface ArtistRO {
  /**
   * Id
   * @example "cddb6efab8ca3b0cdd35fb99"
   */
  id: string;
  /**
   * Name
   * @example "Jeff"
   */
  name: string;
  /**
   * Birth name
   * @example "Mr. Wilbur Jerde"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-07-07T00:44:20.857Z"
   */
  birthDate: string | null;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "other enthusiast  👨🏼‍❤️‍👨🏾"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "undefined/stable.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "undefined/entice_whereas.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#97ca3d"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#909d26"
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
   * @example "2025-05-18T14:13:14.910Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-02-14T17:50:25.132Z"
   */
  updatedAt: string;
}

export interface UpdateArtistDTO {
  /**
   * Name
   * @example "Clair"
   */
  name?: string;
  /**
   * Birth name
   * @example "Byron Ruecker"
   */
  birthName?: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-03-08T20:45:36.119Z"
   */
  birthDate?: string | null;
  /**
   * Favorite genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Biography
   * @example "film lover"
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
   * @example "https://loremflickr.com/1376/695?lock=2665933774473742"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#f4a2de"
   */
  color?: string | null;
}

export interface AlbumRO {
  /**
   * Id
   * @example "fea3444efaa7bdd3e2dcf69c"
   */
  id: string;
  /**
   * Name
   * @example "Family Affair"
   */
  name: string;
  /** Artists */
  artists: ArtistRO[];
  /**
   * Artist ids
   * @example ["84baefdccafd02cf059b27e8"]
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
   * @example "https://loremflickr.com/1671/930?lock=187377211089"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#a83c34"
   */
  color: string | null;
  /**
   * Description
   * @example "Curso perspiciatis valde beneficium appello.
   * Veniam carus antiquus taedium ullus suus sperno defaeco.
   * Cresco cariosus velut caste mollitia creptio adsuesco.
   * Totidem creator quibusdam."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-05-18T05:20:13.243Z"
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
   * @example "2025-06-22T16:43:42.589Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-07-01T14:24:18.504Z"
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
   * @example "5ff144fc0917f3acea5a56c7"
   */
  id: string;
  /**
   * Name
   * @example "My Sharona"
   */
  name: string;
  /**
   * Album id
   * @example "7d1bca2ceebd8f5344eb2ddd"
   */
  albumId: string;
  /** Album */
  album: AlbumRO;
  /**
   * Ids of artist
   * @example ["95cdb3498c0e0f61843958ae"]
   */
  artistIds: string[];
  /** Primary artist */
  artists: ArtistRO[];
  /**
   * Ids of featured artist
   * @example ["864ddbf0d82aba9a29d0e6f0"]
   */
  featArtistIds: string[];
  /** Featured artist */
  featArtists: ArtistRO[];
  /**
   * Url
   * @example "https://variable-mousse.biz"
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
   * @example "2024-11-21T13:51:29.222Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-05-07T20:25:20.714Z"
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
   * @example "e456a91ab88861ad90bd2f76"
   */
  artistId: string;
}

export interface UpdateAlbumDTO {
  /**
   * Name
   * @example "Addicted to Love"
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
   * @example "Demo paens cena terra atrocitas adeo talus dignissimos coniuratio. Usque amplus decipio a una curtus contego perferendis coaegresco. Theologus repellendus cicuta. Subnecto deporto adsum teres ago benevolentia carbo optio stultus carcer. Totidem bene ustulo voluptatem turpis."
   */
  description?: string;
  /**
   * Release date
   * @format date-time
   * @example "2024-12-01T06:57:39.390Z"
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
   * @example ["470fdbdf1f0e5ebc8abd5fc1"]
   */
  artists: string[];
}

export interface UpdateAlbumCoverDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/1988/203?lock=7963379291989662"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#6eeffb"
   */
  color?: string | null;
}

export interface CreateTrackDTO {
  /**
   * Id of the album
   * @example "bb90cadcdd5e90fb9ad2cf5b"
   */
  albumId: string;
}

export interface UpdateTrackDTO {
  /**
   * Name
   * @example "Hey There Delilah"
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
   * @example ["b188d6eab2c931a1a7dc08b9"]
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
   * @example "e19b0e2bdfb8b6c2a4d57547"
   */
  ownerId: string;
}

export interface PlaylistRO {
  /**
   * Id
   * @example "6cbd9b3d974546778fdfa0ca"
   */
  id: string;
  /** Owner */
  owner: UserRO;
  /**
   * Name
   * @example "Pony Time"
   */
  name: string;
  /**
   * Genres
   * @example {"value":"HH","label":"Hip-Hop"}
   */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/1700/3950?lock=7155361563583835"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#5fd2da"
   */
  color: string | null;
  /**
   * Description
   * @example "Toties casus caute surculus laudantium tergum cogo excepturi terminatio cervus. Depraedor bibo vociferor tricesimus varius accusator volaticus. Ambitus degenero patior coniecto adsidue delicate coepi accusamus.
   * Occaecati arguo coerceo artificiose quaerat ventus pax convoco vere videlicet. Terra civis mollitia earum talio advoco tempus surculus via. Venustas canonicus utrimque vinculum cibus vomica varietas avarus.
   * Solio sto conor corpus velum utrimque. Communis tenax super adfectus vesica quidem tametsi aut arbitro deduco. Cruentus casus comptus amo virtus iure sursum assentator tamisium."
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
   * @example "2024-12-03T21:53:22.319Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-10-11T11:53:36.873Z"
   */
  updatedAt: string;
}

export interface UpdatePlaylistDTO {
  /**
   * Name
   * @example "I've Heard That Song Before"
   */
  name?: string;
  /**
   * Genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Description
   * @example "Amplitudo soluta laboriosam subnecto cinis conor denuncio credo dolor."
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
   * @example "https://loremflickr.com/992/1016?lock=4507435771382840"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#afe622"
   */
  color?: string | null;
}

export interface AddTrackInPlaylistDTO {
  /**
   * Track id
   * @example "ba3cae61fea4f3544e1ffd8a"
   */
  trackId: string;
}

export interface PlaylistTrackRO {
  /** Track */
  track: TrackRO | null;
  /**
   * Added date
   * @format date-time
   * @example "2025-04-20T07:19:31.660Z"
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
   * @example "b01bcce961d5e0eaba30d56d"
   */
  id: string;
  /**
   * Name
   * @example "Clovis"
   */
  name: string;
  /**
   * Avatar
   * @example "https://loremflickr.com/2851/2549?lock=1113244437532763"
   */
  avatar: string | null;
}

export interface IndexedSimplifiedArtistRO {
  /**
   * Id
   * @example "5ad36b3b8f8a0469acf7efc6"
   */
  id: string;
  /**
   * Name
   * @example "Melissa"
   */
  name: string;
}

export interface IndexedAlbumRO {
  /**
   * Id
   * @example "0083cde51ff5e4b1a0b32f3b"
   */
  id: string;
  /**
   * Name
   * @example "Nyasia"
   */
  name: string;
  /** Artists of the album */
  artists: IndexedSimplifiedArtistRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/Mkfah/588/2171"
   */
  cover: string | null;
}

export interface IndexedTrackRO {
  /**
   * Id
   * @example "a4656d84e3ad7d850bed7c98"
   */
  id: string;
  /**
   * Name
   * @example "Charlene"
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
   * @example "a87daea65b0cab6d73cca4fa"
   */
  id: string;
  /**
   * Name
   * @example "Thora_Larkin"
   */
  name: string;
  /**
   * Email
   * @example "Reanna_Murray58@hotmail.com"
   */
  email: string | null;
  /**
   * Avatar
   * @example "https://picsum.photos/seed/KSFbxn/2942/1742"
   */
  avatar: string | null;
}

export interface IndexedPlaylistRO {
  /**
   * Id
   * @example "4ee8cdb8ffa25dd7bdfafddd"
   */
  id: string;
  /**
   * Name
   * @example "Carissa"
   */
  name: string;
  /**
   * Cover
   * @example "https://loremflickr.com/3956/2121?lock=5998097532570723"
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
   * @example "sticky_midst.mp3"
   */
  name: string;
  /**
   * Original name
   * @example "though_contrast.mp3"
   */
  originalName: string;
  /**
   * URL
   * @example "/tmp/tributary_slowly_pish.mp3"
   */
  fullPath: string;
  /**
   * URL
   * @example "undefined/whoa.mp3"
   */
  path: string;
  /**
   * Size
   * @example 10000
   */
  size: number;
  /**
   * Type
   * @example "application/x-httpd-php"
   */
  type: string;
  /**
   * Date
   * @format date-time
   * @example "2025-04-14T05:21:17.136Z"
   */
  uploadedAt: string;
  /**
   * Expires Date
   * @format date-time
   * @example "2025-05-07T02:34:58.006Z"
   */
  expiresAt: string;
}

export interface MetadataRO {
  /**
   * Regions
   * @example "6def19d6340eaeab0894fbda"
   */
  regions: LabelValueRO[];
  /**
   * Genres
   * @example "004ecdfedde77e3444f1fa48"
   */
  genres: LabelValueRO[];
  /**
   * Admin roles
   * @example "c7bbafcd1ccfabcfe84ca9ab"
   */
  adminRoles: LabelValueRO[];
  /**
   * Album types
   * @example "f4e51add6851ee7dfadb3703"
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
      this.request<AdminRO, any>({
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
     * @tags Admin
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
     * @tags Admin
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
     * @tags Admin
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
     * @tags Admin
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
     * @tags Admin
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
