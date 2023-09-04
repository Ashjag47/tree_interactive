import { v4 as uuidv4 } from "uuid";

function BFS(id, tree, name, mode) {
  const queue = [];
  queue.unshift(tree);
  while (queue.length > 0) {
    const current = queue.pop();
    if (current.attributes.id === id) {
      if (mode === "Add") {
        const newNode = { name, attributes: { id: uuidv4() } };
        if (!current.children) current.children = [];
        current.children.push(newNode);
        return { ...tree };
      } else if (mode === "Update") {
        current.name = name;
        return { ...tree };
      }
    }
    const len = current?.children?.length;
    for (let i = 0; i < len; i++) {
      queue.unshift(current.children[i]);
    }
  }
}

export default BFS;
