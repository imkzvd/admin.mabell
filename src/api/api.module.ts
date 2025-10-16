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
   * @example "Pink_Crona66"
   */
  username: string;
  /**
   * Password
   * @example "_AqJfP96ubyqvMH"
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
   * @example "6b1bd0fdcc5b9a8fe44276cb"
   */
  id: string;
  /**
   * Name
   * @example "Kelvin"
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
   * @example "49bddfbe08dc0c25eab0adc2"
   */
  id: string;
  /**
   * Username
   * @example "Andre_Swaniawski-Bruen"
   */
  username: string;
  /**
   * Name
   * @example "Randy"
   */
  name: string;
  /** Role */
  role: LabelValueRO;
  /** Block */
  isBlocked: boolean;
  /**
   * Reg. date
   * @format date-time
   * @example "2026-06-13T06:57:04.074Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2025-06-04T19:23:08.652Z"
   */
  updatedAt: string;
}

export interface UpdateAdminDTO {
  /**
   * Birth Name
   * @example "Chasity"
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
   * @example "Cordie.Friesen"
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
   * @example "ca66eef5fb3170d6a2ade9a1"
   */
  id: string;
  /**
   * Username
   * @example "Alycia.Harber"
   */
  username: string;
  /**
   * Birth name
   * @example "Charlotte"
   */
  name: string;
  /**
   * Email
   * @example "Buddy.Bauch40@yahoo.com"
   */
  email: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2004-06-30T10:24:04.033Z"
   */
  birthDate: string | null;
  /** Region */
  region: LabelValueRO;
  /** Favorite genres */
  genres: LabelValueRO[];
  /**
   * Avatar URL
   * @example "https://admin-api.mabell.fun/wildly_er.webp"
   */
  avatar: string | null;
  /**
   * Accent color
   * @example "#aad768"
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
   * @example "2025-08-16T21:21:02.472Z"
   */
  createdAt: string;
  /**
   * Update date
   * @format date-time
   * @example "2025-01-27T00:14:32.607Z"
   */
  updatedAt: string;
}

export interface UpdateUserDTO {
  /**
   * Birth name
   * @example "Johan"
   */
  name?: string;
  /**
   * Birth date
   * @format date-time
   * @example "1997-05-17T07:54:59.310Z"
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
   * @example "Zachary_Beahan49"
   */
  username: string;
}

export interface UpdateUserEmailDTO {
  /**
   * Email
   * @example "Libby96@gmail.com"
   */
  email: string;
}

export interface UpdateUserAvatarDTO {
  /**
   * Id of the uploaded file
   * @example "https://loremflickr.com/2708/2495?lock=631336639715373"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#b7aa4c"
   */
  color?: string | null;
}

export interface ArtistRO {
  /**
   * Id
   * @example "29efa72dde0bc9e0b56f002b"
   */
  id: string;
  /**
   * Name
   * @example "Roscoe"
   */
  name: string;
  /**
   * Birth name
   * @example "Nelson Schaefer"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-03-07T09:30:48.338Z"
   */
  birthDate: string | null;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "heartache devotee, foodie ⏸️"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "https://admin-api.mabell.fun/whether.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "https://admin-api.mabell.fun/yippee_through.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#ceaf90"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#dccc2f"
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
   * @example "2025-07-05T16:05:21.494Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-02-05T00:16:32.872Z"
   */
  updatedAt: string;
}

export interface UpdateArtistDTO {
  /**
   * Name
   * @example "Wilhelm"
   */
  name?: string;
  /**
   * Birth name
   * @example "Carole Blanda II"
   */
  birthName?: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2024-10-20T05:22:38.898Z"
   */
  birthDate?: string | null;
  /**
   * Favorite genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Biography
   * @example "inventor, business owner"
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
   * @example "https://picsum.photos/seed/MY8Opo/3546/3955"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#af6112"
   */
  color?: string | null;
}

export interface SimplifiedArtistRO {
  /**
   * Id
   * @example "e6bf0edc1ce50dbb2b9a1fbb"
   */
  id: string;
  /**
   * Name
   * @example "Theron"
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
   * @example "beb7c4c4ea1a7fb72ee12d03"
   */
  id: string;
  /**
   * Name
   * @example "La Bamba"
   */
  name: string;
  /** Artists */
  artists: SimplifiedArtistRO[];
  /**
   * Artist ids
   * @example ["bebeedccb32a10a6d3dac4de"]
   */
  artistIds: string[];
  /** Type */
  type: LabelValueRO;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/eGv0pW2B/2330/1555"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#e755db"
   */
  color: string | null;
  /**
   * Description
   * @example "Vester tego dapifer. Cui necessitatibus certe demum saepe voro. Pecus verus barba stillicidium tego torrens argumentum virga abundans aurum. Dapifer velociter amiculum umquam triduana attollo cornu paens. Totidem ascit vallum decerno adimpleo commodi incidunt candidus decens ocer."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-07-04T16:09:48.276Z"
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
   * @example "2024-11-13T08:09:34.143Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-01-10T10:41:40.186Z"
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
   * @example "d34df73edca337bfc998bba4"
   */
  id: string;
  /**
   * Name
   * @example "If I Didn't Care"
   */
  name: string;
  /**
   * Album id
   * @example "33c6cf1a557fa332af6d4c1c"
   */
  albumId: string;
  /** Album */
  album: AlbumRO;
  /**
   * Ids of artist
   * @example ["1e0c1cf58ace4ad2dda6a280"]
   */
  artistIds: string[];
  /** Primary artist */
  artists: SimplifiedArtistRO[];
  /**
   * Ids of featured artist
   * @example ["f2347acdf751c1f8a3ed5e90"]
   */
  featArtistIds: string[];
  /** Featured artist */
  featArtists: SimplifiedArtistRO[];
  /**
   * Url
   * @example "https://perky-impact.biz/"
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
   * @example "2024-12-18T21:33:54.510Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-04-04T01:43:22.909Z"
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
   * @example "a983c3e91feccf9186b7e454"
   */
  artistId: string;
}

