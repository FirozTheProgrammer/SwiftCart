const filterItems = (items, collection, filterItem) => {
  switch (collection) {
    case "category":
      return items?.filter(
        ({ category }) =>
          category.toLowerCase().split(" ").join("-") === filterItem
      );
    case "tag":
      return items?.filter(
        ({ tag }) => tag.toLowerCase().split(" ").join("-") === filterItem
      );
    case "search":
      if (!filterItem) return [];
      const searchText = new RegExp(filterItem, "i");
      return items?.filter(({ title }) => searchText.test(title));
    default:
      return items;
  }
};

export default filterItems;
