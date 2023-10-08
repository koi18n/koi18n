// Dependencies
import { findTsConfig } from './find-tsconfig'
import { logger } from '@koi18n/logger'
import { outdent } from 'outdent'
import { runtime } from './runtime'

// Types
import type { Config } from '@koi18n/types'

type SetupOptions = Pick<Config, 'projectLocale' | 'outDir'> & {
  cwd: string
}

export async function setupConfig({
  projectLocale,
  outDir,
  cwd
}: SetupOptions) {
  const isTs = findTsConfig()
  const fileName = isTs ? 'koi18n.config.ts' : 'koi18n.config.mjs'

  logger.info('init:setup', `Setting config file...`)

  const content = outdent`
      import { defineConfig } from "@koi18n/dev"

      export default defineConfig({
        // Where to look for your locale declarations
        include: ["./src/**/*.{js,jsx,ts,tsx}"],

        // Files to exclude
        exclude: [],
        
        // The base locale used in your project
        projectLocale: "${projectLocale}",
        
        // The output directory for your locale system
        outDir: "${outDir}",

        // Your OpenAI API key
        openaiApiKey: "",
      })
    `

  runtime.fs.write(runtime.path.join(cwd, fileName), content)
}
