C2 = {
	type: "Clubs",
	number: 2,
	img: "C2.png"
}

C3 = {
	type: "Clubs",
	number: 3,
	img: "C3.png"
}

C4 = {
	type: "Clubs",
	number: 4,
	img: "C4.png"
}

C5 = {
	type: "Clubs",
	number: 5,
	img: "C5.png"
}

C6 = {
	type: "Clubs",
	number: 6,
	img: "C6.png"
}

C7 = {
	type: "Clubs",
	number: 7,
	img: "C7.png"
}

C8 = {
	type: "Clubs",
	number: 8,
	img: "C8.png"
}

C9 = {
	type: "Clubs",
	number: 9,
	img: "C9.png"
}

C10 = {
	type: "Clubs",
	number: 10,
	img: "C10.png"
}

CJ = {
	type: "Clubs",
	number: 10,
	img: "CJ.png"
}

CQ = {
	type: "Clubs",
	number: 10,
	img: "CQ.png"
}

CK = {
	type: "Clubs",
	number: 10,
	img: "CK.png"
}

CA = {
	type: "Clubs",
	number: 11,
	img: "CA.png"
}

D2 = {
	type: "Spades",
	number: 2,
	img: "D2.png"
}

D3 = {
	type: "Spades",
	number: 3,
	img: "D3.png"
}

D4 = {
	type: "Spades",
	number: 4,
	img: "D4.png"
}

D5 = {
	type: "Spades",
	number: 5,
	img: "D5.png"
}

D6 = {
	type: "Spades",
	number: 6,
	img: "D6.png"
}

D7 = {
	type: "Spades",
	number: 7,
	img: "D7.png"
}

D8 = {
	type: "Spades",
	number: 8,
	img: "D8.png"
}

D9 = {
	type: "Spades",
	number: 9,
	img: "D9.png"
}
D10 = {
	type: "Spades",
	number: 10,
	img: "D10.png"
}

DJ = {
	type: "Spades",
	number: 10,
	img: "DJ.png"
}

DQ = {
	type: "Spades",
	number: 10,
	img: "DQ.png"
}

DK = {
	type: "Spades",
	number: 10,
	img: "DK.png"
}

DA = {
	type: "Spades",
	number: 11,
	img: "DA.png"
}

H2 = {
	type: "Heart",
	number: 2,
	img: "H2.png"
}

H3 = {
	type: "Heart",
	number: 3,
	img: "H3.png"
}

H4 = {
	type: "Heart",
	number: 4,
	img: "H4.png"
}

H5 = {
	type: "Heart",
	number: 5,
	img: "H5.png"
}

H6 = {
	type: "Heart",
	number: 6,
	img: "H6.png"
}

H7 = {
	type: "Heart",
	number: 7,
	img: "H7.png"
}

H8 = {
	type: "Heart",
	number: 8,
	img: "H8.png"
}

H9 = {
	type: "Heart",
	number: 9,
	img: "H9.png"
}
H10 = {
	type: "Heart",
	number: 10,
	img: "H10.png"
}

HJ = {
	type: "Heart",
	number: 10,
	img: "HJ.png"
}

HQ = {
	type: "Heart",
	number: 10,
	img: "HQ.png"
}

HK = {
	type: "Heart",
	number: 10,
	img: "HK.png"
}

HA = {
	type: "Heart",
	number: 11,
	img: "HA.png"
}
S2 = {
	type: "Spades",
	number: 2,
	img: "S2.png"
}

S3 = {
	type: "Spades",
	number: 3,
	img: "S3.png"
}

S4 = {
	type: "Spades",
	number: 4,
	img: "S4.png"
}

S5 = {
	type: "Spades",
	number: 5,
	img: "S5.png"
}
S6 = {
	type: "Spades",
	number: 6,
	img: "S6.png"
}

S7 = {
	type: "Spades",
	number: 7,
	img: "S7.png"
}

S8 = {
	type: "Spades",
	number: 8,
	img: "S8.png"
}

S9 = {
	type: "Spades",
	number: 9,
	img: "S9.png"
}
S10 = {
	type: "Spades",
	number: 10,
	img: "S10.png"
}

