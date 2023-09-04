import { v4 as uuidv4 } from "uuid";

function BFSDelete(id, tree) {
  const queue = [];
  queue.unshift(tree);
  console.log(tree);
  console.log("q", queue);
  while (queue.length > 0) {
    const current = queue.pop();
    console.log(current);

    const len = current?.children?.length;
    for (let i = 0; i < len; i++) {
      if (current.children[i].attributes.id === id) {
        current.children = current.children.filter(
          (child) => child.attributes.id !== id
        );
        return { ...tree };
      }
      queue.unshift(current.children[i]);
    }
  }
}

function BFS(id, tree, name, mode) {
  if (mode === "Delete") {
    if (tree.attributes.id === id) {
      console.log("Cannot delete root node");
      return { ...tree };
    }
    return BFSDelete(id, tree);
  } else {
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
}

export default BFS;
