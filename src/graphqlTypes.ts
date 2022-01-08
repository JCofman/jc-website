export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type Author = {
  __typename?: 'Author';
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type AuthorFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  summary?: InputMaybe<StringQueryOperatorInput>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type Fields = {
  __typename?: 'Fields';
  slug?: Maybe<Scalars['String']>;
};

export type FieldsFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildMdxBody = 'childMdx___body',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxFieldsDate = 'childMdx___fields___date',
  ChildMdxFieldsSlug = 'childMdx___fields___slug',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterFlag = 'childMdx___frontmatter___Flag',
  ChildMdxFrontmatterLastVisitDateStart = 'childMdx___frontmatter___Last_visit_date___start',
  ChildMdxFrontmatterLatitude = 'childMdx___frontmatter___Latitude',
  ChildMdxFrontmatterLongitude = 'childMdx___frontmatter___Longitude',
  ChildMdxFrontmatterMarkerOffsetX = 'childMdx___frontmatter___MarkerOffsetX',
  ChildMdxFrontmatterMarkerOffsetY = 'childMdx___frontmatter___MarkerOffsetY',
  ChildMdxFrontmatterName = 'childMdx___frontmatter___Name',
  ChildMdxFrontmatterTextOffsetX = 'childMdx___frontmatter___TextOffsetX',
  ChildMdxFrontmatterTextOffsetY = 'childMdx___frontmatter___TextOffsetY',
  ChildMdxFrontmatterVisited = 'childMdx___frontmatter___Visited',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterExcerpt = 'childMdx___frontmatter___excerpt',
  ChildMdxFrontmatterFeaturedImageAbsolutePath = 'childMdx___frontmatter___featuredImage___absolutePath',
  ChildMdxFrontmatterFeaturedImageAccessTime = 'childMdx___frontmatter___featuredImage___accessTime',
  ChildMdxFrontmatterFeaturedImageAtime = 'childMdx___frontmatter___featuredImage___atime',
  ChildMdxFrontmatterFeaturedImageAtimeMs = 'childMdx___frontmatter___featuredImage___atimeMs',
  ChildMdxFrontmatterFeaturedImageBase = 'childMdx___frontmatter___featuredImage___base',
  ChildMdxFrontmatterFeaturedImageBirthTime = 'childMdx___frontmatter___featuredImage___birthTime',
  ChildMdxFrontmatterFeaturedImageBirthtime = 'childMdx___frontmatter___featuredImage___birthtime',
  ChildMdxFrontmatterFeaturedImageBirthtimeMs = 'childMdx___frontmatter___featuredImage___birthtimeMs',
  ChildMdxFrontmatterFeaturedImageBlksize = 'childMdx___frontmatter___featuredImage___blksize',
  ChildMdxFrontmatterFeaturedImageBlocks = 'childMdx___frontmatter___featuredImage___blocks',
  ChildMdxFrontmatterFeaturedImageChangeTime = 'childMdx___frontmatter___featuredImage___changeTime',
  ChildMdxFrontmatterFeaturedImageChildren = 'childMdx___frontmatter___featuredImage___children',
  ChildMdxFrontmatterFeaturedImageChildrenImageSharp = 'childMdx___frontmatter___featuredImage___childrenImageSharp',
  ChildMdxFrontmatterFeaturedImageChildrenMdx = 'childMdx___frontmatter___featuredImage___childrenMdx',
  ChildMdxFrontmatterFeaturedImageCtime = 'childMdx___frontmatter___featuredImage___ctime',
  ChildMdxFrontmatterFeaturedImageCtimeMs = 'childMdx___frontmatter___featuredImage___ctimeMs',
  ChildMdxFrontmatterFeaturedImageDev = 'childMdx___frontmatter___featuredImage___dev',
  ChildMdxFrontmatterFeaturedImageDir = 'childMdx___frontmatter___featuredImage___dir',
  ChildMdxFrontmatterFeaturedImageExt = 'childMdx___frontmatter___featuredImage___ext',
  ChildMdxFrontmatterFeaturedImageExtension = 'childMdx___frontmatter___featuredImage___extension',
  ChildMdxFrontmatterFeaturedImageGid = 'childMdx___frontmatter___featuredImage___gid',
  ChildMdxFrontmatterFeaturedImageId = 'childMdx___frontmatter___featuredImage___id',
  ChildMdxFrontmatterFeaturedImageIno = 'childMdx___frontmatter___featuredImage___ino',
  ChildMdxFrontmatterFeaturedImageMode = 'childMdx___frontmatter___featuredImage___mode',
  ChildMdxFrontmatterFeaturedImageModifiedTime = 'childMdx___frontmatter___featuredImage___modifiedTime',
  ChildMdxFrontmatterFeaturedImageMtime = 'childMdx___frontmatter___featuredImage___mtime',
  ChildMdxFrontmatterFeaturedImageMtimeMs = 'childMdx___frontmatter___featuredImage___mtimeMs',
  ChildMdxFrontmatterFeaturedImageName = 'childMdx___frontmatter___featuredImage___name',
  ChildMdxFrontmatterFeaturedImageNlink = 'childMdx___frontmatter___featuredImage___nlink',
  ChildMdxFrontmatterFeaturedImagePrettySize = 'childMdx___frontmatter___featuredImage___prettySize',
  ChildMdxFrontmatterFeaturedImagePublicUrl = 'childMdx___frontmatter___featuredImage___publicURL',
  ChildMdxFrontmatterFeaturedImageRdev = 'childMdx___frontmatter___featuredImage___rdev',
  ChildMdxFrontmatterFeaturedImageRelativeDirectory = 'childMdx___frontmatter___featuredImage___relativeDirectory',
  ChildMdxFrontmatterFeaturedImageRelativePath = 'childMdx___frontmatter___featuredImage___relativePath',
  ChildMdxFrontmatterFeaturedImageRoot = 'childMdx___frontmatter___featuredImage___root',
  ChildMdxFrontmatterFeaturedImageSize = 'childMdx___frontmatter___featuredImage___size',
  ChildMdxFrontmatterFeaturedImageSourceInstanceName = 'childMdx___frontmatter___featuredImage___sourceInstanceName',
  ChildMdxFrontmatterFeaturedImageUid = 'childMdx___frontmatter___featuredImage___uid',
  ChildMdxFrontmatterHeaderImageAbsolutePath = 'childMdx___frontmatter___headerImage___absolutePath',
  ChildMdxFrontmatterHeaderImageAccessTime = 'childMdx___frontmatter___headerImage___accessTime',
  ChildMdxFrontmatterHeaderImageAtime = 'childMdx___frontmatter___headerImage___atime',
  ChildMdxFrontmatterHeaderImageAtimeMs = 'childMdx___frontmatter___headerImage___atimeMs',
  ChildMdxFrontmatterHeaderImageBase = 'childMdx___frontmatter___headerImage___base',
  ChildMdxFrontmatterHeaderImageBirthTime = 'childMdx___frontmatter___headerImage___birthTime',
  ChildMdxFrontmatterHeaderImageBirthtime = 'childMdx___frontmatter___headerImage___birthtime',
  ChildMdxFrontmatterHeaderImageBirthtimeMs = 'childMdx___frontmatter___headerImage___birthtimeMs',
  ChildMdxFrontmatterHeaderImageBlksize = 'childMdx___frontmatter___headerImage___blksize',
  ChildMdxFrontmatterHeaderImageBlocks = 'childMdx___frontmatter___headerImage___blocks',
  ChildMdxFrontmatterHeaderImageChangeTime = 'childMdx___frontmatter___headerImage___changeTime',
  ChildMdxFrontmatterHeaderImageChildren = 'childMdx___frontmatter___headerImage___children',
  ChildMdxFrontmatterHeaderImageChildrenImageSharp = 'childMdx___frontmatter___headerImage___childrenImageSharp',
  ChildMdxFrontmatterHeaderImageChildrenMdx = 'childMdx___frontmatter___headerImage___childrenMdx',
  ChildMdxFrontmatterHeaderImageCtime = 'childMdx___frontmatter___headerImage___ctime',
  ChildMdxFrontmatterHeaderImageCtimeMs = 'childMdx___frontmatter___headerImage___ctimeMs',
  ChildMdxFrontmatterHeaderImageDev = 'childMdx___frontmatter___headerImage___dev',
  ChildMdxFrontmatterHeaderImageDir = 'childMdx___frontmatter___headerImage___dir',
  ChildMdxFrontmatterHeaderImageExt = 'childMdx___frontmatter___headerImage___ext',
  ChildMdxFrontmatterHeaderImageExtension = 'childMdx___frontmatter___headerImage___extension',
  ChildMdxFrontmatterHeaderImageGid = 'childMdx___frontmatter___headerImage___gid',
  ChildMdxFrontmatterHeaderImageId = 'childMdx___frontmatter___headerImage___id',
  ChildMdxFrontmatterHeaderImageIno = 'childMdx___frontmatter___headerImage___ino',
  ChildMdxFrontmatterHeaderImageMode = 'childMdx___frontmatter___headerImage___mode',
  ChildMdxFrontmatterHeaderImageModifiedTime = 'childMdx___frontmatter___headerImage___modifiedTime',
  ChildMdxFrontmatterHeaderImageMtime = 'childMdx___frontmatter___headerImage___mtime',
  ChildMdxFrontmatterHeaderImageMtimeMs = 'childMdx___frontmatter___headerImage___mtimeMs',
  ChildMdxFrontmatterHeaderImageName = 'childMdx___frontmatter___headerImage___name',
  ChildMdxFrontmatterHeaderImageNlink = 'childMdx___frontmatter___headerImage___nlink',
  ChildMdxFrontmatterHeaderImagePrettySize = 'childMdx___frontmatter___headerImage___prettySize',
  ChildMdxFrontmatterHeaderImagePublicUrl = 'childMdx___frontmatter___headerImage___publicURL',
  ChildMdxFrontmatterHeaderImageRdev = 'childMdx___frontmatter___headerImage___rdev',
  ChildMdxFrontmatterHeaderImageRelativeDirectory = 'childMdx___frontmatter___headerImage___relativeDirectory',
  ChildMdxFrontmatterHeaderImageRelativePath = 'childMdx___frontmatter___headerImage___relativePath',
  ChildMdxFrontmatterHeaderImageRoot = 'childMdx___frontmatter___headerImage___root',
  ChildMdxFrontmatterHeaderImageSize = 'childMdx___frontmatter___headerImage___size',
  ChildMdxFrontmatterHeaderImageSourceInstanceName = 'childMdx___frontmatter___headerImage___sourceInstanceName',
  ChildMdxFrontmatterHeaderImageUid = 'childMdx___frontmatter___headerImage___uid',
  ChildMdxFrontmatterId = 'childMdx___frontmatter___id',
  ChildMdxFrontmatterPath = 'childMdx___frontmatter___path',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxId = 'childMdx___id',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxFieldsDate = 'childrenMdx___fields___date',
  ChildrenMdxFieldsSlug = 'childrenMdx___fields___slug',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterFlag = 'childrenMdx___frontmatter___Flag',
  ChildrenMdxFrontmatterLastVisitDateStart = 'childrenMdx___frontmatter___Last_visit_date___start',
  ChildrenMdxFrontmatterLatitude = 'childrenMdx___frontmatter___Latitude',
  ChildrenMdxFrontmatterLongitude = 'childrenMdx___frontmatter___Longitude',
  ChildrenMdxFrontmatterMarkerOffsetX = 'childrenMdx___frontmatter___MarkerOffsetX',
  ChildrenMdxFrontmatterMarkerOffsetY = 'childrenMdx___frontmatter___MarkerOffsetY',
  ChildrenMdxFrontmatterName = 'childrenMdx___frontmatter___Name',
  ChildrenMdxFrontmatterTextOffsetX = 'childrenMdx___frontmatter___TextOffsetX',
  ChildrenMdxFrontmatterTextOffsetY = 'childrenMdx___frontmatter___TextOffsetY',
  ChildrenMdxFrontmatterVisited = 'childrenMdx___frontmatter___Visited',
  ChildrenMdxFrontmatterDate = 'childrenMdx___frontmatter___date',
  ChildrenMdxFrontmatterExcerpt = 'childrenMdx___frontmatter___excerpt',
  ChildrenMdxFrontmatterFeaturedImageAbsolutePath = 'childrenMdx___frontmatter___featuredImage___absolutePath',
  ChildrenMdxFrontmatterFeaturedImageAccessTime = 'childrenMdx___frontmatter___featuredImage___accessTime',
  ChildrenMdxFrontmatterFeaturedImageAtime = 'childrenMdx___frontmatter___featuredImage___atime',
  ChildrenMdxFrontmatterFeaturedImageAtimeMs = 'childrenMdx___frontmatter___featuredImage___atimeMs',
  ChildrenMdxFrontmatterFeaturedImageBase = 'childrenMdx___frontmatter___featuredImage___base',
  ChildrenMdxFrontmatterFeaturedImageBirthTime = 'childrenMdx___frontmatter___featuredImage___birthTime',
  ChildrenMdxFrontmatterFeaturedImageBirthtime = 'childrenMdx___frontmatter___featuredImage___birthtime',
  ChildrenMdxFrontmatterFeaturedImageBirthtimeMs = 'childrenMdx___frontmatter___featuredImage___birthtimeMs',
  ChildrenMdxFrontmatterFeaturedImageBlksize = 'childrenMdx___frontmatter___featuredImage___blksize',
  ChildrenMdxFrontmatterFeaturedImageBlocks = 'childrenMdx___frontmatter___featuredImage___blocks',
  ChildrenMdxFrontmatterFeaturedImageChangeTime = 'childrenMdx___frontmatter___featuredImage___changeTime',
  ChildrenMdxFrontmatterFeaturedImageChildren = 'childrenMdx___frontmatter___featuredImage___children',
  ChildrenMdxFrontmatterFeaturedImageChildrenImageSharp = 'childrenMdx___frontmatter___featuredImage___childrenImageSharp',
  ChildrenMdxFrontmatterFeaturedImageChildrenMdx = 'childrenMdx___frontmatter___featuredImage___childrenMdx',
  ChildrenMdxFrontmatterFeaturedImageCtime = 'childrenMdx___frontmatter___featuredImage___ctime',
  ChildrenMdxFrontmatterFeaturedImageCtimeMs = 'childrenMdx___frontmatter___featuredImage___ctimeMs',
  ChildrenMdxFrontmatterFeaturedImageDev = 'childrenMdx___frontmatter___featuredImage___dev',
  ChildrenMdxFrontmatterFeaturedImageDir = 'childrenMdx___frontmatter___featuredImage___dir',
  ChildrenMdxFrontmatterFeaturedImageExt = 'childrenMdx___frontmatter___featuredImage___ext',
  ChildrenMdxFrontmatterFeaturedImageExtension = 'childrenMdx___frontmatter___featuredImage___extension',
  ChildrenMdxFrontmatterFeaturedImageGid = 'childrenMdx___frontmatter___featuredImage___gid',
  ChildrenMdxFrontmatterFeaturedImageId = 'childrenMdx___frontmatter___featuredImage___id',
  ChildrenMdxFrontmatterFeaturedImageIno = 'childrenMdx___frontmatter___featuredImage___ino',
  ChildrenMdxFrontmatterFeaturedImageMode = 'childrenMdx___frontmatter___featuredImage___mode',
  ChildrenMdxFrontmatterFeaturedImageModifiedTime = 'childrenMdx___frontmatter___featuredImage___modifiedTime',
  ChildrenMdxFrontmatterFeaturedImageMtime = 'childrenMdx___frontmatter___featuredImage___mtime',
  ChildrenMdxFrontmatterFeaturedImageMtimeMs = 'childrenMdx___frontmatter___featuredImage___mtimeMs',
  ChildrenMdxFrontmatterFeaturedImageName = 'childrenMdx___frontmatter___featuredImage___name',
  ChildrenMdxFrontmatterFeaturedImageNlink = 'childrenMdx___frontmatter___featuredImage___nlink',
  ChildrenMdxFrontmatterFeaturedImagePrettySize = 'childrenMdx___frontmatter___featuredImage___prettySize',
  ChildrenMdxFrontmatterFeaturedImagePublicUrl = 'childrenMdx___frontmatter___featuredImage___publicURL',
  ChildrenMdxFrontmatterFeaturedImageRdev = 'childrenMdx___frontmatter___featuredImage___rdev',
  ChildrenMdxFrontmatterFeaturedImageRelativeDirectory = 'childrenMdx___frontmatter___featuredImage___relativeDirectory',
  ChildrenMdxFrontmatterFeaturedImageRelativePath = 'childrenMdx___frontmatter___featuredImage___relativePath',
  ChildrenMdxFrontmatterFeaturedImageRoot = 'childrenMdx___frontmatter___featuredImage___root',
  ChildrenMdxFrontmatterFeaturedImageSize = 'childrenMdx___frontmatter___featuredImage___size',
  ChildrenMdxFrontmatterFeaturedImageSourceInstanceName = 'childrenMdx___frontmatter___featuredImage___sourceInstanceName',
  ChildrenMdxFrontmatterFeaturedImageUid = 'childrenMdx___frontmatter___featuredImage___uid',
  ChildrenMdxFrontmatterHeaderImageAbsolutePath = 'childrenMdx___frontmatter___headerImage___absolutePath',
  ChildrenMdxFrontmatterHeaderImageAccessTime = 'childrenMdx___frontmatter___headerImage___accessTime',
  ChildrenMdxFrontmatterHeaderImageAtime = 'childrenMdx___frontmatter___headerImage___atime',
  ChildrenMdxFrontmatterHeaderImageAtimeMs = 'childrenMdx___frontmatter___headerImage___atimeMs',
  ChildrenMdxFrontmatterHeaderImageBase = 'childrenMdx___frontmatter___headerImage___base',
  ChildrenMdxFrontmatterHeaderImageBirthTime = 'childrenMdx___frontmatter___headerImage___birthTime',
  ChildrenMdxFrontmatterHeaderImageBirthtime = 'childrenMdx___frontmatter___headerImage___birthtime',
  ChildrenMdxFrontmatterHeaderImageBirthtimeMs = 'childrenMdx___frontmatter___headerImage___birthtimeMs',
  ChildrenMdxFrontmatterHeaderImageBlksize = 'childrenMdx___frontmatter___headerImage___blksize',
  ChildrenMdxFrontmatterHeaderImageBlocks = 'childrenMdx___frontmatter___headerImage___blocks',
  ChildrenMdxFrontmatterHeaderImageChangeTime = 'childrenMdx___frontmatter___headerImage___changeTime',
  ChildrenMdxFrontmatterHeaderImageChildren = 'childrenMdx___frontmatter___headerImage___children',
  ChildrenMdxFrontmatterHeaderImageChildrenImageSharp = 'childrenMdx___frontmatter___headerImage___childrenImageSharp',
  ChildrenMdxFrontmatterHeaderImageChildrenMdx = 'childrenMdx___frontmatter___headerImage___childrenMdx',
  ChildrenMdxFrontmatterHeaderImageCtime = 'childrenMdx___frontmatter___headerImage___ctime',
  ChildrenMdxFrontmatterHeaderImageCtimeMs = 'childrenMdx___frontmatter___headerImage___ctimeMs',
  ChildrenMdxFrontmatterHeaderImageDev = 'childrenMdx___frontmatter___headerImage___dev',
  ChildrenMdxFrontmatterHeaderImageDir = 'childrenMdx___frontmatter___headerImage___dir',
  ChildrenMdxFrontmatterHeaderImageExt = 'childrenMdx___frontmatter___headerImage___ext',
  ChildrenMdxFrontmatterHeaderImageExtension = 'childrenMdx___frontmatter___headerImage___extension',
  ChildrenMdxFrontmatterHeaderImageGid = 'childrenMdx___frontmatter___headerImage___gid',
  ChildrenMdxFrontmatterHeaderImageId = 'childrenMdx___frontmatter___headerImage___id',
  ChildrenMdxFrontmatterHeaderImageIno = 'childrenMdx___frontmatter___headerImage___ino',
  ChildrenMdxFrontmatterHeaderImageMode = 'childrenMdx___frontmatter___headerImage___mode',
  ChildrenMdxFrontmatterHeaderImageModifiedTime = 'childrenMdx___frontmatter___headerImage___modifiedTime',
  ChildrenMdxFrontmatterHeaderImageMtime = 'childrenMdx___frontmatter___headerImage___mtime',
  ChildrenMdxFrontmatterHeaderImageMtimeMs = 'childrenMdx___frontmatter___headerImage___mtimeMs',
  ChildrenMdxFrontmatterHeaderImageName = 'childrenMdx___frontmatter___headerImage___name',
  ChildrenMdxFrontmatterHeaderImageNlink = 'childrenMdx___frontmatter___headerImage___nlink',
  ChildrenMdxFrontmatterHeaderImagePrettySize = 'childrenMdx___frontmatter___headerImage___prettySize',
  ChildrenMdxFrontmatterHeaderImagePublicUrl = 'childrenMdx___frontmatter___headerImage___publicURL',
  ChildrenMdxFrontmatterHeaderImageRdev = 'childrenMdx___frontmatter___headerImage___rdev',
  ChildrenMdxFrontmatterHeaderImageRelativeDirectory = 'childrenMdx___frontmatter___headerImage___relativeDirectory',
  ChildrenMdxFrontmatterHeaderImageRelativePath = 'childrenMdx___frontmatter___headerImage___relativePath',
  ChildrenMdxFrontmatterHeaderImageRoot = 'childrenMdx___frontmatter___headerImage___root',
  ChildrenMdxFrontmatterHeaderImageSize = 'childrenMdx___frontmatter___headerImage___size',
  ChildrenMdxFrontmatterHeaderImageSourceInstanceName = 'childrenMdx___frontmatter___headerImage___sourceInstanceName',
  ChildrenMdxFrontmatterHeaderImageUid = 'childrenMdx___frontmatter___headerImage___uid',
  ChildrenMdxFrontmatterId = 'childrenMdx___frontmatter___id',
  ChildrenMdxFrontmatterPath = 'childrenMdx___frontmatter___path',
  ChildrenMdxFrontmatterTags = 'childrenMdx___frontmatter___tags',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type Frontmatter = {
  __typename?: 'Frontmatter';
  Flag?: Maybe<Scalars['String']>;
  Last_visit_date?: Maybe<MarkdownRemarkFrontmatterLast_Visit_Date>;
  Latitude?: Maybe<Scalars['String']>;
  Longitude?: Maybe<Scalars['String']>;
  MarkerOffsetX?: Maybe<Scalars['Int']>;
  MarkerOffsetY?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  TextOffsetX?: Maybe<Scalars['Int']>;
  TextOffsetY?: Maybe<Scalars['Int']>;
  Visited?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type FrontmatterDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FrontmatterFilterInput = {
  Flag?: InputMaybe<StringQueryOperatorInput>;
  Last_visit_date?: InputMaybe<MarkdownRemarkFrontmatterLast_Visit_DateFilterInput>;
  Latitude?: InputMaybe<StringQueryOperatorInput>;
  Longitude?: InputMaybe<StringQueryOperatorInput>;
  MarkerOffsetX?: InputMaybe<IntQueryOperatorInput>;
  MarkerOffsetY?: InputMaybe<IntQueryOperatorInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
  TextOffsetX?: InputMaybe<IntQueryOperatorInput>;
  TextOffsetY?: InputMaybe<IntQueryOperatorInput>;
  Visited?: InputMaybe<BooleanQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  depth?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MarkdownHeadingFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  children: Array<Node>;
  excerpt?: Maybe<Scalars['String']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  fields?: Maybe<Fields>;
  frontmatter?: Maybe<Frontmatter>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MarkdownWordCount>;
};


export type MarkdownRemarkExcerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  FieldsSlug = 'fields___slug',
  FrontmatterFlag = 'frontmatter___Flag',
  FrontmatterLastVisitDateStart = 'frontmatter___Last_visit_date___start',
  FrontmatterLatitude = 'frontmatter___Latitude',
  FrontmatterLongitude = 'frontmatter___Longitude',
  FrontmatterMarkerOffsetX = 'frontmatter___MarkerOffsetX',
  FrontmatterMarkerOffsetY = 'frontmatter___MarkerOffsetY',
  FrontmatterName = 'frontmatter___Name',
  FrontmatterTextOffsetX = 'frontmatter___TextOffsetX',
  FrontmatterTextOffsetY = 'frontmatter___TextOffsetY',
  FrontmatterVisited = 'frontmatter___Visited',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterTitle = 'frontmatter___title',
  Headings = 'headings',
  HeadingsDepth = 'headings___depth',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RawMarkdownBody = 'rawMarkdownBody',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words'
}

export type MarkdownRemarkFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  fields?: InputMaybe<FieldsFilterInput>;
  frontmatter?: InputMaybe<FrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatterLast_Visit_Date = {
  __typename?: 'MarkdownRemarkFrontmatterLast_visit_date';
  start?: Maybe<Scalars['Date']>;
};


export type MarkdownRemarkFrontmatterLast_Visit_DateStartArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterLast_Visit_DateFilterInput = {
  start?: InputMaybe<DateQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
  body: Scalars['String'];
  children: Array<Node>;
  excerpt: Scalars['String'];
  fields?: Maybe<MdxFields>;
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  mdxAST?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  rawBody: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
};


export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: InputMaybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: InputMaybe<Scalars['Int']>;
};

