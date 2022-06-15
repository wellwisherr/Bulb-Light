// Global variables

var imgId = document.getElementById("bulb-img");
var blink;

// Methods
var lightControl = {
switchOnBtn : '',
switchOffBtn : '',


initLightControl: function(object){

  this.switchOnBtn = object.switchOnBtn;
  document.querySelector(object.switchOnBtn).addEventListener('click',function() {
    lightControl.lightStatus(object.statusOn);
    clearInterval(blink);
     blink = null;
  });

  this.switchOffBtn = object.switchOffBtn;
  document.querySelector(object.switchOffBtn).addEventListener('click',function() {
    lightControl.lightStatus(object.statusOff);
    clearInterval(blink);
     blink = null;
  });
},  

lightStatus: function (status) {
  //   debugger;
  if (status == lightbulbOption.statusOff) {
    imgId.src = lightbulbOption.bulbOffImg;
  }    
  if (status == lightbulbOption.statusOn) {
    imgId.src = lightbulbOption.bulbOnImg;
  }
},

blinkBulb : function () {
  document.querySelector(lightbulbOption.swicthBlinkBtn).addEventListener('click',function() {
    if(blink == null){
    blink =  setInterval(lightControl.swapBulb, 1000);
    }
    else{
      clearInterval(blink);
      blink = null;
    }
  });
},



 swapBulb: function (){
  var bulb1 = lightbulbOption.bulbOffImg;
  var bulb2 = lightbulbOption.bulbOnImg;
  if(imgId.src == bulb1){
    imgId.src = bulb2;
  }

  else{
    imgId.src = bulb1;
    }
}
};

var lightbulbOption = {
switchOnBtn : '#switchOn',
switchOffBtn : '#switchOff',
swicthBlinkBtn  : '#switchBlink',
stopBlinkBtn : '#stopBlink',
bulbOffImg : 'https://st.depositphotos.com/1020618/2357/i/600/depositphotos_23575953-stock-photo-light-bulb.jpg',
bulbOnImg : 'https://photonics.creol.ucf.edu/wp-content/uploads/sites/4/2018/06/Light-Bulb-on-Black-1024x1024.jpg',
statusOn : 'ON',
statusOff : 'OFF',
imgId : '#bulb-img'
}


lightControl.initLightControl(lightbulbOption);
lightControl.blinkBulb();
