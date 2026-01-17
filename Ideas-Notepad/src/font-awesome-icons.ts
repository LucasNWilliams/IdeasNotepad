import {library, dom} from '@fortawesome/fontawesome-svg-core'

import {
  faCircleXmark,
} from '@fortawesome/free-regular-svg-icons'

export const FALibraryIcons = {
  faCircleXmark
}

library.add(...Object.values(FALibraryIcons))

dom.watch()
