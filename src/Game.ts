/******************************************************************************
 * @Author                : jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-02-28 21:44:36                               *
 * @LastEditors           : jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-02-28 22:19:22                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Interfaces
  * Initialize game
  * Spawn entity
*/

/* Imports */
import InputManager from "./InputManager";
/***/

/* Interfaces */
interface IGameOptions {
  width?: number,
  height?: number,
  tickTime?: number;
}
/***/

class Game {
  private game: HTMLElement;
  private width: number;
  private height: number;
  private tickTime: number;
  public inputManager = new InputManager();

  /**
  * Initialize game
  * @param options - Game options 
  */
  constructor(options?: IGameOptions) {
    this.width = options?.width || 500;
    this.height = options?.height || 500;
    this.tickTime = options?.tickTime || 10;

    const game = document.createElement("div");
    game.id = "odin-game";
    game.style.position = "relative";
    game.style.width = `${this.width}px`;
    game.style.height = `${this.height}px`;
    game.style.border = "solid 1px red"; // tmp
    game.style.overflow = "hidden";

    document.body.append(game);
    this.game = document.querySelector("#odin-game");
  };
  /***/

  /**
  * Spawn entity
  * @param entity - Entity to spwan
  * @param x - X position
  * @param y - Y position
  */
  spawnEntity(entity: HTMLElement, x: number, y: number): void { // tmp, replace html element by entity object
    entity.style.left = x+"px";
    entity.style.top = y+"px";

    this.game.append(entity);
  }
  /***/

  /**
  * Manage game cycle, execute on tick 
  */
  onTick(cb: () => void): void {
    setInterval(cb, this.tickTime);
  }
  /***/
};

export default Game;
