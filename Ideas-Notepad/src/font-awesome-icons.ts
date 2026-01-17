import {library, dom} from '@fortawesome/fontawesome-svg-core'

import {
  faCircleXmark,
  faPlusSquare,
} from '@fortawesome/free-regular-svg-icons'

import {
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

export const FALibraryIcons = {
  faCircleXmark,
  faPlus,
  faPlusSquare
}

library.add(...Object.values(FALibraryIcons))

dom.watch()
