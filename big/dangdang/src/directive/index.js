import router from'../router'

export function ahref(el, binding){
	el.addEventListener('touchstart',function(){
		router.push(binding.arg)
	})
}

export function tap(el, binding){
	el.addEventListener('touchstart',function(){
		binding.value()
	})
}

export function picloop(el, binding){
	
}