export type MdxConnection = {
  __typename?: 'MdxConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFields = {
  __typename?: 'MdxFields';
  date?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
};


export type MdxFieldsDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export enum MdxFieldsEnum {
  Body = 'body',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  FieldsDate = 'fields___date',
  FieldsSlug = 'fields___slug',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterFlag = 'frontmatter___Flag',
  FrontmatterLastVisitDateStart = 'frontmatter___Last_visit_date___start',
  FrontmatterLatitude = 'frontmatter___Latitude',
  FrontmatterLongitude = 'frontmatter___Longitude',
  FrontmatterMarkerOffsetX = 'frontmatter___MarkerOffsetX',
  FrontmatterMarkerOffsetY = 'frontmatter___MarkerOffsetY',
  FrontmatterName = 'frontmatter___Name',
  FrontmatterTextOffsetX = 'frontmatter___TextOffsetX',
  FrontmatterTextOffsetY = 'frontmatter___TextOffsetY',
  FrontmatterVisited = 'frontmatter___Visited',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterExcerpt = 'frontmatter___excerpt',
  FrontmatterFeaturedImageAbsolutePath = 'frontmatter___featuredImage___absolutePath',
  FrontmatterFeaturedImageAccessTime = 'frontmatter___featuredImage___accessTime',
  FrontmatterFeaturedImageAtime = 'frontmatter___featuredImage___atime',
  FrontmatterFeaturedImageAtimeMs = 'frontmatter___featuredImage___atimeMs',
  FrontmatterFeaturedImageBase = 'frontmatter___featuredImage___base',
  FrontmatterFeaturedImageBirthTime = 'frontmatter___featuredImage___birthTime',
  FrontmatterFeaturedImageBirthtime = 'frontmatter___featuredImage___birthtime',
  FrontmatterFeaturedImageBirthtimeMs = 'frontmatter___featuredImage___birthtimeMs',
  FrontmatterFeaturedImageBlksize = 'frontmatter___featuredImage___blksize',
  FrontmatterFeaturedImageBlocks = 'frontmatter___featuredImage___blocks',
  FrontmatterFeaturedImageChangeTime = 'frontmatter___featuredImage___changeTime',
  FrontmatterFeaturedImageChildImageSharpChildren = 'frontmatter___featuredImage___childImageSharp___children',
  FrontmatterFeaturedImageChildImageSharpGatsbyImageData = 'frontmatter___featuredImage___childImageSharp___gatsbyImageData',
  FrontmatterFeaturedImageChildImageSharpId = 'frontmatter___featuredImage___childImageSharp___id',
  FrontmatterFeaturedImageChildMdxBody = 'frontmatter___featuredImage___childMdx___body',
  FrontmatterFeaturedImageChildMdxChildren = 'frontmatter___featuredImage___childMdx___children',
  FrontmatterFeaturedImageChildMdxExcerpt = 'frontmatter___featuredImage___childMdx___excerpt',
  FrontmatterFeaturedImageChildMdxFileAbsolutePath = 'frontmatter___featuredImage___childMdx___fileAbsolutePath',
  FrontmatterFeaturedImageChildMdxHeadings = 'frontmatter___featuredImage___childMdx___headings',
  FrontmatterFeaturedImageChildMdxHtml = 'frontmatter___featuredImage___childMdx___html',
  FrontmatterFeaturedImageChildMdxId = 'frontmatter___featuredImage___childMdx___id',
  FrontmatterFeaturedImageChildMdxMdxAst = 'frontmatter___featuredImage___childMdx___mdxAST',
  FrontmatterFeaturedImageChildMdxRawBody = 'frontmatter___featuredImage___childMdx___rawBody',
  FrontmatterFeaturedImageChildMdxSlug = 'frontmatter___featuredImage___childMdx___slug',
  FrontmatterFeaturedImageChildMdxTableOfContents = 'frontmatter___featuredImage___childMdx___tableOfContents',
  FrontmatterFeaturedImageChildMdxTimeToRead = 'frontmatter___featuredImage___childMdx___timeToRead',
  FrontmatterFeaturedImageChildren = 'frontmatter___featuredImage___children',
  FrontmatterFeaturedImageChildrenImageSharp = 'frontmatter___featuredImage___childrenImageSharp',
  FrontmatterFeaturedImageChildrenImageSharpChildren = 'frontmatter___featuredImage___childrenImageSharp___children',
  FrontmatterFeaturedImageChildrenImageSharpGatsbyImageData = 'frontmatter___featuredImage___childrenImageSharp___gatsbyImageData',
  FrontmatterFeaturedImageChildrenImageSharpId = 'frontmatter___featuredImage___childrenImageSharp___id',
  FrontmatterFeaturedImageChildrenMdx = 'frontmatter___featuredImage___childrenMdx',
  FrontmatterFeaturedImageChildrenMdxBody = 'frontmatter___featuredImage___childrenMdx___body',
  FrontmatterFeaturedImageChildrenMdxChildren = 'frontmatter___featuredImage___childrenMdx___children',
  FrontmatterFeaturedImageChildrenMdxExcerpt = 'frontmatter___featuredImage___childrenMdx___excerpt',
  FrontmatterFeaturedImageChildrenMdxFileAbsolutePath = 'frontmatter___featuredImage___childrenMdx___fileAbsolutePath',
  FrontmatterFeaturedImageChildrenMdxHeadings = 'frontmatter___featuredImage___childrenMdx___headings',
  FrontmatterFeaturedImageChildrenMdxHtml = 'frontmatter___featuredImage___childrenMdx___html',
  FrontmatterFeaturedImageChildrenMdxId = 'frontmatter___featuredImage___childrenMdx___id',
  FrontmatterFeaturedImageChildrenMdxMdxAst = 'frontmatter___featuredImage___childrenMdx___mdxAST',
  FrontmatterFeaturedImageChildrenMdxRawBody = 'frontmatter___featuredImage___childrenMdx___rawBody',
  FrontmatterFeaturedImageChildrenMdxSlug = 'frontmatter___featuredImage___childrenMdx___slug',
  FrontmatterFeaturedImageChildrenMdxTableOfContents = 'frontmatter___featuredImage___childrenMdx___tableOfContents',
  FrontmatterFeaturedImageChildrenMdxTimeToRead = 'frontmatter___featuredImage___childrenMdx___timeToRead',
  FrontmatterFeaturedImageChildrenChildren = 'frontmatter___featuredImage___children___children',
  FrontmatterFeaturedImageChildrenId = 'frontmatter___featuredImage___children___id',
  FrontmatterFeaturedImageCtime = 'frontmatter___featuredImage___ctime',
  FrontmatterFeaturedImageCtimeMs = 'frontmatter___featuredImage___ctimeMs',
  FrontmatterFeaturedImageDev = 'frontmatter___featuredImage___dev',
  FrontmatterFeaturedImageDir = 'frontmatter___featuredImage___dir',
  FrontmatterFeaturedImageExt = 'frontmatter___featuredImage___ext',
  FrontmatterFeaturedImageExtension = 'frontmatter___featuredImage___extension',
  FrontmatterFeaturedImageGid = 'frontmatter___featuredImage___gid',
  FrontmatterFeaturedImageId = 'frontmatter___featuredImage___id',
  FrontmatterFeaturedImageIno = 'frontmatter___featuredImage___ino',
  FrontmatterFeaturedImageInternalContent = 'frontmatter___featuredImage___internal___content',
  FrontmatterFeaturedImageInternalContentDigest = 'frontmatter___featuredImage___internal___contentDigest',
  FrontmatterFeaturedImageInternalDescription = 'frontmatter___featuredImage___internal___description',
  FrontmatterFeaturedImageInternalFieldOwners = 'frontmatter___featuredImage___internal___fieldOwners',
  FrontmatterFeaturedImageInternalIgnoreType = 'frontmatter___featuredImage___internal___ignoreType',
  FrontmatterFeaturedImageInternalMediaType = 'frontmatter___featuredImage___internal___mediaType',
  FrontmatterFeaturedImageInternalOwner = 'frontmatter___featuredImage___internal___owner',
  FrontmatterFeaturedImageInternalType = 'frontmatter___featuredImage___internal___type',
  FrontmatterFeaturedImageMode = 'frontmatter___featuredImage___mode',
  FrontmatterFeaturedImageModifiedTime = 'frontmatter___featuredImage___modifiedTime',
  FrontmatterFeaturedImageMtime = 'frontmatter___featuredImage___mtime',
  FrontmatterFeaturedImageMtimeMs = 'frontmatter___featuredImage___mtimeMs',
  FrontmatterFeaturedImageName = 'frontmatter___featuredImage___name',
  FrontmatterFeaturedImageNlink = 'frontmatter___featuredImage___nlink',
  FrontmatterFeaturedImageParentChildren = 'frontmatter___featuredImage___parent___children',
  FrontmatterFeaturedImageParentId = 'frontmatter___featuredImage___parent___id',
  FrontmatterFeaturedImagePrettySize = 'frontmatter___featuredImage___prettySize',
  FrontmatterFeaturedImagePublicUrl = 'frontmatter___featuredImage___publicURL',
  FrontmatterFeaturedImageRdev = 'frontmatter___featuredImage___rdev',
  FrontmatterFeaturedImageRelativeDirectory = 'frontmatter___featuredImage___relativeDirectory',
  FrontmatterFeaturedImageRelativePath = 'frontmatter___featuredImage___relativePath',
  FrontmatterFeaturedImageRoot = 'frontmatter___featuredImage___root',
  FrontmatterFeaturedImageSize = 'frontmatter___featuredImage___size',
  FrontmatterFeaturedImageSourceInstanceName = 'frontmatter___featuredImage___sourceInstanceName',
  FrontmatterFeaturedImageUid = 'frontmatter___featuredImage___uid',
  FrontmatterHeaderImageAbsolutePath = 'frontmatter___headerImage___absolutePath',
  FrontmatterHeaderImageAccessTime = 'frontmatter___headerImage___accessTime',
  FrontmatterHeaderImageAtime = 'frontmatter___headerImage___atime',
  FrontmatterHeaderImageAtimeMs = 'frontmatter___headerImage___atimeMs',
  FrontmatterHeaderImageBase = 'frontmatter___headerImage___base',
  FrontmatterHeaderImageBirthTime = 'frontmatter___headerImage___birthTime',
  FrontmatterHeaderImageBirthtime = 'frontmatter___headerImage___birthtime',
  FrontmatterHeaderImageBirthtimeMs = 'frontmatter___headerImage___birthtimeMs',
  FrontmatterHeaderImageBlksize = 'frontmatter___headerImage___blksize',
  FrontmatterHeaderImageBlocks = 'frontmatter___headerImage___blocks',
  FrontmatterHeaderImageChangeTime = 'frontmatter___headerImage___changeTime',
  FrontmatterHeaderImageChildImageSharpChildren = 'frontmatter___headerImage___childImageSharp___children',
  FrontmatterHeaderImageChildImageSharpGatsbyImageData = 'frontmatter___headerImage___childImageSharp___gatsbyImageData',
  FrontmatterHeaderImageChildImageSharpId = 'frontmatter___headerImage___childImageSharp___id',
  FrontmatterHeaderImageChildMdxBody = 'frontmatter___headerImage___childMdx___body',
  FrontmatterHeaderImageChildMdxChildren = 'frontmatter___headerImage___childMdx___children',
  FrontmatterHeaderImageChildMdxExcerpt = 'frontmatter___headerImage___childMdx___excerpt',
  FrontmatterHeaderImageChildMdxFileAbsolutePath = 'frontmatter___headerImage___childMdx___fileAbsolutePath',
  FrontmatterHeaderImageChildMdxHeadings = 'frontmatter___headerImage___childMdx___headings',
  FrontmatterHeaderImageChildMdxHtml = 'frontmatter___headerImage___childMdx___html',
  FrontmatterHeaderImageChildMdxId = 'frontmatter___headerImage___childMdx___id',
  FrontmatterHeaderImageChildMdxMdxAst = 'frontmatter___headerImage___childMdx___mdxAST',
  FrontmatterHeaderImageChildMdxRawBody = 'frontmatter___headerImage___childMdx___rawBody',
  FrontmatterHeaderImageChildMdxSlug = 'frontmatter___headerImage___childMdx___slug',
  FrontmatterHeaderImageChildMdxTableOfContents = 'frontmatter___headerImage___childMdx___tableOfContents',
  FrontmatterHeaderImageChildMdxTimeToRead = 'frontmatter___headerImage___childMdx___timeToRead',
  FrontmatterHeaderImageChildren = 'frontmatter___headerImage___children',
  FrontmatterHeaderImageChildrenImageSharp = 'frontmatter___headerImage___childrenImageSharp',
  FrontmatterHeaderImageChildrenImageSharpChildren = 'frontmatter___headerImage___childrenImageSharp___children',
  FrontmatterHeaderImageChildrenImageSharpGatsbyImageData = 'frontmatter___headerImage___childrenImageSharp___gatsbyImageData',
  FrontmatterHeaderImageChildrenImageSharpId = 'frontmatter___headerImage___childrenImageSharp___id',
  FrontmatterHeaderImageChildrenMdx = 'frontmatter___headerImage___childrenMdx',
  FrontmatterHeaderImageChildrenMdxBody = 'frontmatter___headerImage___childrenMdx___body',
  FrontmatterHeaderImageChildrenMdxChildren = 'frontmatter___headerImage___childrenMdx___children',
  FrontmatterHeaderImageChildrenMdxExcerpt = 'frontmatter___headerImage___childrenMdx___excerpt',
  FrontmatterHeaderImageChildrenMdxFileAbsolutePath = 'frontmatter___headerImage___childrenMdx___fileAbsolutePath',
  FrontmatterHeaderImageChildrenMdxHeadings = 'frontmatter___headerImage___childrenMdx___headings',
  FrontmatterHeaderImageChildrenMdxHtml = 'frontmatter___headerImage___childrenMdx___html',
  FrontmatterHeaderImageChildrenMdxId = 'frontmatter___headerImage___childrenMdx___id',
  FrontmatterHeaderImageChildrenMdxMdxAst = 'frontmatter___headerImage___childrenMdx___mdxAST',
  FrontmatterHeaderImageChildrenMdxRawBody = 'frontmatter___headerImage___childrenMdx___rawBody',
  FrontmatterHeaderImageChildrenMdxSlug = 'frontmatter___headerImage___childrenMdx___slug',
  FrontmatterHeaderImageChildrenMdxTableOfContents = 'frontmatter___headerImage___childrenMdx___tableOfContents',
  FrontmatterHeaderImageChildrenMdxTimeToRead = 'frontmatter___headerImage___childrenMdx___timeToRead',
  FrontmatterHeaderImageChildrenChildren = 'frontmatter___headerImage___children___children',
  FrontmatterHeaderImageChildrenId = 'frontmatter___headerImage___children___id',
  FrontmatterHeaderImageCtime = 'frontmatter___headerImage___ctime',
  FrontmatterHeaderImageCtimeMs = 'frontmatter___headerImage___ctimeMs',
  FrontmatterHeaderImageDev = 'frontmatter___headerImage___dev',
  FrontmatterHeaderImageDir = 'frontmatter___headerImage___dir',
  FrontmatterHeaderImageExt = 'frontmatter___headerImage___ext',
  FrontmatterHeaderImageExtension = 'frontmatter___headerImage___extension',
  FrontmatterHeaderImageGid = 'frontmatter___headerImage___gid',
  FrontmatterHeaderImageId = 'frontmatter___headerImage___id',
  FrontmatterHeaderImageIno = 'frontmatter___headerImage___ino',
  FrontmatterHeaderImageInternalContent = 'frontmatter___headerImage___internal___content',
  FrontmatterHeaderImageInternalContentDigest = 'frontmatter___headerImage___internal___contentDigest',
  FrontmatterHeaderImageInternalDescription = 'frontmatter___headerImage___internal___description',
  FrontmatterHeaderImageInternalFieldOwners = 'frontmatter___headerImage___internal___fieldOwners',
  FrontmatterHeaderImageInternalIgnoreType = 'frontmatter___headerImage___internal___ignoreType',
  FrontmatterHeaderImageInternalMediaType = 'frontmatter___headerImage___internal___mediaType',
  FrontmatterHeaderImageInternalOwner = 'frontmatter___headerImage___internal___owner',
  FrontmatterHeaderImageInternalType = 'frontmatter___headerImage___internal___type',
  FrontmatterHeaderImageMode = 'frontmatter___headerImage___mode',
  FrontmatterHeaderImageModifiedTime = 'frontmatter___headerImage___modifiedTime',
  FrontmatterHeaderImageMtime = 'frontmatter___headerImage___mtime',
  FrontmatterHeaderImageMtimeMs = 'frontmatter___headerImage___mtimeMs',
  FrontmatterHeaderImageName = 'frontmatter___headerImage___name',
  FrontmatterHeaderImageNlink = 'frontmatter___headerImage___nlink',
  FrontmatterHeaderImageParentChildren = 'frontmatter___headerImage___parent___children',
  FrontmatterHeaderImageParentId = 'frontmatter___headerImage___parent___id',
  FrontmatterHeaderImagePrettySize = 'frontmatter___headerImage___prettySize',
  FrontmatterHeaderImagePublicUrl = 'frontmatter___headerImage___publicURL',
  FrontmatterHeaderImageRdev = 'frontmatter___headerImage___rdev',
  FrontmatterHeaderImageRelativeDirectory = 'frontmatter___headerImage___relativeDirectory',
  FrontmatterHeaderImageRelativePath = 'frontmatter___headerImage___relativePath',
  FrontmatterHeaderImageRoot = 'frontmatter___headerImage___root',
  FrontmatterHeaderImageSize = 'frontmatter___headerImage___size',
  FrontmatterHeaderImageSourceInstanceName = 'frontmatter___headerImage___sourceInstanceName',
  FrontmatterHeaderImageUid = 'frontmatter___headerImage___uid',
  FrontmatterId = 'frontmatter___id',
  FrontmatterPath = 'frontmatter___path',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterTitle = 'frontmatter___title',
  Headings = 'headings',
  HeadingsDepth = 'headings___depth',
  HeadingsValue = 'headings___value',
  Html = 'html',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MdxAst = 'mdxAST',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RawBody = 'rawBody',
  Slug = 'slug',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words'
}

