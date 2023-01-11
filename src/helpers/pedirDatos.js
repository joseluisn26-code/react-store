import dataShoes from '../data/shoes.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
                resolve(dataShoes)
        }, 3000)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const item = dataShoes.find((e) => e.id === id)

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: 'No se encontró ese producto'
                })
            }
        }, 500)
    })
}