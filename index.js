let nomeHeroi = "NomeDoHeroi"
let xp = 1000
let nivel = "comun"

if (xp < 1001) {
    nivel = "Ferro" 
} else if (xp < 2001) {
    nivel = "Bronze" 
} else if (xp < 5001) {
    nivel = "Prata" 
} else if (xp < 7001) {
    nivel = "Ouro" 
} else if (xp < 8001) {
    nivel = "Platina" 
} else if (xp < 9001) {
    nivel = "Ascendente" 
} else if (xp < 10001) {
    nivel = "Imortal" 
} else if (xp >= 10001){
    nivel = "Radiante" 
}

switch(nivel){
    case "Ferro":
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Ferro")
        break
    case "Bronze":
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Bronze")
        break
    case "Prata":
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Prata")
        break
    case "Ouro":
        console.log("O Héroi de nome "+ nomeHeroi +" está no nível de Ouro")
        break
    case "Platina":
        console.log("O Héroi de nome "+ nomeHeroi +" está no nível de Platina")
        break
    case "Ascendente":
        console.log("O Héroi de nome "+ nomeHeroi +" está no nível de Ascendente")
        break
    case "Imortal":
        console.log("O Héroi de nome "+ nomeHeroi +" está no nível de Imortal")
        break
    case "Radiante":
        console.log("O Héroi de nome "+ nomeHeroi +" está no nível de Radiante")
        break
    default:
        console.log("Jogador comun")
        
}

