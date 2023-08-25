import { setupRosetta } from '@rosetta.js/react/client'
import { useState } from 'react'

const { tx, useChangeLocale } = setupRosetta({
  locale: 'en',
  dictionaries: {
    en: () => import('../locale/en.ts'),
    es: () => import('../locale/es.ts'),
    it: () => import('../locale/it.ts')
  }
})

export default function App() {
  const changeLocale = useChangeLocale()
  const name = 'Hugo'
  const [state, setState] = useState(0)

  return (
    <div>
      <p>{tx`Hello, !${name}!`}</p>
      <p>{tx`You haven't checked you email since @${new Date()}`}</p>
      <p>{tx`You got #${10000} messages in your mail inbox`}</p>
      <p>{tx`I am doing a real-time product demo!`}</p>

      <div className={'buttons'}>
        <button onClick={() => changeLocale('es')}>ES</button>
        <button onClick={() => changeLocale('en')}>EN</button>
        <button onClick={() => changeLocale('it')}>IT</button>
        <button onClick={() => setState(stae => stae + 1)}>{state}</button>
      </div>
    </div>
  )
}
