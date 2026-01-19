

// export interface Route {
//   title: string
//   data: {
//     name: string
//     url: string
//     // icon?: React.ElementType   // future use
//   }[]
// }


// types.ts
import type { Icon } from "@tabler/icons-react"

export interface NavItem {
  name: string
  url: string
  icon?: Icon
}

export interface Route {
  title: string
  data: NavItem[]
}
