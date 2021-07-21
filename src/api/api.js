const baseURL = "https://api.unsplash.com/";
const clientId = "VBnr9gIahOXlJppkIbkLcSo6YjvgsXXRx13rHm9faE0";
export const getImages = async () => {
  try {
    const res = await fetch(
      `${baseURL}photos?per_page=30&client_id=${clientId}`,
      {}
    );
    const json = await res.json();
    return json;
  } catch (error) {
    console.log("error");
  }
};

export const getSearchImages = async (query) => {
  try {
    const res = await fetch(
      `${baseURL}search/photos?per_page=30&query=${query}&client_id=${clientId}`,
      {}
    );
    const json = await res.json();
    return json.results;
  } catch (error) {
    console.log("error");
  }
};
