import produce from "immer"

let arr = []

let pushTo = produce(draft => {
	draft.push({birl: 'yeah'})
})

console.log(arr, pushTo(arr))

export default {
	teste() {
		console.log('Yeeeeah immer based')
	}
}
