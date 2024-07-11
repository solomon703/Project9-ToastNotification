let toastBox = document.getElementById("toastBox");
let sucessMsg = '<i class="fa-solid fa-check"></i>Sucessfully submited';
let errorMsg = '<i class="fa-solid fa-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-exclamation"></i> Invalid input ! Please check once';
function showToast(msg){
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if(msg.includes('error')){
    toast.classList.add('error');
  }
  if(msg.includes('Invalid')){
    toast.classList.add('invalid');
  }
  setTimeout(()=>{
    toast.remove();
  },6000);
}
