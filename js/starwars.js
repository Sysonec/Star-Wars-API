class StarWars {
  async searchStuff(result) {
    const infoResponse = await fetch(
      `https://swapi.co/api/people/?search=${result}`
    );

    const stuff = await infoResponse.json();

    return {
      stuff
    };
  }

  async getStuff(type) {
    let url = `https://swapi.co/api/${type}/`;

    const results = [];

    do {
      const linkRes = await fetch(url);
      const data = await linkRes.json();
      url = data.next;
      results.push(...data.results);
    } while (url);
    return results;
  }
}
