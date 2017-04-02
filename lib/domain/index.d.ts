import { ConsoleDomain } from './console';
import { DebuggerDomain } from './debugger';
import { PageDomain } from './page';
export interface Domains {
    Console: ConsoleDomain;
    Debugger: DebuggerDomain;
    Page: PageDomain;
}
export * from './console';
export * from './debugger';
export * from './page';