SJ = {
	type: "Spades",
	number: 10,
	img: "SJ.png"
}

SQ = {
	type: "Spades",
	number: 10,
	img: "SQ.png"
}

SK = {
	type: "Spades",
	number: 10,
	img: "SK.png"
}

SA = {
	type: "Spades",
	number: 11,
	img: "SA.png"
}

C100 = {
	type: "chips",
	number: 100,
	img: "100.png"
}

C50 = {
	type: "chips",
	number: 50,
	img: "50.png"
}

C20 = {
	type: "chips",
	number: 20,
	img: "20.png"
}

document.getElementById("Hit").disabled = true;
document.getElementById("Stand").disabled = true;


startCHIPS = 10000

chips = document.getElementById("chips")

chips_array = [C20, C50, C100]
chips.innerHTML = startCHIPS

betPOINT = []
let BETSCORE = 0

for (let i = 0; i < betPOINT.length; i++) {
    BETSCORE +=  betPOINT[i];
}
betted = document.getElementById("Betted")
betted.innerHTML = BETSCORE


chips.innerHTML = localStorage.getItem("notes")


const makeabet = () => {
    let betchips = betted.innerHTML   
	betchips = parseInt(betchips)
  	document.getElementById('doneBet').innerHTML = `Bet Chips: ${betchips}`
    
  	document.getElementById('TC100').onclick = null;
  	document.getElementById('TC50').onclick = null;
  	document.getElementById('TC20').onclick = null;
  	document.getElementById('C100').onclick = null;
  	document.getElementById('C50').onclick = null;
  	document.getElementById('C20').onclick = null;
  	document.getElementById('btnn').disabled = true ;


  	document.getElementById("Hit").disabled = false;
    document.getElementById("Stand").disabled = false;
} 




function bet100() {
  document.getElementById("BetBlock").innerHTML = `<a href="#" onclick="take100();"  id="TC100"><img src="100.png" style="width:130px;height: 100px;margin-left: 60px;"></a>`
  betPOINT.push(100)

  startCHIPS = chips.innerHTML
  startCHIPS = parseInt(startCHIPS)
  
  startCHIPS -= 100
  chips.innerHTML = localStorage.getItem("notes")
  let BETSCORE = 0

	for (let i = 0; i < betPOINT.length; i++) {
	    BETSCORE +=  betPOINT[i];
	}
  
  chips.innerHTML = startCHIPS

  if(startCHIPS < 100){
	document.getElementById('C100').onclick = null;
	if(startCHIPS < 50){
		document.getElementById('C50').onclick = null;
		document.getElementById('C100').onclick = null;
    }
    else if(startCHIPS < 20){
	  	document.getElementById('C100').onclick = null;
	  	document.getElementById('C50').onclick = null;
	  	document.getElementById('C20').onclick = null;
    }
  }
  betted.innerHTML = BETSCORE

  
  return BETSCORE
}

function bet50() {
  document.getElementById("BetFlex1").innerHTML = `<a href="#" onclick="take50();"  id="TC50"><img src="50.png" style="width:130px;height: 100px;"></a>`
  betPOINT.push(50)

  startCHIPS = chips.innerHTML
  startCHIPS = parseInt(startCHIPS)

  startCHIPS -= 50
  chips.innerHTML = localStorage.getItem("notes")
  let BETSCORE = 0

	for (let i = 0; i < betPOINT.length; i++) {
	    BETSCORE +=  betPOINT[i];
	}
  
  chips.innerHTML = startCHIPS
  if(startCHIPS < 50){
  	document.getElementById('C50').onclick = null;
	document.getElementById('C100').onclick = null;
	if(startCHIPS < 20){	
	  	document.getElementById('C100').onclick = null;
	  	document.getElementById('C50').onclick = null;
	  	document.getElementById('C20').onclick = null;
    }
    else if(startCHIPS < 100){
	    document.getElementById('C100').onclick = null;
   }
  }
  betted.innerHTML = BETSCORE

  
  return BETSCORE
}



