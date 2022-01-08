roadMines = [false, false, true, false,false, false,  true, false, false, false];
console.log(roadMines)

let position = roadMines.indexOf() + 1;
console.log(position);
let crash = "Танк поврежден"
let gg = "Танк уничтожен"

for (let mine of roadMines) {
    if (mine == false) {
        position +=1
        console.log("Танк переместился на:" + position); 
    } else if (mine === true)  {
        position +=1
        console.log(crash);
    }
}





