
import axios from 'axios'
const base = '/api'
export const reqNavDatas = ()=>axios.get(base+'/nav')


