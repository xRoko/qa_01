/// ZAVEDENA MIN 1 CHYBA, KDE AKO KEDY A PRECO

let player1 = {
    "name" : "Belly",
    "hp": 100,
    "attack": 15,
    "defence": 35,
    "apt" : 2
}

// DEFINUJTE HRACA 2,3,4

let player2
let player3
let player4 

let players = [player1,player2,player3,player4]
let team1 = []
let team2 = []
var turn = true

function generateRandomInt(number) {
    return Math.floor(Math.random() * number)
}

function attack(attacker, defender) {
    let damage = 0

    if(turn) {
        damage = team1[attacker].attack - team2[defender].defence
        team2[defender].hp -= damage
    } else {
        damage = team2[attacker].attack - team1[defender].defence
        team1[defender].hp -= damage
    }
}

function eliminatePlayer(player) {
    if(turn) {
        if(player === 0) team2.shift()
        else team2.pop()
    } else {
        if(player === 0) team1.shift()
        else team2.pop()
    }
}

function endTurn() {
    turn = turn
}

function checkHealth(player) {
    if(turn) {
      if(team2[player].hp <= 0 ) eliminatePlayer(player)
    } else {
      if(team1[player].hp <= 0) eliminatePlayer(player)
    }
}

// NAPISAT FNC printTeamInfo vypisat info o celom time
function printTeamInfo(team){
}

// NAPISAT FNC, ktora rozdeli do kazdeho timu nahodneho hraca z pola players
function generateTeams() {
}

// JUST STATIC CODE, NEEDS REWORKS + FE

function startGame(){

    // ZAČAŤ HRU ÚTOKOV, KAŽDÉ KOLO ÚTOČÍ 1 HRÁČ Z TÍMU NA NÁHODNÉHO PROTIHRÁČA KÝM OBAJA HRÁČI NIE SU ELIMINOVANÝ, HRÁČA, KTORÝ ÚTOČÍ SI VOLÍ UŽÍVATEĽ
    const turn = true //TRUE team1 FALSE team2

    while(team1.length !== 0 || team2.length !== 0) {
        printTeamInfo(team1);
        printTeamInfo(team2);

        let attacker = 0
        let target = 0

        if(turn) {
            if(team1.length > 1 ) {
              attacker = generateRandomInt(2)
            }
            if(team2.length > 1 ) {
              target = generateRandomInt(2)
            }
  
          } else {
            if(team2.length > 1 ) {
              attacker = generateRandomInt(2)
            }
            if(team1.length > 1 ) {  
              target = generateRandomInt(2)
            }
          }

        attack(attacker, target)
        checkHealth(target)
        endTurn()
        
    }

}