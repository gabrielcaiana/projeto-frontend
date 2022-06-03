export default function ({ $axios }, inject) {
  const get = async () => {
    let response
    try {
      response = await $axios.$get('/db.json', {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
    } catch (error) {
      console.log(error)
    }

    return response
  }

  inject('dataApi', {
    get,
  })
}
