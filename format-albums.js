const formatAlbums = (array, refs) => {
  return array.map((band) => {
    const spreadObj = { ...band };
    delete spreadObj.artist;
    spreadObj.artistId = refs[spreadObj.name];
    return spreadObj;
  });
};

module.exports = formatAlbums;
