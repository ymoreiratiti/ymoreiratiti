import { data } from "./data"

export default function (): string {
  const Return = [
    '## Follow me around the web:',
  ]

  data.forEach((badge) => {
    const badgeURL = new URL(`https://img.shields.io/badge/-${badge.message}-${badge.color}`)
    badgeURL.searchParams.set('style', 'flat')
    badgeURL.searchParams.set('logoColor', 'fff')
    badgeURL.searchParams.set('logo', badge.logo)

    Return.push(`[![${badge.message}](${badgeURL.toString()})](${badge.url.toString()})`)
  })

  return Return.join('\n')
}