export type MdxFieldsFilterInput = {
  date?: InputMaybe<DateQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter';
  Flag?: Maybe<Scalars['String']>;
  Last_visit_date?: Maybe<MdxFrontmatterLast_Visit_Date>;
  Latitude?: Maybe<Scalars['String']>;
  Longitude?: Maybe<Scalars['String']>;
  MarkerOffsetX?: Maybe<Scalars['Int']>;
  MarkerOffsetY?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  TextOffsetX?: Maybe<Scalars['Int']>;
  TextOffsetY?: Maybe<Scalars['Int']>;
  Visited?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<File>;
  headerImage?: Maybe<File>;
  id?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
};


export type MdxFrontmatterDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  Flag?: InputMaybe<StringQueryOperatorInput>;
  Last_visit_date?: InputMaybe<MdxFrontmatterLast_Visit_DateFilterInput>;
  Latitude?: InputMaybe<StringQueryOperatorInput>;
  Longitude?: InputMaybe<StringQueryOperatorInput>;
  MarkerOffsetX?: InputMaybe<IntQueryOperatorInput>;
  MarkerOffsetY?: InputMaybe<IntQueryOperatorInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
  TextOffsetX?: InputMaybe<IntQueryOperatorInput>;
  TextOffsetY?: InputMaybe<IntQueryOperatorInput>;
  Visited?: InputMaybe<BooleanQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<FileFilterInput>;
  headerImage?: InputMaybe<FileFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxFrontmatterLast_Visit_Date = {
  __typename?: 'MdxFrontmatterLast_visit_date';
  start?: Maybe<Scalars['Date']>;
};


