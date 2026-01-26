import {library, dom} from '@fortawesome/fontawesome-svg-core'

import {
  faCircleXmark,
  faPlusSquare,
  faStar as farStar
} from '@fortawesome/free-regular-svg-icons'

import {
  faPlus,
  faPen,
  faStar as fasStar,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'

export const FALibraryIcons = {
  faCircleXmark,
  faPen,
  faPlus,
  faPlusSquare,
  farStar,
  fasStar,
  faTrashCan
}

library.add(...Object.values(FALibraryIcons))

dom.watch()
