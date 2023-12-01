function swapChair(){
   var chair = document.getElementById('chair');
   
   if(chair.src.endsWith("./assets/green-metal.glb")) {
      chair.src='./assets/blue-metal.glb';
   } else if (chair.src.endsWith("./assets/blue-metal.glb")) {
      chair.src='./assets/original-basic.glb';
   } else if(chair.src.endsWith('./assets/original-basic.glb')) {
      chair.src = './assets/green-metal.glb';
   }else{
      chair.src= './assets/green-metal.glb';
   }
}
const viewer = document.getElementById('chair');

  function changeCameraView() {
      viewer.cameraOrbit = '180deg 0deg 3m'; 
  }
function swapDesk(){
   var table = document.getElementById('table');
   
   if(table.src.endsWith("./assets/original-desk.glb")) {
      table.src='./assets/green-desk.glb';
   } else if (table.src.endsWith("./assets/green-desk.glb")) {
      table.src='./assets/combo-desk.glb';
   } else if(table.src.endsWith('./assets/combo-desk.glb')) {
      table.src = './assets/original-desk.glb';
   }else{
      table.src= './assets/original-desk.glb';
   }
}
function swapLamp(){
   var lamp = document.getElementById('lamp');
   
   if(lamp.src.endsWith("./assets/lamp1.glb")) {
      lamp.src='./assets/lamp2.glb';
   } else if (lamp.src.endsWith("./assets/lamp2.glb")) {
      lamp.src='./assets/lamp3.glb';
   } else if(lamp.src.endsWith('./assets/lamp3.glb')) {
      lamp.src = './assets/lamp1.glb';
   }else{
      lamp.src= './assets/lamp1.glb';
   }
}

