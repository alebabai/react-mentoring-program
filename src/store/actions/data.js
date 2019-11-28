export const loadOne = item => ({
    type: '@DATA__LOAD_ONE',
    payload: item
})

export const loadMany = items => ({
    type: '@DATA__LOAD_MANY',
    payload: items
})
