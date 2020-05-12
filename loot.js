let item_bow = 0;
let item_sword = 0;
let item_axe = 0;
let item_mace = 0;
let item_spear = 0;
const game_div = document.getElementById("clickGame");
const displayPrize = document.getElementById("displayPrize");
const bow_inv = document.querySelector('.bow-counter p');
const sword_inv = document.querySelector('.sword-counter p');
const axe_inv = document.querySelector('.axe-counter p');
const mace_inv = document.querySelector('.mace-counter p');
const spear_inv = document.querySelector('.spear-counter p');

function getLoot(){
  const prizes = ['bow', 'sword', 'axe', 'mace', 'spear'];
  const randomNumber = Math.floor(Math.random()*prizes.length);
  return prizes[randomNumber];
}

function addBow(){
  item_bow++;
  bow_inv.innerHTML = item_bow;
}
function addSword(){
  item_sword++;
  sword_inv.innerHTML = item_sword;
}
function addAxe(){
  item_axe++;
  axe_inv.innerHTML = item_axe;
}
function addMace(){
  item_mace++;
  mace_inv.innerHTML = item_mace;
}
function addSpear(){
  item_spear++;
  spear_inv.innerHTML = item_spear;
}

function play(){
  const randomLoot = getLoot();
  switch(randomLoot){
    case "bow":
      addBow();
      displayPrize.innerHTML = "You win a bow.";
      break;
    case "sword":
      addSword();
      displayPrize.innerHTML = "You win a sword.";
      break;
    case "axe":
      addAxe();
      displayPrize.innerHTML = "You win an axe.";
      break;
    case "mace":
      addMace();
      displayPrize.innerHTML = "You win a mace.";
      break;
    case "spear":
      addSpear();
      displayPrize.innerHTML = "You win a spear.";
      break;
  }
}

function game(){
  game_div.addEventListener("click", function(){
    play();
  })
}

game();
