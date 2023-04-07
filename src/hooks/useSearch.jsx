const useSearch = (text, items) => {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );

  return { filteredItems };
};

export default useSearch;