function bet20() {
  document.getElementById("BetFlex2").innerHTML = `<a href="#" onclick="take20();" id="TC20"><img src="20.png" style="width:130px;height: 100px;"></a>`	
  betPOINT.push(20)

  startCHIPS = chips.innerHTML
  startCHIPS = parseInt(startCHIPS)

  startCHIPS -= 20
  chips.innerHTML = localStorage.getItem("notes")
  let BETSCORE = 0

	for (let i = 0; i < betPOINT.length; i++) {
	    BETSCORE +=  betPOINT[i];
	}

  chips.innerHTML = startCHIPS
  if(startCHIPS < 20){
  	document.getElementById('C100').onclick = null;
  	document.getElementById('C50').onclick = null;
  	document.getElementById('C20').onclick = null;
  }
  else if(startCHIPS < 50){
	document.getElementById('C50').onclick = null;
	document.getElementById('C100').onclick = null;
  }
  else if(startCHIPS < 100){
	document.getElementById('C100').onclick = null;
  }
  betted.innerHTML = BETSCORE

  
  return BETSCORE
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function take100() {
    let BETSCORE = 0

	for (let i = 0; i < betPOINT.length; i++) {
	    BETSCORE +=  betPOINT[i];
	}
    const index = betPOINT.indexOf(100);
	if (betPOINT.includes(100)) { // only splice array when item is found
	  betPOINT.splice(index, 1); // 2nd parameter means remove one item only
	  BETSCORE -= 100
      startCHIPS += 100
	}
	if(betPOINT.includes(100) == false){
		document.getElementById("BetBlock").innerHTML = ``
		betted.innerHTML = BETSCORE
		chips.innerHTML = startCHIPS
	}

  if(BETSCORE < 20){
  	document.getElementById('TC100').onclick = null;
  	document.getElementById('TC50').onclick = null;
  	document.getElementById('TC20').onclick = null;
  }
  else if(BETSCORE < 50){
	document.getElementById('TC50').onclick = null;
	document.getElementById('TC100').onclick = null;
  }
  else if(BETSCORE < 100){
	document.getElementById('TC100').onclick = null;
  }
  chips.innerHTML = startCHIPS
  betted.innerHTML = BETSCORE


  
  return BETSCORE
}








function take50() {
    let BETSCORE = 0

	for (let i = 0; i < betPOINT.length; i++) {
	    BETSCORE +=  betPOINT[i];
	}
  const index = betPOINT.indexOf(50);
  if (betPOINT.includes(50)) { // only splice array when item is found
	  betPOINT.splice(index, 1); // 2nd parameter means remove one item only
	  BETSCORE -= 50
      startCHIPS += 50
  }
  if(betPOINT.includes(50) == false){
		document.getElementById("BetFlex1").innerHTML = ``
		betted.innerHTML = BETSCORE
		chips.innerHTML = startCHIPS
	}

  if(BETSCORE < 20){
  	document.getElementById('TC100').onclick = null;
  	document.getElementById('TC50').onclick = null;
  	document.getElementById('TC20').onclick = null;
  }
  else if(BETSCORE < 50){
	document.getElementById('TC50').onclick = null;
	document.getElementById('TC100').onclick = null;
  }
  else if(BETSCORE < 100){
	document.getElementById('TC100').onclick = null;
  }

  chips.innerHTML = startCHIPS
  betted.innerHTML = BETSCORE

  
  return BETSCORE
}







function take20() {
    let BETSCORE = 0

	for (let i = 0; i < betPOINT.length; i++) {
	    BETSCORE +=  betPOINT[i];
	}

    const index = betPOINT.indexOf(20);

	if (betPOINT.includes(20)) { // only splice array when item is found
	  betPOINT.splice(index, 1); // 2nd parameter means remove one item only
	  BETSCORE -= 20
      startCHIPS += 20
	}
	if(betPOINT.includes(20) == false){
		document.getElementById("BetFlex2").innerHTML = ``
		betted.innerHTML = BETSCORE
		chips.innerHTML = startCHIPS
	}
  
  if(BETSCORE < 20){
  	document.getElementById('TC100').onclick = null;
  	document.getElementById('TC50').onclick = null;
  	document.getElementById('TC20').onclick = null;
  }
  else if(BETSCORE < 50){
	document.getElementById('TC50').onclick = null;
	document.getElementById('TC100').onclick = null;
  }
  else if(BETSCORE < 100){
	document.getElementById('TC100').onclick = null;
  }
  
  chips.innerHTML = startCHIPS
  betted.innerHTML = BETSCORE
  return BETSCORE
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let img_array = [C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK, CA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, DA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, HA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, SA]

let player = []
let otherplayer = []



random_index = Math.floor(Math.random() * img_array.length)
selected = img_array[random_index]
selected_image = selected.img
player.push(selected.number)
img_array.splice(random_index, 1)

random_index2 = Math.floor(Math.random() * img_array.length)
selected2 = img_array[random_index2]
selected_image2 = selected2.img
player.push(selected2.number)
img_array.splice(random_index2, 1)

let playerscore = 0

for (let i = 0; i < player.length; i++) {
    playerscore += player[i];
}
let count = 0
    player.forEach(element => {
			if (element === 11) {
			       count += 1
			}
	});

document.getElementById("ID1").src = selected_image
document.getElementById("ID2").src = selected_image2
document.getElementById('Score').innerHTML = `Score: ${playerscore}`










let house_random_index = Math.floor(Math.random() * img_array.length)
let house_selected = img_array[house_random_index]
let house_selected_image = house_selected.img
otherplayer.push(house_selected.number)
img_array.splice(house_random_index, 1)

let house_random_index2 = Math.floor(Math.random() * img_array.length)
let house_selected2 = img_array[house_random_index2]
let house_selected_image2 = house_selected2.img
otherplayer.push(house_selected2.number)
img_array.splice(house_random_index2, 1)

document.getElementById('OppID1').src = house_selected_image

document.getElementById('HouseScore').innerHTML = `House score: ${house_selected.number}`






function hit(){ 
	random_index3 = Math.floor(Math.random() * img_array.length)
	selected3 = img_array[random_index3]
	selected_image3 = selected3.img
    player.push(selected3.number)
	img_array.splice(random_index3, 1)
    

    hitcards = document.getElementById('playerCards')

	hitcards.innerHTML += `
      <img src="${selected_image3}">
	`
    let playerscore = 0
    
	for (let i = 0; i < player.length; i++) {
        playerscore += player[i];
    }    
    let count = 0
    player.forEach(element => {
			   if (element === 11) {
			       count += 1
			   }
	});

    

    if (playerscore > 21){
    	if(playerscore > 21 && selected.number || selected2.number || selected3.number == 11){
    		let i = 0
    	    while(i < count){
    	    	i++
    	    	playerscore -= 10
    	    	document.getElementById('Score').innerHTML = `Score: ${playerscore}`
    	    }
            if (playerscore > 21){
	    	    document.getElementById('Score').innerHTML = `You Loose - Score: ${playerscore}`
	    	    
			    localStorage.setItem("notes", parseInt(chips.innerHTML))
	    	    stand()        
	        }
	        else if(playerscore == 21){
	    	    document.getElementById('Score').innerHTML = `Blackjack - Score: ${playerscore}`
                wonchips = doneBet.innerHTML
		        wonchips = wonchips.slice(10,)
			    wonchips = parseInt(wonchips)
			    wonchips = wonchips * 2
			    startCHIPS = startCHIPS + wonchips
			    chips.innerHTML = startCHIPS 

	    	    stand() 	        	
	        }  
        }

    }
    else if (playerscore == 21){
    	document.getElementById("Hit").disabled = true;
    	document.getElementById('Score').innerHTML = `Blackjack - Score: ${playerscore}`
    	wonchips = doneBet.innerHTML
	    wonchips = wonchips.slice(10,)
		wonchips = parseInt(wonchips)
		wonchips = wonchips * 2
		startCHIPS = startCHIPS + wonchips
		chips.innerHTML = startCHIPS
    	stand()
    }
    else if (playerscore >= 22){
    	    document.getElementById('Score').innerHTML = `You Loose - Score: ${playerscore}`
    	    
			localStorage.setItem("notes", parseInt(chips.innerHTML))
    }
    else{
    	document.getElementById('Score').innerHTML = `Score: ${playerscore}` 
    }

}





function stand(){
	

    document.getElementById('OppID2').src = house_selected_image2
    document.getElementById('HouseScore').innerHTML = `House score: ${house_selected.number + house_selected2.number}`
    
    let housescore = 0
	for (let i = 0; i < otherplayer.length; i++) {
      housescore += otherplayer[i];
    }
    
    let playerscore = 0
    
	for (let i = 0; i < player.length; i++) {
        playerscore += player[i];
    }


    let count = 0
    player.forEach(element => {
			   if (element === 11) {
			       count += 1
			   }
	});
    if (playerscore > 21){
    	if(playerscore > 21 && selected.number || selected2.number || selected3.number == 11){
    		let i = 0
    	    while(i < count){
    	    	i++
    	    	playerscore -= 10
    	    }
        }
	    document.getElementById('Score').innerHTML = `Score: ${playerscore}` 
    }

    while(housescore < 16 && playerscore <= 21 && housescore <= playerscore){
            house_random_index3 = Math.floor(Math.random() * img_array.length)
			house_selected3 = img_array[house_random_index3]
			house_selected_image3 = house_selected3.img
			otherplayer.push(house_selected3.number)
			img_array.splice(house_random_index3, 1)
            housescore = 0
            for (let i = 0; i < (otherplayer.length); i++) {
                 housescore += otherplayer[i];
            }
			housecards = document.getElementById('OtherPlayer')

			housecards.innerHTML += `
		      <img src="${house_selected_image3}">
			`
    }

    
     if(housescore > playerscore){
            document.getElementById('Score').innerHTML = `You Loose. Score: ${playerscore}`

			localStorage.setItem("notes", parseInt(chips.innerHTML))

       if (housescore > 21){
     	   document.getElementById('Score').innerHTML = `You Win. Score: ${playerscore}`
     	   wonchips = doneBet.innerHTML
	       wonchips = wonchips.slice(10,)
		   wonchips = parseInt(wonchips)
		   wonchips = wonchips * 2
		   startCHIPS = startCHIPS + wonchips
		   chips.innerHTML = startCHIPS
		   localStorage.setItem("notes", chips.innerHTML)
     	}
     }
       else if (playerscore > housescore){
     	document.getElementById('Score').innerHTML = `You Win. Score: ${playerscore}`

     	wonchips = doneBet.innerHTML
		wonchips = wonchips.slice(10,)
		wonchips = parseInt(wonchips)
		wonchips = wonchips * 2
		startCHIPS = startCHIPS + wonchips
		chips.innerHTML = startCHIPS
		localStorage.setItem("notes", chips.innerHTML)

     	if(playerscore > 21){
     	    document.getElementById('Score').innerHTML = `You Loose. Score: ${playerscore}`
     	    
			localStorage.setItem("notes", parseInt(chips.innerHTML))
     	}
     }
	   else if(housescore == playerscore){
	       document.getElementById('Score').innerHTML = `Equal with Score: ${playerscore}`
	 }


    
    console.log(housescore)

	document.getElementById('HouseScore').innerHTML = `House score: ${housescore}`

    document.getElementById("Hit").disabled = true;
    document.getElementById("Stand").disabled = true;

}



if(playerscore == 21 && document.getElementById("btnn").clicked){
		stand()
		document.getElementById('Score').innerHTML = `You Win. Score: ${playerscore}`

		wonchips = doneBet.innerHTML
		wonchips = wonchips.slice(10,)
		wonchips = parseInt(wonchips)
		wonchips = wonchips * 2
		startCHIPS = startCHIPS + wonchips
		chips.innerHTML = startCHIPS
		localStorage.setItem("notes", parseInt(chips.innerHTML))

	if (playerscore == 21 && housescore == 21){
		document.getElementById('Score').innerHTML = `Equal with Score: ${playerscore}`
    }
}

if(selected.number && selected2.number == 11){
   playerscore = 12
   document.getElementById('Score').innerHTML = `Score: ${playerscore}`
}