export interface UpdateAlbumDTO {
  /**
   * Name
   * @example "Locked Out Of Heaven"
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
   * @example "Ter deduco altus sum cibus thesis stabilis balbus aedificium. Accusator cribro theatrum arguo crastinus strues commemoro. Acceptus coerceo ulciscor.
   * Ducimus attollo defetiscor templum carcer deleo cognatus. Deserunt cupio concedo. Sperno tergeo urbanus creber titulus virga.
   * Demitto auxilium ustilo nostrum asporto defungo abeo amplitudo aspicio argumentum. Conduco tot cogito ustulo ultio. Desipio illum xiphias celer."
   */
  description?: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-09-29T23:15:41.200Z"
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
   * @example ["adad8eceea9bdcec4cb8dcea"]
   */
  artists: string[];
}

export interface UpdateAlbumCoverDTO {
  /**
   * Id of the uploaded file
   * @example "https://picsum.photos/seed/PnrjYtki/353/3427"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#ec07bf"
   */
  color?: string | null;
}

export interface CreateTrackDTO {
  /**
   * Id of the album
   * @example "a0c46d3f5ab6f8ac7fbcf92c"
   */
  albumId: string;
}

export interface UpdateTrackDTO {
  /**
   * Name
   * @example "Jumpin' Jack Flash"
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
   * @example ["fd3c6a88be342d3fae98caee"]
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
   * @example "a0faef976e03b9e82b76bc44"
   */
  userId: string;
}

export interface SimplifiedUserRO {
  /**
   * Id
   * @example "3a192cc51aa2fc635ed9ad9c"
   */
  id: string;
  /**
   * Birth name
   * @example "Clementine"
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
   * @example "e9aaee4283feab4bc87ffb2f"
   */
  id: string;
  /** User id */
  userId: string;
  /** User */
  user: SimplifiedUserRO;
  /**
   * Name
   * @example "I'm Yours"
   */
  name: string;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/eskipzK1S/1248/2179"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#4a258a"
   */
  color: string | null;
  /**
   * Description
   * @example "Triduana distinctio temeritas subiungo veniam ter. Blandior nisi vilis harum temporibus venia adstringo confido culpa. Bos adeptio curto caelum corrupti."
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
   * @example "2025-04-27T19:54:18.648Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-05-27T13:11:58.563Z"
   */
  updatedAt: string;
}

export interface UpdatePlaylistDTO {
  /**
   * Name
   * @example "Say It Right"
   */
  name?: string;
  /**
   * Genres
   * @example ["HH"]
   */
  genres?: string[];
  /**
   * Description
   * @example "Coaegresco spargo abeo subnecto video. Alveus verumtamen tempora acceptus. Magnam aggredior tyrannus tamen depulso corrumpo certus. Cultura vilis curto tergiversatio ars terreo debitis velut aeternus."
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
   * @example "https://picsum.photos/seed/X09aeuN/2065/938"
   */
  fileId?: string | null;
  /**
   * Color
   * @example "#e4a2e2"
   */
  color?: string | null;
}

export interface AddTrackInPlaylistDTO {
  /**
   * Track id
   * @example "2068ce808862e138a3ced9d5"
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
   * @example "2025-02-02T15:51:00.429Z"
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
   * @example "1a0ed84e9e3940ddf0f6be2e"
   */
  id: string;
  /**
   * Name
   * @example "Sammy"
   */
  name: string;
  /**
   * Avatar
   * @example "https://picsum.photos/seed/D0JD8/2898/2879"
   */
  avatar: string | null;
  /** Type */
  type: string;
}

