const game = document.querySelector("#game");
const time = 10;
const speed = 5;

let keyEvent;

/**
* Spawn entity
* @param entity - Entity to spwan
* @param x - X position
* @param y - Y position
*/
const spawnEntity = (entity, x, y) => {
  entity.style.left = x+"px";
  entity.style.top = y+"px";

  game.append(entity);
}
/***/

/**
* Manage player move
* @param player - Player entity
* @param input - Input mapping
*/
const playerMove = (player, input) => {
  let pos = {
    x: Number(player.style.left.slice(0, -2)),
    y: Number(player.style.top.slice(0, -2))
  };

  if (keyEvent) {
    if (pos.x > 500) player.style.left = "0px";
    else if (pos.x < 0) player.style.left = "500px";
    else if (pos.y > 500) player.style.top = "0px";
    else if (pos.y < 0) player.style.top = "500px";
    else {
      if (keyEvent.key == input.right) player.style.left = pos.x + speed + "px";
      if (keyEvent.key == input.left) player.style.left = pos.x - speed + "px";
      if (keyEvent.key == input.top) player.style.top = pos.y - speed + "px";
      if (keyEvent.key == input.bottom) player.style.top = pos.y + speed + "px";
    }
  }
};
/***/

/**
* Create entity
* @param - New entity 
*/
const createEntity = () => {
  let entity = document.createElement("div");
  entity.setAttribute("id", "player");
  entity.style = "width: 50px; height: 50px; background: blue; position: absolute";

  return entity;
}
/***/

/**
* Start function, excute once on start  
*/
const start = () => {
  document.addEventListener("keydown", (e) => keyEvent = e); // Listen key event
  document.addEventListener("keyup", (e) => keyEvent = undefined); // Reset key event

  const player = createEntity();
  spawnEntity(player, 0, 0);
};
/***/

/**
* update function, execute every tick
*/
const update = () => {
  playerMove(player, {left: "q", right: "d", top: "z", bottom: "s"});
}
/***/

start();
setInterval(update, time);
