// Dependencies
import type { Dictionary } from '@rosetta.js/types'
import { outdent } from 'outdent'

export function getContent({
  messages,
  isTs
}: {
  messages: Dictionary
  isTs: boolean
}) {
  const output = []
  for (const msg in messages) {
    output.push({
      id: msg,
      value: messages[msg]
    })
  }

  return outdent`
    export default {
      ${output
        .map(msg => {
          return `${msg.id}: "${msg.value}"`
        })
        .join(',\n  ')}
    }${isTs ? ' as const' : ''}
  `
}
