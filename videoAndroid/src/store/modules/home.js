import * as types from '../mutation-type'
//import { SER_NUM } from '../mutation-type'
const home = {
    state: {
        number: 1
    },
    mutations: {
        [types.SER_NUM](state, num) {
            state.number = num
        }
    },
    actions: {},
    getters: {
        number: state => {
            return state.number
        }
    }
}
export default home