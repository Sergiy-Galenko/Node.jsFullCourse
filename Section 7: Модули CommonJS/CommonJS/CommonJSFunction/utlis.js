async function getData(url) {
    const res = await fetch(url);
    const data = await res.json(url);
    return data;
}

module.exports = getData;
