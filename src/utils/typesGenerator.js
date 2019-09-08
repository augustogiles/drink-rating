export function createRequestTypes(base) {
    const requests = ['GET', 'POST', 'PUT']
    const types = ['REQUEST', 'SUCCESS', 'ERROR']
    let newReq = {}

    requests.forEach(req => {
        let res = {}
        const newRequests = `${base}_${req}`

        types.forEach(type => (res[type] = `${newRequests}_${type}`))
        newReq[req] = res
    })

    return newReq
}

export function createTypes(base) {
    const types = ['REQUEST', 'SUCCESS', 'ERROR']
    let res = {}

    types.forEach(type => (res[type] = `${base}_${type}`))

    return res
}