export interface IndexedArtistsRO {
  /** Items */
  items: IndexedArtistRO[];
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

export interface IndexedSimplifiedArtistRO {
  /**
   * Id
   * @example "e376df1c87f8a5ceaf5c12d7"
   */
  id: string;
  /**
   * Name
   * @example "Willy"
   */
  name: string;
}

export interface IndexedAlbumRO {
  /**
   * Id
   * @example "8dc30f0fcc5ea73007af8499"
   */
  id: string;
  /**
   * Name
   * @example "Vena"
   */
  name: string;
  /** Artists of the album */
  artists: IndexedSimplifiedArtistRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/DVmqzDw1JQ/3013/1035"
   */
  cover: string | null;
  /** Type */
  type: string;
}

export interface IndexedAlbumsRO {
  /** Items */
  items: IndexedAlbumRO[];
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

export interface IndexedSimplifiedAlbumRO {
  /**
   * Id
   * @example "fe8ca399ed7fff9cebfeacdc"
   */
  id: string;
  /**
   * Name
   * @example "Felicia"
   */
  name: string;
}

export interface IndexedTrackRO {
  /**
   * Id
   * @example "b9e8cdffecfbb6c7b0e12cce"
   */
  id: string;
  /**
   * Name
   * @example "Gardner"
   */
  name: string;
  /** Artists of the album */
  album: IndexedSimplifiedAlbumRO;
  /**
   * Featured artists
   * @example [null]
   */
  artists: IndexedSimplifiedArtistRO[];
  /**
   * Featured artists
   * @example [null]
   */
  featArtists: IndexedSimplifiedArtistRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/2577/3840?lock=5069893735798227"
   */
  cover: string | null;
  /** Type */
  type: string;
}

export interface IndexedTracksRO {
  /** Items */
  items: IndexedTrackRO[];
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

export interface IndexedSimplifiedUserRO {
  /**
   * Id
   * @example "9de13ecbdce9cdbbfd9b43ed"
   */
  id: string;
  /**
   * Name
   * @example "Jess"
   */
  name: string;
}

export interface IndexedPlaylistRO {
  /**
   * Id
   * @example "af4ff5fbcaaad411a0fe7ff7"
   */
  id: string;
  /**
   * Name
   * @example "Luisa"
   */
  name: string;
  /** User */
  user: IndexedSimplifiedUserRO;
  /**
   * Cover
   * @example "https://loremflickr.com/82/2215?lock=4018044656105386"
   */
  cover: string | null;
  /** Type */
  type: string;
}

export interface IndexedPlaylistsRO {
  /** Items */
  items: IndexedPlaylistRO[];
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

export interface IndexedUserRO {
  /**
   * Id
   * @example "c7fe221caf2b26ab1cd07db5"
   */
  id: string;
  /**
   * Name
   * @example "Emilia80"
   */
  name: string;
  /**
   * Email
   * @example "Janet.Beatty@hotmail.com"
   */
  email: string | null;
  /**
   * Avatar
   * @example "https://picsum.photos/seed/TK8Ln/3268/3107"
   */
  avatar: string | null;
}

export interface IndexedUsersRO {
  /** Items */
  items: IndexedUserRO[];
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

export interface SearchResultRO {
  /** Artists */
  artists: IndexedArtistsRO;
  /** Albums */
  albums: IndexedAlbumsRO;
  /** Tracks */
  tracks: IndexedTracksRO;
  /** Playlists */
  playlists: IndexedPlaylistsRO;
  /** Users */
  users: IndexedUsersRO;
  /** Top results */
  topResults: IndexedPlaylistRO[];
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
   * @example "before_hence.mp3"
   */
  name: string;
  /**
   * Original name
   * @example "who.mp3"
   */
  originalName: string;
  /**
   * URL
   * @example "/tmp/close_clear_cut_inure.mp3"
   */
  fullPath: string;
  /**
   * URL
   * @example "https://admin-api.mabell.fun/clearly_worth.mp3"
   */
  path: string;
  /**
   * Size
   * @example 10000
   */
  size: number;
  /**
   * Type
   * @example "application/vnd.rar"
   */
  type: string;
  /**
   * Date
   * @format date-time
   * @example "2024-12-21T17:42:32.831Z"
   */
  uploadedAt: string;
  /**
   * Expires Date
   * @format date-time
   * @example "2025-02-04T10:31:11.583Z"
   */
  expiresAt: string;
}

export interface MetadataRO {
  /**
   * Regions
   * @example "f2c53a1fb5c31c8895c56dba"
   */
  regions: LabelValueRO[];
  /**
   * Genres
   * @example "6f801ad9fafbc4b71e44c84d"
   */
  genres: LabelValueRO[];
  /**
   * Admin roles
   * @example "dd22bcf26bafd6af857c9c2d"
   */
  adminRoles: LabelValueRO[];
  /**
   * Album types
   * @example "deadf0df13af7e328bddf4c6"
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
         * @example "2cc06bed49c0bb7cf3a8adb0"
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
      this.request<IndexedUsersRO, any>({
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
      this.request<IndexedArtistsRO, any>({
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
      this.request<IndexedAlbumsRO, any>({
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
      this.request<IndexedTracksRO, any>({
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
      this.request<IndexedPlaylistsRO, any>({
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
