function sortArrayByProperty<T>(array: T[], property: string) {
  let trueArrays: T[] = []
  let falseArrays: T[] = []

  array.forEach((item: T) => (item[property] === true) ? trueArrays.push(item) : falseArrays.push(item))
  return trueArrays.concat(falseArrays)
}

export {
  sortArrayByProperty
}
