const fetchData = require("../src/app/utils/fetchedData");

(async () => {
  try {
    const data = await fetchData();
    console.log(data);
  }catch (e) {
    console.error(e);
  }
})();