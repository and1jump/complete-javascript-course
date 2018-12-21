import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const proxy = "https://api.codetabs.com/v1/proxy?quest=";
    const key = "edff0ed4c2f591b3e8e6eb515218c0ca";
    try {
      const res = await axios(
        `${proxy}https://www.food2fork.com/api/search?key=${key}&q=${
          this.query
        }`
      );
      this.result = res.data.recipes;
    //   console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
