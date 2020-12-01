import 'promise-polyfill/src/polyfill'
import 'whatwg-fetch'
const API_ANALYTICS = 'http://47.116.129.205:8081'
export default (context, inject) => {
  const analytics = (route) => {

    if (process.env.NODE_ENV !== 'production') return
    
    fetch(
      `${API_ANALYTICS}/` +
      `qinziceshi/` +
      `${route}`,
      {
        headers: {
          'Analytics-Token': '3/aehCPAp5MZYmwUJx9jGA=='
        }
      }
    )
  }
  analytics('uv')
  inject('analytics', analytics)
}