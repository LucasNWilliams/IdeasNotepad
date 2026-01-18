import {library, dom} from '@fortawesome/fontawesome-svg-core'

import {
  faCircleXmark,
  faPlusSquare,
} from '@fortawesome/free-regular-svg-icons'

import {
  faPlus,
  faTrashCan,
  faPen
} from '@fortawesome/free-solid-svg-icons'

export const FALibraryIcons = {
  faCircleXmark,
  faPen,
  faPlus,
  faPlusSquare,
  faTrashCan
}

library.add(...Object.values(FALibraryIcons))

dom.watch()
