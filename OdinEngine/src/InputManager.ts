/******************************************************************************
 * @Author                : jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-02-28 22:09:54                               *
 * @LastEditors           : jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-02-28 22:11:06                               *
 *****************************************************************************/

/* SUMMARY
  * Start keys listenner 
  * Check if key is pressed
*/

class InputManager {
  private activeKeys: string[] = [];
  
  /**
  * Start keys listenner 
  */
  constructor() {
    document.addEventListener("keydown", (e) => {
      if (!this.isKeyPressed(e.key)) {
        this.activeKeys.push(e.key);
      }
    });

    document.addEventListener("keyup", (e) => {
      let index = this.activeKeys.findIndex((el) => el == e.key);
      if (index != -1) this.activeKeys.splice(index, 1);
    });
  }
  /***/

  /**
  * Check if key is pressed
  */
  isKeyPressed(key: string): boolean {
    return this.activeKeys.find((el) => el == key) ? true : false;
  }
  /***/
}

export default InputManager;
