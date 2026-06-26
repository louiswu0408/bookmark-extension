// Name of the bookmark shortcut to search for / update / create
const BOOKMARK_NAME = "CMD";

chrome.action.onClicked.addListener(tab =>
  chrome.bookmarks.getTree(tree => {
    let found;

    const search = nodes =>
      nodes.some(n =>
        n.title === BOOKMARK_NAME && n.url
          ? (found = n)
          : n.children && search(n.children)
      );

    search(tree);

    found
      ? chrome.bookmarks.move(found.id, { parentId: "1" }, () =>
          chrome.bookmarks.update(found.id, { url: tab.url })
        )
      : chrome.bookmarks.create({
          parentId: "1",
          title: BOOKMARK_NAME,
          url: tab.url
        });
  })
);