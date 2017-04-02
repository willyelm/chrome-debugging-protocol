import { ConsoleDomain } from './console'
import { DebuggerDomain } from './debugger'
import { PageDomain } from './page'
import { RuntimeDomain } from './runtime'
import { ProfilerDomain } from './profiler'

export interface Domains {
  Console: ConsoleDomain,
  Debugger: DebuggerDomain,
  Page: PageDomain,
  Runtime: RuntimeDomain,
  Profiler: ProfilerDomain
}

export * from './console'
export * from './debugger'
export * from './page'
export * from './runtime'
export * from './profiler'