export type MdxFrontmatterLast_Visit_DateStartArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MdxFrontmatterLast_Visit_DateFilterInput = {
  start?: InputMaybe<DateQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
  depth?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdxFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type Notion = Node & {
  __typename?: 'Notion';
  archived?: Maybe<Scalars['Boolean']>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  json?: Maybe<Scalars['String']>;
  markdownString?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  properties?: Maybe<NotionProperties>;
  raw?: Maybe<NotionRaw>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type NotionCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type NotionUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionConnection = {
  __typename?: 'NotionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<NotionEdge>;
  group: Array<NotionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Notion>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type NotionConnectionDistinctArgs = {
  field: NotionFieldsEnum;
};


export type NotionConnectionGroupArgs = {
  field: NotionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NotionConnectionMaxArgs = {
  field: NotionFieldsEnum;
};


export type NotionConnectionMinArgs = {
  field: NotionFieldsEnum;
};


export type NotionConnectionSumArgs = {
  field: NotionFieldsEnum;
};

export type NotionEdge = {
  __typename?: 'NotionEdge';
  next?: Maybe<Notion>;
  node: Notion;
  previous?: Maybe<Notion>;
};

export enum NotionFieldsEnum {
  Archived = 'archived',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFrontmatterFlag = 'childMarkdownRemark___frontmatter___Flag',
  ChildMarkdownRemarkFrontmatterLastVisitDateStart = 'childMarkdownRemark___frontmatter___Last_visit_date___start',
  ChildMarkdownRemarkFrontmatterLatitude = 'childMarkdownRemark___frontmatter___Latitude',
  ChildMarkdownRemarkFrontmatterLongitude = 'childMarkdownRemark___frontmatter___Longitude',
  ChildMarkdownRemarkFrontmatterMarkerOffsetX = 'childMarkdownRemark___frontmatter___MarkerOffsetX',
  ChildMarkdownRemarkFrontmatterMarkerOffsetY = 'childMarkdownRemark___frontmatter___MarkerOffsetY',
  ChildMarkdownRemarkFrontmatterName = 'childMarkdownRemark___frontmatter___Name',
  ChildMarkdownRemarkFrontmatterTextOffsetX = 'childMarkdownRemark___frontmatter___TextOffsetX',
  ChildMarkdownRemarkFrontmatterTextOffsetY = 'childMarkdownRemark___frontmatter___TextOffsetY',
  ChildMarkdownRemarkFrontmatterVisited = 'childMarkdownRemark___frontmatter___Visited',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMdxBody = 'childMdx___body',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxFieldsDate = 'childMdx___fields___date',
  ChildMdxFieldsSlug = 'childMdx___fields___slug',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterFlag = 'childMdx___frontmatter___Flag',
  ChildMdxFrontmatterLastVisitDateStart = 'childMdx___frontmatter___Last_visit_date___start',
  ChildMdxFrontmatterLatitude = 'childMdx___frontmatter___Latitude',
  ChildMdxFrontmatterLongitude = 'childMdx___frontmatter___Longitude',
  ChildMdxFrontmatterMarkerOffsetX = 'childMdx___frontmatter___MarkerOffsetX',
  ChildMdxFrontmatterMarkerOffsetY = 'childMdx___frontmatter___MarkerOffsetY',
  ChildMdxFrontmatterName = 'childMdx___frontmatter___Name',
  ChildMdxFrontmatterTextOffsetX = 'childMdx___frontmatter___TextOffsetX',
  ChildMdxFrontmatterTextOffsetY = 'childMdx___frontmatter___TextOffsetY',
  ChildMdxFrontmatterVisited = 'childMdx___frontmatter___Visited',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterExcerpt = 'childMdx___frontmatter___excerpt',
  ChildMdxFrontmatterFeaturedImageAbsolutePath = 'childMdx___frontmatter___featuredImage___absolutePath',
  ChildMdxFrontmatterFeaturedImageAccessTime = 'childMdx___frontmatter___featuredImage___accessTime',
  ChildMdxFrontmatterFeaturedImageAtime = 'childMdx___frontmatter___featuredImage___atime',
  ChildMdxFrontmatterFeaturedImageAtimeMs = 'childMdx___frontmatter___featuredImage___atimeMs',
  ChildMdxFrontmatterFeaturedImageBase = 'childMdx___frontmatter___featuredImage___base',
  ChildMdxFrontmatterFeaturedImageBirthTime = 'childMdx___frontmatter___featuredImage___birthTime',
  ChildMdxFrontmatterFeaturedImageBirthtime = 'childMdx___frontmatter___featuredImage___birthtime',
  ChildMdxFrontmatterFeaturedImageBirthtimeMs = 'childMdx___frontmatter___featuredImage___birthtimeMs',
  ChildMdxFrontmatterFeaturedImageBlksize = 'childMdx___frontmatter___featuredImage___blksize',
  ChildMdxFrontmatterFeaturedImageBlocks = 'childMdx___frontmatter___featuredImage___blocks',
  ChildMdxFrontmatterFeaturedImageChangeTime = 'childMdx___frontmatter___featuredImage___changeTime',
  ChildMdxFrontmatterFeaturedImageChildren = 'childMdx___frontmatter___featuredImage___children',
  ChildMdxFrontmatterFeaturedImageChildrenImageSharp = 'childMdx___frontmatter___featuredImage___childrenImageSharp',
  ChildMdxFrontmatterFeaturedImageChildrenMdx = 'childMdx___frontmatter___featuredImage___childrenMdx',
  ChildMdxFrontmatterFeaturedImageCtime = 'childMdx___frontmatter___featuredImage___ctime',
  ChildMdxFrontmatterFeaturedImageCtimeMs = 'childMdx___frontmatter___featuredImage___ctimeMs',
  ChildMdxFrontmatterFeaturedImageDev = 'childMdx___frontmatter___featuredImage___dev',
  ChildMdxFrontmatterFeaturedImageDir = 'childMdx___frontmatter___featuredImage___dir',
  ChildMdxFrontmatterFeaturedImageExt = 'childMdx___frontmatter___featuredImage___ext',
  ChildMdxFrontmatterFeaturedImageExtension = 'childMdx___frontmatter___featuredImage___extension',
  ChildMdxFrontmatterFeaturedImageGid = 'childMdx___frontmatter___featuredImage___gid',
  ChildMdxFrontmatterFeaturedImageId = 'childMdx___frontmatter___featuredImage___id',
  ChildMdxFrontmatterFeaturedImageIno = 'childMdx___frontmatter___featuredImage___ino',
  ChildMdxFrontmatterFeaturedImageMode = 'childMdx___frontmatter___featuredImage___mode',
  ChildMdxFrontmatterFeaturedImageModifiedTime = 'childMdx___frontmatter___featuredImage___modifiedTime',
  ChildMdxFrontmatterFeaturedImageMtime = 'childMdx___frontmatter___featuredImage___mtime',
  ChildMdxFrontmatterFeaturedImageMtimeMs = 'childMdx___frontmatter___featuredImage___mtimeMs',
  ChildMdxFrontmatterFeaturedImageName = 'childMdx___frontmatter___featuredImage___name',
  ChildMdxFrontmatterFeaturedImageNlink = 'childMdx___frontmatter___featuredImage___nlink',
  ChildMdxFrontmatterFeaturedImagePrettySize = 'childMdx___frontmatter___featuredImage___prettySize',
  ChildMdxFrontmatterFeaturedImagePublicUrl = 'childMdx___frontmatter___featuredImage___publicURL',
  ChildMdxFrontmatterFeaturedImageRdev = 'childMdx___frontmatter___featuredImage___rdev',
  ChildMdxFrontmatterFeaturedImageRelativeDirectory = 'childMdx___frontmatter___featuredImage___relativeDirectory',
  ChildMdxFrontmatterFeaturedImageRelativePath = 'childMdx___frontmatter___featuredImage___relativePath',
  ChildMdxFrontmatterFeaturedImageRoot = 'childMdx___frontmatter___featuredImage___root',
  ChildMdxFrontmatterFeaturedImageSize = 'childMdx___frontmatter___featuredImage___size',
  ChildMdxFrontmatterFeaturedImageSourceInstanceName = 'childMdx___frontmatter___featuredImage___sourceInstanceName',
  ChildMdxFrontmatterFeaturedImageUid = 'childMdx___frontmatter___featuredImage___uid',
  ChildMdxFrontmatterHeaderImageAbsolutePath = 'childMdx___frontmatter___headerImage___absolutePath',
  ChildMdxFrontmatterHeaderImageAccessTime = 'childMdx___frontmatter___headerImage___accessTime',
  ChildMdxFrontmatterHeaderImageAtime = 'childMdx___frontmatter___headerImage___atime',
  ChildMdxFrontmatterHeaderImageAtimeMs = 'childMdx___frontmatter___headerImage___atimeMs',
  ChildMdxFrontmatterHeaderImageBase = 'childMdx___frontmatter___headerImage___base',
  ChildMdxFrontmatterHeaderImageBirthTime = 'childMdx___frontmatter___headerImage___birthTime',
  ChildMdxFrontmatterHeaderImageBirthtime = 'childMdx___frontmatter___headerImage___birthtime',
  ChildMdxFrontmatterHeaderImageBirthtimeMs = 'childMdx___frontmatter___headerImage___birthtimeMs',
  ChildMdxFrontmatterHeaderImageBlksize = 'childMdx___frontmatter___headerImage___blksize',
  ChildMdxFrontmatterHeaderImageBlocks = 'childMdx___frontmatter___headerImage___blocks',
  ChildMdxFrontmatterHeaderImageChangeTime = 'childMdx___frontmatter___headerImage___changeTime',
  ChildMdxFrontmatterHeaderImageChildren = 'childMdx___frontmatter___headerImage___children',
  ChildMdxFrontmatterHeaderImageChildrenImageSharp = 'childMdx___frontmatter___headerImage___childrenImageSharp',
  ChildMdxFrontmatterHeaderImageChildrenMdx = 'childMdx___frontmatter___headerImage___childrenMdx',
  ChildMdxFrontmatterHeaderImageCtime = 'childMdx___frontmatter___headerImage___ctime',
  ChildMdxFrontmatterHeaderImageCtimeMs = 'childMdx___frontmatter___headerImage___ctimeMs',
  ChildMdxFrontmatterHeaderImageDev = 'childMdx___frontmatter___headerImage___dev',
  ChildMdxFrontmatterHeaderImageDir = 'childMdx___frontmatter___headerImage___dir',
  ChildMdxFrontmatterHeaderImageExt = 'childMdx___frontmatter___headerImage___ext',
  ChildMdxFrontmatterHeaderImageExtension = 'childMdx___frontmatter___headerImage___extension',
  ChildMdxFrontmatterHeaderImageGid = 'childMdx___frontmatter___headerImage___gid',
  ChildMdxFrontmatterHeaderImageId = 'childMdx___frontmatter___headerImage___id',
  ChildMdxFrontmatterHeaderImageIno = 'childMdx___frontmatter___headerImage___ino',
  ChildMdxFrontmatterHeaderImageMode = 'childMdx___frontmatter___headerImage___mode',
  ChildMdxFrontmatterHeaderImageModifiedTime = 'childMdx___frontmatter___headerImage___modifiedTime',
  ChildMdxFrontmatterHeaderImageMtime = 'childMdx___frontmatter___headerImage___mtime',
  ChildMdxFrontmatterHeaderImageMtimeMs = 'childMdx___frontmatter___headerImage___mtimeMs',
  ChildMdxFrontmatterHeaderImageName = 'childMdx___frontmatter___headerImage___name',
  ChildMdxFrontmatterHeaderImageNlink = 'childMdx___frontmatter___headerImage___nlink',
  ChildMdxFrontmatterHeaderImagePrettySize = 'childMdx___frontmatter___headerImage___prettySize',
  ChildMdxFrontmatterHeaderImagePublicUrl = 'childMdx___frontmatter___headerImage___publicURL',
  ChildMdxFrontmatterHeaderImageRdev = 'childMdx___frontmatter___headerImage___rdev',
  ChildMdxFrontmatterHeaderImageRelativeDirectory = 'childMdx___frontmatter___headerImage___relativeDirectory',
  ChildMdxFrontmatterHeaderImageRelativePath = 'childMdx___frontmatter___headerImage___relativePath',
  ChildMdxFrontmatterHeaderImageRoot = 'childMdx___frontmatter___headerImage___root',
  ChildMdxFrontmatterHeaderImageSize = 'childMdx___frontmatter___headerImage___size',
  ChildMdxFrontmatterHeaderImageSourceInstanceName = 'childMdx___frontmatter___headerImage___sourceInstanceName',
  ChildMdxFrontmatterHeaderImageUid = 'childMdx___frontmatter___headerImage___uid',
  ChildMdxFrontmatterId = 'childMdx___frontmatter___id',
  ChildMdxFrontmatterPath = 'childMdx___frontmatter___path',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxId = 'childMdx___id',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFieldsSlug = 'childrenMarkdownRemark___fields___slug',
  ChildrenMarkdownRemarkFrontmatterFlag = 'childrenMarkdownRemark___frontmatter___Flag',
  ChildrenMarkdownRemarkFrontmatterLastVisitDateStart = 'childrenMarkdownRemark___frontmatter___Last_visit_date___start',
  ChildrenMarkdownRemarkFrontmatterLatitude = 'childrenMarkdownRemark___frontmatter___Latitude',
  ChildrenMarkdownRemarkFrontmatterLongitude = 'childrenMarkdownRemark___frontmatter___Longitude',
  ChildrenMarkdownRemarkFrontmatterMarkerOffsetX = 'childrenMarkdownRemark___frontmatter___MarkerOffsetX',
  ChildrenMarkdownRemarkFrontmatterMarkerOffsetY = 'childrenMarkdownRemark___frontmatter___MarkerOffsetY',
  ChildrenMarkdownRemarkFrontmatterName = 'childrenMarkdownRemark___frontmatter___Name',
  ChildrenMarkdownRemarkFrontmatterTextOffsetX = 'childrenMarkdownRemark___frontmatter___TextOffsetX',
  ChildrenMarkdownRemarkFrontmatterTextOffsetY = 'childrenMarkdownRemark___frontmatter___TextOffsetY',
  ChildrenMarkdownRemarkFrontmatterVisited = 'childrenMarkdownRemark___frontmatter___Visited',
  ChildrenMarkdownRemarkFrontmatterDate = 'childrenMarkdownRemark___frontmatter___date',
  ChildrenMarkdownRemarkFrontmatterDescription = 'childrenMarkdownRemark___frontmatter___description',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxFieldsDate = 'childrenMdx___fields___date',
  ChildrenMdxFieldsSlug = 'childrenMdx___fields___slug',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterFlag = 'childrenMdx___frontmatter___Flag',
  ChildrenMdxFrontmatterLastVisitDateStart = 'childrenMdx___frontmatter___Last_visit_date___start',
  ChildrenMdxFrontmatterLatitude = 'childrenMdx___frontmatter___Latitude',
  ChildrenMdxFrontmatterLongitude = 'childrenMdx___frontmatter___Longitude',
  ChildrenMdxFrontmatterMarkerOffsetX = 'childrenMdx___frontmatter___MarkerOffsetX',
  ChildrenMdxFrontmatterMarkerOffsetY = 'childrenMdx___frontmatter___MarkerOffsetY',
  ChildrenMdxFrontmatterName = 'childrenMdx___frontmatter___Name',
  ChildrenMdxFrontmatterTextOffsetX = 'childrenMdx___frontmatter___TextOffsetX',
  ChildrenMdxFrontmatterTextOffsetY = 'childrenMdx___frontmatter___TextOffsetY',
  ChildrenMdxFrontmatterVisited = 'childrenMdx___frontmatter___Visited',
  ChildrenMdxFrontmatterDate = 'childrenMdx___frontmatter___date',
  ChildrenMdxFrontmatterExcerpt = 'childrenMdx___frontmatter___excerpt',
  ChildrenMdxFrontmatterFeaturedImageAbsolutePath = 'childrenMdx___frontmatter___featuredImage___absolutePath',
  ChildrenMdxFrontmatterFeaturedImageAccessTime = 'childrenMdx___frontmatter___featuredImage___accessTime',
  ChildrenMdxFrontmatterFeaturedImageAtime = 'childrenMdx___frontmatter___featuredImage___atime',
  ChildrenMdxFrontmatterFeaturedImageAtimeMs = 'childrenMdx___frontmatter___featuredImage___atimeMs',
  ChildrenMdxFrontmatterFeaturedImageBase = 'childrenMdx___frontmatter___featuredImage___base',
  ChildrenMdxFrontmatterFeaturedImageBirthTime = 'childrenMdx___frontmatter___featuredImage___birthTime',
  ChildrenMdxFrontmatterFeaturedImageBirthtime = 'childrenMdx___frontmatter___featuredImage___birthtime',
  ChildrenMdxFrontmatterFeaturedImageBirthtimeMs = 'childrenMdx___frontmatter___featuredImage___birthtimeMs',
  ChildrenMdxFrontmatterFeaturedImageBlksize = 'childrenMdx___frontmatter___featuredImage___blksize',
  ChildrenMdxFrontmatterFeaturedImageBlocks = 'childrenMdx___frontmatter___featuredImage___blocks',
  ChildrenMdxFrontmatterFeaturedImageChangeTime = 'childrenMdx___frontmatter___featuredImage___changeTime',
  ChildrenMdxFrontmatterFeaturedImageChildren = 'childrenMdx___frontmatter___featuredImage___children',
  ChildrenMdxFrontmatterFeaturedImageChildrenImageSharp = 'childrenMdx___frontmatter___featuredImage___childrenImageSharp',
  ChildrenMdxFrontmatterFeaturedImageChildrenMdx = 'childrenMdx___frontmatter___featuredImage___childrenMdx',
  ChildrenMdxFrontmatterFeaturedImageCtime = 'childrenMdx___frontmatter___featuredImage___ctime',
  ChildrenMdxFrontmatterFeaturedImageCtimeMs = 'childrenMdx___frontmatter___featuredImage___ctimeMs',
  ChildrenMdxFrontmatterFeaturedImageDev = 'childrenMdx___frontmatter___featuredImage___dev',
  ChildrenMdxFrontmatterFeaturedImageDir = 'childrenMdx___frontmatter___featuredImage___dir',
  ChildrenMdxFrontmatterFeaturedImageExt = 'childrenMdx___frontmatter___featuredImage___ext',
  ChildrenMdxFrontmatterFeaturedImageExtension = 'childrenMdx___frontmatter___featuredImage___extension',
  ChildrenMdxFrontmatterFeaturedImageGid = 'childrenMdx___frontmatter___featuredImage___gid',
  ChildrenMdxFrontmatterFeaturedImageId = 'childrenMdx___frontmatter___featuredImage___id',
  ChildrenMdxFrontmatterFeaturedImageIno = 'childrenMdx___frontmatter___featuredImage___ino',
  ChildrenMdxFrontmatterFeaturedImageMode = 'childrenMdx___frontmatter___featuredImage___mode',
  ChildrenMdxFrontmatterFeaturedImageModifiedTime = 'childrenMdx___frontmatter___featuredImage___modifiedTime',
  ChildrenMdxFrontmatterFeaturedImageMtime = 'childrenMdx___frontmatter___featuredImage___mtime',
  ChildrenMdxFrontmatterFeaturedImageMtimeMs = 'childrenMdx___frontmatter___featuredImage___mtimeMs',
  ChildrenMdxFrontmatterFeaturedImageName = 'childrenMdx___frontmatter___featuredImage___name',
  ChildrenMdxFrontmatterFeaturedImageNlink = 'childrenMdx___frontmatter___featuredImage___nlink',
  ChildrenMdxFrontmatterFeaturedImagePrettySize = 'childrenMdx___frontmatter___featuredImage___prettySize',
  ChildrenMdxFrontmatterFeaturedImagePublicUrl = 'childrenMdx___frontmatter___featuredImage___publicURL',
  ChildrenMdxFrontmatterFeaturedImageRdev = 'childrenMdx___frontmatter___featuredImage___rdev',
  ChildrenMdxFrontmatterFeaturedImageRelativeDirectory = 'childrenMdx___frontmatter___featuredImage___relativeDirectory',
  ChildrenMdxFrontmatterFeaturedImageRelativePath = 'childrenMdx___frontmatter___featuredImage___relativePath',
  ChildrenMdxFrontmatterFeaturedImageRoot = 'childrenMdx___frontmatter___featuredImage___root',
  ChildrenMdxFrontmatterFeaturedImageSize = 'childrenMdx___frontmatter___featuredImage___size',
  ChildrenMdxFrontmatterFeaturedImageSourceInstanceName = 'childrenMdx___frontmatter___featuredImage___sourceInstanceName',
  ChildrenMdxFrontmatterFeaturedImageUid = 'childrenMdx___frontmatter___featuredImage___uid',
  ChildrenMdxFrontmatterHeaderImageAbsolutePath = 'childrenMdx___frontmatter___headerImage___absolutePath',
  ChildrenMdxFrontmatterHeaderImageAccessTime = 'childrenMdx___frontmatter___headerImage___accessTime',
  ChildrenMdxFrontmatterHeaderImageAtime = 'childrenMdx___frontmatter___headerImage___atime',
  ChildrenMdxFrontmatterHeaderImageAtimeMs = 'childrenMdx___frontmatter___headerImage___atimeMs',
  ChildrenMdxFrontmatterHeaderImageBase = 'childrenMdx___frontmatter___headerImage___base',
  ChildrenMdxFrontmatterHeaderImageBirthTime = 'childrenMdx___frontmatter___headerImage___birthTime',
  ChildrenMdxFrontmatterHeaderImageBirthtime = 'childrenMdx___frontmatter___headerImage___birthtime',
  ChildrenMdxFrontmatterHeaderImageBirthtimeMs = 'childrenMdx___frontmatter___headerImage___birthtimeMs',
  ChildrenMdxFrontmatterHeaderImageBlksize = 'childrenMdx___frontmatter___headerImage___blksize',
  ChildrenMdxFrontmatterHeaderImageBlocks = 'childrenMdx___frontmatter___headerImage___blocks',
  ChildrenMdxFrontmatterHeaderImageChangeTime = 'childrenMdx___frontmatter___headerImage___changeTime',
  ChildrenMdxFrontmatterHeaderImageChildren = 'childrenMdx___frontmatter___headerImage___children',
  ChildrenMdxFrontmatterHeaderImageChildrenImageSharp = 'childrenMdx___frontmatter___headerImage___childrenImageSharp',
  ChildrenMdxFrontmatterHeaderImageChildrenMdx = 'childrenMdx___frontmatter___headerImage___childrenMdx',
  ChildrenMdxFrontmatterHeaderImageCtime = 'childrenMdx___frontmatter___headerImage___ctime',
  ChildrenMdxFrontmatterHeaderImageCtimeMs = 'childrenMdx___frontmatter___headerImage___ctimeMs',
  ChildrenMdxFrontmatterHeaderImageDev = 'childrenMdx___frontmatter___headerImage___dev',
  ChildrenMdxFrontmatterHeaderImageDir = 'childrenMdx___frontmatter___headerImage___dir',
  ChildrenMdxFrontmatterHeaderImageExt = 'childrenMdx___frontmatter___headerImage___ext',
  ChildrenMdxFrontmatterHeaderImageExtension = 'childrenMdx___frontmatter___headerImage___extension',
  ChildrenMdxFrontmatterHeaderImageGid = 'childrenMdx___frontmatter___headerImage___gid',
  ChildrenMdxFrontmatterHeaderImageId = 'childrenMdx___frontmatter___headerImage___id',
  ChildrenMdxFrontmatterHeaderImageIno = 'childrenMdx___frontmatter___headerImage___ino',
  ChildrenMdxFrontmatterHeaderImageMode = 'childrenMdx___frontmatter___headerImage___mode',
  ChildrenMdxFrontmatterHeaderImageModifiedTime = 'childrenMdx___frontmatter___headerImage___modifiedTime',
  ChildrenMdxFrontmatterHeaderImageMtime = 'childrenMdx___frontmatter___headerImage___mtime',
  ChildrenMdxFrontmatterHeaderImageMtimeMs = 'childrenMdx___frontmatter___headerImage___mtimeMs',
  ChildrenMdxFrontmatterHeaderImageName = 'childrenMdx___frontmatter___headerImage___name',
  ChildrenMdxFrontmatterHeaderImageNlink = 'childrenMdx___frontmatter___headerImage___nlink',
  ChildrenMdxFrontmatterHeaderImagePrettySize = 'childrenMdx___frontmatter___headerImage___prettySize',
  ChildrenMdxFrontmatterHeaderImagePublicUrl = 'childrenMdx___frontmatter___headerImage___publicURL',
  ChildrenMdxFrontmatterHeaderImageRdev = 'childrenMdx___frontmatter___headerImage___rdev',
  ChildrenMdxFrontmatterHeaderImageRelativeDirectory = 'childrenMdx___frontmatter___headerImage___relativeDirectory',
  ChildrenMdxFrontmatterHeaderImageRelativePath = 'childrenMdx___frontmatter___headerImage___relativePath',
  ChildrenMdxFrontmatterHeaderImageRoot = 'childrenMdx___frontmatter___headerImage___root',
  ChildrenMdxFrontmatterHeaderImageSize = 'childrenMdx___frontmatter___headerImage___size',
  ChildrenMdxFrontmatterHeaderImageSourceInstanceName = 'childrenMdx___frontmatter___headerImage___sourceInstanceName',
  ChildrenMdxFrontmatterHeaderImageUid = 'childrenMdx___frontmatter___headerImage___uid',
  ChildrenMdxFrontmatterId = 'childrenMdx___frontmatter___id',
  ChildrenMdxFrontmatterPath = 'childrenMdx___frontmatter___path',
  ChildrenMdxFrontmatterTags = 'childrenMdx___frontmatter___tags',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Json = 'json',
  MarkdownString = 'markdownString',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PropertiesFlagId = 'properties___Flag___id',
  PropertiesFlagKey = 'properties___Flag___key',
  PropertiesFlagType = 'properties___Flag___type',
  PropertiesFlagValue = 'properties___Flag___value',
  PropertiesLastVisitDateId = 'properties___Last_visit_date___id',
  PropertiesLastVisitDateKey = 'properties___Last_visit_date___key',
  PropertiesLastVisitDateType = 'properties___Last_visit_date___type',
  PropertiesLastVisitDateValueStart = 'properties___Last_visit_date___value___start',
  PropertiesLatitudeId = 'properties___Latitude___id',
  PropertiesLatitudeKey = 'properties___Latitude___key',
  PropertiesLatitudeType = 'properties___Latitude___type',
  PropertiesLatitudeValue = 'properties___Latitude___value',
  PropertiesLongitudeId = 'properties___Longitude___id',
  PropertiesLongitudeKey = 'properties___Longitude___key',
  PropertiesLongitudeType = 'properties___Longitude___type',
  PropertiesLongitudeValue = 'properties___Longitude___value',
  PropertiesMarkerOffsetXId = 'properties___MarkerOffsetX___id',
  PropertiesMarkerOffsetXKey = 'properties___MarkerOffsetX___key',
  PropertiesMarkerOffsetXType = 'properties___MarkerOffsetX___type',
  PropertiesMarkerOffsetXValue = 'properties___MarkerOffsetX___value',
  PropertiesMarkerOffsetYId = 'properties___MarkerOffsetY___id',
  PropertiesMarkerOffsetYKey = 'properties___MarkerOffsetY___key',
  PropertiesMarkerOffsetYType = 'properties___MarkerOffsetY___type',
  PropertiesMarkerOffsetYValue = 'properties___MarkerOffsetY___value',
  PropertiesNameId = 'properties___Name___id',
  PropertiesNameKey = 'properties___Name___key',
  PropertiesNameType = 'properties___Name___type',
  PropertiesNameValue = 'properties___Name___value',
  PropertiesTextOffsetXId = 'properties___TextOffsetX___id',
  PropertiesTextOffsetXKey = 'properties___TextOffsetX___key',
  PropertiesTextOffsetXType = 'properties___TextOffsetX___type',
  PropertiesTextOffsetXValue = 'properties___TextOffsetX___value',
  PropertiesTextOffsetYId = 'properties___TextOffsetY___id',
  PropertiesTextOffsetYKey = 'properties___TextOffsetY___key',
  PropertiesTextOffsetYType = 'properties___TextOffsetY___type',
  PropertiesTextOffsetYValue = 'properties___TextOffsetY___value',
  PropertiesVisitedId = 'properties___Visited___id',
  PropertiesVisitedKey = 'properties___Visited___key',
  PropertiesVisitedType = 'properties___Visited___type',
  PropertiesVisitedValue = 'properties___Visited___value',
  RawArchived = 'raw___archived',
  RawCreatedTime = 'raw___created_time',
  RawId = 'raw___id',
  RawLastEditedTime = 'raw___last_edited_time',
  RawObject = 'raw___object',
  RawParentDatabaseId = 'raw___parent___database_id',
  RawParentType = 'raw___parent___type',
  RawPropertiesCountryId = 'raw___properties___Country___id',
  RawPropertiesCountryTitle = 'raw___properties___Country___title',
  RawPropertiesCountryType = 'raw___properties___Country___type',
  RawPropertiesFlagId = 'raw___properties___Flag___id',
  RawPropertiesFlagRichText = 'raw___properties___Flag___rich_text',
  RawPropertiesFlagType = 'raw___properties___Flag___type',
  RawPropertiesLastVisitDateId = 'raw___properties___Last_visit_date___id',
  RawPropertiesLastVisitDateType = 'raw___properties___Last_visit_date___type',
  RawPropertiesLatitudeId = 'raw___properties___Latitude___id',
  RawPropertiesLatitudeRichText = 'raw___properties___Latitude___rich_text',
  RawPropertiesLatitudeType = 'raw___properties___Latitude___type',
  RawPropertiesLongitudeId = 'raw___properties___Longitude___id',
  RawPropertiesLongitudeRichText = 'raw___properties___Longitude___rich_text',
  RawPropertiesLongitudeType = 'raw___properties___Longitude___type',
  RawPropertiesMarkerOffsetXId = 'raw___properties___MarkerOffsetX___id',
  RawPropertiesMarkerOffsetXNumber = 'raw___properties___MarkerOffsetX___number',
  RawPropertiesMarkerOffsetXType = 'raw___properties___MarkerOffsetX___type',
  RawPropertiesMarkerOffsetYId = 'raw___properties___MarkerOffsetY___id',
  RawPropertiesMarkerOffsetYNumber = 'raw___properties___MarkerOffsetY___number',
  RawPropertiesMarkerOffsetYType = 'raw___properties___MarkerOffsetY___type',
  RawPropertiesNameId = 'raw___properties___Name___id',
  RawPropertiesNameRichText = 'raw___properties___Name___rich_text',
  RawPropertiesNameType = 'raw___properties___Name___type',
  RawPropertiesTextOffsetXId = 'raw___properties___TextOffsetX___id',
  RawPropertiesTextOffsetXNumber = 'raw___properties___TextOffsetX___number',
  RawPropertiesTextOffsetXType = 'raw___properties___TextOffsetX___type',
  RawPropertiesTextOffsetYId = 'raw___properties___TextOffsetY___id',
  RawPropertiesTextOffsetYNumber = 'raw___properties___TextOffsetY___number',
  RawPropertiesTextOffsetYType = 'raw___properties___TextOffsetY___type',
  RawPropertiesVisitedCheckbox = 'raw___properties___Visited___checkbox',
  RawPropertiesVisitedId = 'raw___properties___Visited___id',
  RawPropertiesVisitedType = 'raw___properties___Visited___type',
  RawUrl = 'raw___url',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type NotionFilterInput = {
  archived?: InputMaybe<BooleanQueryOperatorInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  json?: InputMaybe<StringQueryOperatorInput>;
  markdownString?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  properties?: InputMaybe<NotionPropertiesFilterInput>;
  raw?: InputMaybe<NotionRawFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type NotionGroupConnection = {
  __typename?: 'NotionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<NotionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<NotionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Notion>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type NotionGroupConnectionDistinctArgs = {
  field: NotionFieldsEnum;
};


export type NotionGroupConnectionGroupArgs = {
  field: NotionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NotionGroupConnectionMaxArgs = {
  field: NotionFieldsEnum;
};


export type NotionGroupConnectionMinArgs = {
  field: NotionFieldsEnum;
};


export type NotionGroupConnectionSumArgs = {
  field: NotionFieldsEnum;
};

export type NotionProperties = {
  __typename?: 'NotionProperties';
  Flag?: Maybe<NotionPropertiesFlag>;
  Last_visit_date?: Maybe<NotionPropertiesLast_Visit_Date>;
  Latitude?: Maybe<NotionPropertiesLatitude>;
  Longitude?: Maybe<NotionPropertiesLongitude>;
  MarkerOffsetX?: Maybe<NotionPropertiesMarkerOffsetX>;
  MarkerOffsetY?: Maybe<NotionPropertiesMarkerOffsetY>;
  Name?: Maybe<NotionPropertiesName>;
  TextOffsetX?: Maybe<NotionPropertiesTextOffsetX>;
  TextOffsetY?: Maybe<NotionPropertiesTextOffsetY>;
  Visited?: Maybe<NotionPropertiesVisited>;
};

export type NotionPropertiesFilterInput = {
  Flag?: InputMaybe<NotionPropertiesFlagFilterInput>;
  Last_visit_date?: InputMaybe<NotionPropertiesLast_Visit_DateFilterInput>;
  Latitude?: InputMaybe<NotionPropertiesLatitudeFilterInput>;
  Longitude?: InputMaybe<NotionPropertiesLongitudeFilterInput>;
  MarkerOffsetX?: InputMaybe<NotionPropertiesMarkerOffsetXFilterInput>;
  MarkerOffsetY?: InputMaybe<NotionPropertiesMarkerOffsetYFilterInput>;
  Name?: InputMaybe<NotionPropertiesNameFilterInput>;
  TextOffsetX?: InputMaybe<NotionPropertiesTextOffsetXFilterInput>;
  TextOffsetY?: InputMaybe<NotionPropertiesTextOffsetYFilterInput>;
  Visited?: InputMaybe<NotionPropertiesVisitedFilterInput>;
};

export type NotionPropertiesFlag = {
  __typename?: 'NotionPropertiesFlag';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type NotionPropertiesFlagFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionPropertiesLast_Visit_Date = {
  __typename?: 'NotionPropertiesLast_visit_date';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<NotionPropertiesLast_Visit_DateValue>;
};

export type NotionPropertiesLast_Visit_DateFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<NotionPropertiesLast_Visit_DateValueFilterInput>;
};

export type NotionPropertiesLast_Visit_DateValue = {
  __typename?: 'NotionPropertiesLast_visit_dateValue';
  start?: Maybe<Scalars['Date']>;
};


export type NotionPropertiesLast_Visit_DateValueStartArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionPropertiesLast_Visit_DateValueFilterInput = {
  start?: InputMaybe<DateQueryOperatorInput>;
};

export type NotionPropertiesLatitude = {
  __typename?: 'NotionPropertiesLatitude';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type NotionPropertiesLatitudeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionPropertiesLongitude = {
  __typename?: 'NotionPropertiesLongitude';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type NotionPropertiesLongitudeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionPropertiesMarkerOffsetX = {
  __typename?: 'NotionPropertiesMarkerOffsetX';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type NotionPropertiesMarkerOffsetXFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<IntQueryOperatorInput>;
};

export type NotionPropertiesMarkerOffsetY = {
  __typename?: 'NotionPropertiesMarkerOffsetY';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type NotionPropertiesMarkerOffsetYFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<IntQueryOperatorInput>;
};

export type NotionPropertiesName = {
  __typename?: 'NotionPropertiesName';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type NotionPropertiesNameFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionPropertiesTextOffsetX = {
  __typename?: 'NotionPropertiesTextOffsetX';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type NotionPropertiesTextOffsetXFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<IntQueryOperatorInput>;
};

export type NotionPropertiesTextOffsetY = {
  __typename?: 'NotionPropertiesTextOffsetY';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type NotionPropertiesTextOffsetYFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<IntQueryOperatorInput>;
};

export type NotionPropertiesVisited = {
  __typename?: 'NotionPropertiesVisited';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Boolean']>;
};

export type NotionPropertiesVisitedFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<BooleanQueryOperatorInput>;
};

export type NotionRaw = {
  __typename?: 'NotionRaw';
  archived?: Maybe<Scalars['Boolean']>;
  created_time?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  last_edited_time?: Maybe<Scalars['Date']>;
  object?: Maybe<Scalars['String']>;
  parent?: Maybe<NotionRawParent>;
  properties?: Maybe<NotionRawProperties>;
  url?: Maybe<Scalars['String']>;
};


export type NotionRawCreated_TimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type NotionRawLast_Edited_TimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionRawFilterInput = {
  archived?: InputMaybe<BooleanQueryOperatorInput>;
  created_time?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  last_edited_time?: InputMaybe<DateQueryOperatorInput>;
  object?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NotionRawParentFilterInput>;
  properties?: InputMaybe<NotionRawPropertiesFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawParent = {
  __typename?: 'NotionRawParent';
  database_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawParentFilterInput = {
  database_id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawProperties = {
  __typename?: 'NotionRawProperties';
  Country?: Maybe<NotionRawPropertiesCountry>;
  Flag?: Maybe<NotionRawPropertiesFlag>;
  Last_visit_date?: Maybe<NotionRawPropertiesLast_Visit_Date>;
  Latitude?: Maybe<NotionRawPropertiesLatitude>;
  Longitude?: Maybe<NotionRawPropertiesLongitude>;
  MarkerOffsetX?: Maybe<NotionRawPropertiesMarkerOffsetX>;
  MarkerOffsetY?: Maybe<NotionRawPropertiesMarkerOffsetY>;
  Name?: Maybe<NotionRawPropertiesName>;
  TextOffsetX?: Maybe<NotionRawPropertiesTextOffsetX>;
  TextOffsetY?: Maybe<NotionRawPropertiesTextOffsetY>;
  Visited?: Maybe<NotionRawPropertiesVisited>;
};

export type NotionRawPropertiesCountry = {
  __typename?: 'NotionRawPropertiesCountry';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Array<Maybe<NotionRawPropertiesCountryTitle>>>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesCountryFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<NotionRawPropertiesCountryTitleFilterListInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesCountryTitle = {
  __typename?: 'NotionRawPropertiesCountryTitle';
  annotations?: Maybe<NotionRawPropertiesCountryTitleAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawPropertiesCountryTitleText>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesCountryTitleAnnotations = {
  __typename?: 'NotionRawPropertiesCountryTitleAnnotations';
  bold?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
};

export type NotionRawPropertiesCountryTitleAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
};

export type NotionRawPropertiesCountryTitleFilterInput = {
  annotations?: InputMaybe<NotionRawPropertiesCountryTitleAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawPropertiesCountryTitleTextFilterInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesCountryTitleFilterListInput = {
  elemMatch?: InputMaybe<NotionRawPropertiesCountryTitleFilterInput>;
};

export type NotionRawPropertiesCountryTitleText = {
  __typename?: 'NotionRawPropertiesCountryTitleText';
  content?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesCountryTitleTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesFilterInput = {
  Country?: InputMaybe<NotionRawPropertiesCountryFilterInput>;
  Flag?: InputMaybe<NotionRawPropertiesFlagFilterInput>;
  Last_visit_date?: InputMaybe<NotionRawPropertiesLast_Visit_DateFilterInput>;
  Latitude?: InputMaybe<NotionRawPropertiesLatitudeFilterInput>;
  Longitude?: InputMaybe<NotionRawPropertiesLongitudeFilterInput>;
  MarkerOffsetX?: InputMaybe<NotionRawPropertiesMarkerOffsetXFilterInput>;
  MarkerOffsetY?: InputMaybe<NotionRawPropertiesMarkerOffsetYFilterInput>;
  Name?: InputMaybe<NotionRawPropertiesNameFilterInput>;
  TextOffsetX?: InputMaybe<NotionRawPropertiesTextOffsetXFilterInput>;
  TextOffsetY?: InputMaybe<NotionRawPropertiesTextOffsetYFilterInput>;
  Visited?: InputMaybe<NotionRawPropertiesVisitedFilterInput>;
};

export type NotionRawPropertiesFlag = {
  __typename?: 'NotionRawPropertiesFlag';
  id?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesFlagFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  rich_text?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesLast_Visit_Date = {
  __typename?: 'NotionRawPropertiesLast_visit_date';
  date?: Maybe<NotionRawPropertiesLast_Visit_DateDate>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesLast_Visit_DateDate = {
  __typename?: 'NotionRawPropertiesLast_visit_dateDate';
  start?: Maybe<Scalars['Date']>;
};


export type NotionRawPropertiesLast_Visit_DateDateStartArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionRawPropertiesLast_Visit_DateDateFilterInput = {
  start?: InputMaybe<DateQueryOperatorInput>;
};

export type NotionRawPropertiesLast_Visit_DateFilterInput = {
  date?: InputMaybe<NotionRawPropertiesLast_Visit_DateDateFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesLatitude = {
  __typename?: 'NotionRawPropertiesLatitude';
  id?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesLatitudeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  rich_text?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesLongitude = {
  __typename?: 'NotionRawPropertiesLongitude';
  id?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesLongitudeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  rich_text?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesMarkerOffsetX = {
  __typename?: 'NotionRawPropertiesMarkerOffsetX';
  id?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesMarkerOffsetXFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  number?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesMarkerOffsetY = {
  __typename?: 'NotionRawPropertiesMarkerOffsetY';
  id?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesMarkerOffsetYFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  number?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesName = {
  __typename?: 'NotionRawPropertiesName';
  id?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesNameFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  rich_text?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesTextOffsetX = {
  __typename?: 'NotionRawPropertiesTextOffsetX';
  id?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesTextOffsetXFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  number?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesTextOffsetY = {
  __typename?: 'NotionRawPropertiesTextOffsetY';
  id?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesTextOffsetYFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  number?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesVisited = {
  __typename?: 'NotionRawPropertiesVisited';
  checkbox?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesVisitedFilterInput = {
  checkbox?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<NotionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allMarkdownRemark: MarkdownRemarkConnection;
  allMdx: MdxConnection;
  allNotion: NotionConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  markdownRemark?: Maybe<MarkdownRemark>;
  mdx?: Maybe<Mdx>;
  notion?: Maybe<Notion>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MarkdownRemarkSortInput>;
};


export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MdxSortInput>;
};


export type QueryAllNotionArgs = {
  filter?: InputMaybe<NotionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<NotionSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryMarkdownRemarkArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  fields?: InputMaybe<FieldsFilterInput>;
  frontmatter?: InputMaybe<FrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};


export type QueryMdxArgs = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};


export type QueryNotionArgs = {
  archived?: InputMaybe<BooleanQueryOperatorInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  json?: InputMaybe<StringQueryOperatorInput>;
  markdownString?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  properties?: InputMaybe<NotionPropertiesFilterInput>;
  raw?: InputMaybe<NotionRawFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsxRuntime = 'jsxRuntime',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataAuthorName = 'siteMetadata___author___name',
  SiteMetadataAuthorSummary = 'siteMetadata___author___summary',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataSocialGithub = 'siteMetadata___social___github',
  SiteMetadataSocialTwitter = 'siteMetadata___social___twitter',
  SiteMetadataTitle = 'siteMetadata___title'
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  author?: Maybe<Author>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<Social>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  author?: InputMaybe<AuthorFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  social?: InputMaybe<SocialFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Social = {
  __typename?: 'Social';
  github?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type SocialFilterInput = {
  github?: InputMaybe<StringQueryOperatorInput>;
  twitter?: InputMaybe<StringQueryOperatorInput>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed', base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed', base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid', base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { __typename?: 'ImageSharpFluid', maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid', base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQueryQuery = { __typename?: 'Query', allSiteFunction: { __typename?: 'SiteFunctionConnection', nodes: Array<{ __typename?: 'SiteFunction', functionRoute: string }> }, allSitePage: { __typename?: 'SitePageConnection', nodes: Array<{ __typename?: 'SitePage', path: string }> } };

export type PlaceHolderImageQueryVariables = Exact<{ [key: string]: never; }>;


export type PlaceHolderImageQuery = { __typename?: 'Query', placeholderImage?: { __typename?: 'File', childImageSharp?: { __typename?: 'ImageSharp', gatsbyImageData: any } | null | undefined } | null | undefined };

export type SiteMetaDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetaDataQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', title?: string | null | undefined, description?: string | null | undefined, social?: { __typename?: 'Social', twitter?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type AllNotionQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllNotionQueryQuery = { __typename?: 'Query', allNotion: { __typename?: 'NotionConnection', totalCount: number, edges: Array<{ __typename?: 'NotionEdge', node: { __typename?: 'Notion', id: string, title?: string | null | undefined, properties?: { __typename?: 'NotionProperties', Visited?: { __typename?: 'NotionPropertiesVisited', value?: boolean | null | undefined } | null | undefined, Flag?: { __typename?: 'NotionPropertiesFlag', value?: string | null | undefined } | null | undefined, Name?: { __typename?: 'NotionPropertiesName', value?: string | null | undefined } | null | undefined, Latitude?: { __typename?: 'NotionPropertiesLatitude', value?: string | null | undefined } | null | undefined, Longitude?: { __typename?: 'NotionPropertiesLongitude', value?: string | null | undefined } | null | undefined, MarkerOffsetY?: { __typename?: 'NotionPropertiesMarkerOffsetY', value?: number | null | undefined } | null | undefined, MarkerOffsetX?: { __typename?: 'NotionPropertiesMarkerOffsetX', value?: number | null | undefined } | null | undefined, TextOffsetX?: { __typename?: 'NotionPropertiesTextOffsetX', value?: number | null | undefined } | null | undefined, TextOffsetY?: { __typename?: 'NotionPropertiesTextOffsetY', value?: number | null | undefined } | null | undefined } | null | undefined } }> } };

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = { __typename?: 'Query', allMdx: { __typename?: 'MdxConnection', totalCount: number, edges: Array<{ __typename?: 'MdxEdge', node: { __typename?: 'Mdx', id: string, fields?: { __typename?: 'MdxFields', slug?: string | null | undefined } | null | undefined, frontmatter?: { __typename?: 'MdxFrontmatter', title: string, date?: any | null | undefined, path?: string | null | undefined, tags?: Array<string | null | undefined> | null | undefined, excerpt?: string | null | undefined, headerImage?: { __typename?: 'File', childImageSharp?: { __typename?: 'ImageSharp', gatsbyImageData: any } | null | undefined } | null | undefined, featuredImage?: { __typename?: 'File', childImageSharp?: { __typename?: 'ImageSharp', gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined } }> } };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', profileImage?: { __typename?: 'File', childImageSharp?: { __typename?: 'ImageSharp', gatsbyImageData: any } | null | undefined } | null | undefined, meJumpingImage?: { __typename?: 'File', childImageSharp?: { __typename?: 'ImageSharp', gatsbyImageData: any } | null | undefined } | null | undefined, meHackingImage?: { __typename?: 'File', childImageSharp?: { __typename?: 'ImageSharp', gatsbyImageData: any } | null | undefined } | null | undefined };

export type BlogPostByPathQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type BlogPostByPathQuery = { __typename?: 'Query', mdx?: { __typename?: 'Mdx', id: string, tableOfContents?: any | null | undefined, body: string, frontmatter?: { __typename?: 'MdxFrontmatter', title: string, date?: any | null | undefined, path?: string | null | undefined, tags?: Array<string | null | undefined> | null | undefined, excerpt?: string | null | undefined, headerImage?: { __typename?: 'File', childImageSharp?: { __typename?: 'ImageSharp', gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined } | null | undefined };
