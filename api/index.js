import axios from '../utils/request/request.js'
import path from './path.js'

const api ={
	getChengpin(){
		return axios.get(path.baseurl + path.chengpin)
	}
}

export default api