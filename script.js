//your JS code here. If required.
const boxes = document.querySelectorAll(".square")

boxes.forEach((box)=>{
box.addEventListener("mouseover",(e)=>{
	changeColor(e.target.id)
})
})
box.addEventListner("mouseout",(e)=>{
boxes.forEach((box)=>{
  square.style.backgroundColor="#E6E6FA"
}
)})
function changeColor(hoverBoxId){
box.forEach((box)=>{
	if(square.id != hoverBoxId){
    square.style.backgroundColor = "#6F4E37"
	}
})}