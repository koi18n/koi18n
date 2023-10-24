// Types
import type { InterpolateComponents } from './interpolate'
import type { InterpolateOptions } from '@koi18n/formatter'
import type { Loader, Locale } from '@koi18n/types'

export type CreateSetupOptions = {
  getLocale: () => Locale
}

export type SetupReactOptions = InterpolateOptions & {
  loader: Loader
  components?: InterpolateComponents
}

export type TsReactRenderProps = {
  components: InterpolateComponents
}

export type GetTsProps = {
  chunkId?: string
}
