import * as fs from 'fs'
import * as path from 'path'
import LanguagesAndTools from './languagesAndTools'
import SocialShare from './socialShare'

const content: string = [
  '## Hi there 👋',
  LanguagesAndTools(),
  SocialShare(),
].join('\n\n').trim()

const readmePath = path.join(__dirname, '../README.md')
fs.writeFileSync(readmePath, content)