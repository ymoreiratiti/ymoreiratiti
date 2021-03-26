import { data } from "./data"

export default function (): string {
  const Return = [
    '## Languages and Tools:',
  ]

  data.forEach(badge => {
    const badgeURL = new URL(`https://img.shields.io/badge/-${badge.message}-${badge.color}`)
    badgeURL.searchParams.set('style', 'flat')
    badgeURL.searchParams.set('logoColor', 'fff')
    badgeURL.searchParams.set('logo', badge.logo)

    Return.push(`![${badge.message}](${badgeURL.toString()})`)
  })

  return Return.join('\n')
}