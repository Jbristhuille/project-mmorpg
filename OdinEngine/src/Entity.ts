/******************************************************************************
 * @Author                : jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-02-29 22:49:23                               *
 * @LastEditors           : jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-02-29 23:55:38                               *
 *****************************************************************************/

/* SUMMARY
  * Interfaces
*/

/* Interfaces */
interface IOptions {
  id: string,
  style: {
    key: string,
    value: string
  }[]
};
/***/

class Entity {
  public id: string;
  public node: HTMLElement;
  public instance: string;

  constructor(options: IOptions) {
    this.node = document.createElement("div");

    options.style.forEach((el) => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      this.node.style[el.key as any] = el.value;
    });

    this.node.style.position = "relative";
    this.node.setAttribute("id", options.id);
  }
};

export default Entity;
