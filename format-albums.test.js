const formatAlbums = require("./format-albums.js");

describe("formatAlbums", () => {
  const references = {
    Grammatics: 9923,
    Doves: 324,
  };
  test("returns an empty array when passed an empty array", () => {
    //ARRANGE
    const arr0 = [];
    //ACT
    const output = formatAlbums(arr0, references);
    const expected = [];
    //ASSERT
    expect(output).toEqual(expected);
  });
  test("returns an array with one correct object when passed an one object array", () => {
    //ARRANGE
    const arr1 = [
      { name: "Grammatics", artist: "Grammatics", releaseYear: 2009 },
    ];
    const references = {
      Grammatics: 9923,
      Doves: 324,
    };
    //ACT
    const output = formatAlbums(arr1, references);
    const expected = [
      { name: "Grammatics", artistId: 9923, releaseYear: 2009 },
    ];
    //ASSERT
    expect(output).toEqual(expected);
  });
  test("returns an array with multiple correct objects when passed an multi-object array", () => {
    //ARRANGE
    const arr1 = [
      { name: "Grammatics", artist: "Grammatics", releaseYear: 2009 },
      { name: "Doves", artist: "Doves", releaseYear: 2011 },
    ];

    //ACT
    const output = formatAlbums(arr1, references);
    const expected = [
      { name: "Grammatics", artistId: 9923, releaseYear: 2009 },
      { name: "Doves", artistId: 324, releaseYear: 2011 },
    ];
    //ASSERT
    expect(output).toEqual(expected);
  });
  test("returns array with different reference in memory", () => {
    //ARRANGE
    const input = [
      { name: "Grammatics", artist: "Grammatics", releaseYear: 2009 },
      { name: "Doves", artist: "Doves", releaseYear: 2011 },
    ];
    //ACT
    const outputArray = formatAlbums(input, references);
    //ASSERT
    expect(outputArray).not.toBe(input);
  });
  test("function should not mutate the objects within the original array", () => {
    //ARRANGE
    const input = [
      { name: "Grammatics", artist: "Grammatics", releaseYear: 2009 },
      { name: "Doves", artist: "Doves", releaseYear: 2011 },
    ];
    const inputCopy = [
      { name: "Grammatics", artist: "Grammatics", releaseYear: 2009 },
      { name: "Doves", artist: "Doves", releaseYear: 2011 },
    ];
    //ACT
    formatAlbums(input, references);
    //ASSERT
    expect(input).toEqual(inputCopy);
  });
});
