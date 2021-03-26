export interface IData {
  message: string
  color: string
  logo: string
  url: URL
}

export const data: IData[] = [
  { message: 'LinkedIn', color: '0A66C2', logo: 'LinkedIn', url: new URL('https://www.linkedin.com/in/yurititi13/') },
  { message: 'Instagram', color: 'E4405F', logo: 'Instagram', url: new URL('https://www.instagram.com/ymoreiratiti/') },
  { message: 'Facebook', color: '1877F2', logo: 'Facebook', url: new URL('https://www.facebook.com/yurititi13') },
  { message: 'Spotify', color: '1ED760', logo: 'Spotify', url: new URL('https://open.spotify.com/user/12144027699') },
];