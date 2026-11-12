const square = document.qureySelectorAll(".square")

square.forEach((square)=>{
	square.addEventListener("mouseover",(e)=>{
	changeColor(e.target.id)	
})
})

function changeColor(hover) {
square.forEach((square)=>{
if(square.id != hover){
	square.style.backgroundcolor = '#6F4E37'
}
})
}