const createRef = require("./createRef.js");

describe("createRef", () => {
  it("should return an empty array when passed an empty array", () => {
    //ARRANGE
    const input = [];
    //ACT
    const output = createRef(input);
    const expected = {};
    //ASSERT
    expect(output).toEqual(expected);
  });
  it("should return a one property object (name:number) when passed a single object array", () => {
    //ARRANGE
    const input = [
      {
        name: "vel",
        phoneNumber: "01134445566",
        address: "Northcoders, Leeds",
      },
    ];
    //ACT
    const output = createRef(input);
    const expected = { vel: "01134445566" };
    //ASSERT
    expect(output).toEqual(expected);
  });
  it("should return a multi-property object (name:number) when passed a multi-object array", () => {
    //ARRANGE
    const input = [
      {
        name: "vel",
        phoneNumber: "01134445566",
        address: "Northcoders, Leeds",
      },
      {
        name: "ant",
        phoneNumber: "01612223344",
        address: "Northcoders, Manchester",
      },
      {
        name: "mitch",
        phoneNumber: "35798729873",
        address: "Northcoders, Manchester",
      },
    ];
    //ACT
    const output = createRef(input);
    const expected = {
      vel: "01134445566",
      ant: "01612223344",
      mitch: "35798729873",
    };
    //ASSERT
    expect(output).toEqual(expected);
  });
  it("should return a single property object (track:artist) when passed a single object array", () => {
    //ARRANGE
    const input = [
      {
        track: "11:11",
        artist: "Dinosaur Pile-Up",
        releaseYear: 2015,
        album: "Eleven Eleven",
      },
    ];
    //ACT
    const output = createRef(input, "track", "artist");
    const expected = { "11:11": "Dinosaur Pile-Up" };
    //ASSERT
    expect(output).toEqual(expected);
  });
  it("should return a multi-property object (track:artist) when passed a multiple object array", () => {
    //ARRANGE
    const input = [
      {
        track: "11:11",
        artist: "Dinosaur Pile-Up",
        releaseYear: 2015,
        album: "Eleven Eleven",
      },
      {
        track: "Powder Blue",
        artist: "Elbow",
        releaseYear: 2001,
        album: "Asleep In The Back",
      },
      {
        track: "Shake it off",
        artist: "TayTay",
        releaseYear: 2015,
        album: "1989",
      },
    ];
    //ACT
    const output = createRef(input, "track", "artist");
    const expected = {
      "11:11": "Dinosaur Pile-Up",
      "Powder Blue": "Elbow",
      "Shake it off": "TayTay",
    };
    //ASSERT
    expect(output).toEqual(expected);
  });
  it("should return a multi-property object (artist:album) when passed a multiple object array", () => {
    //ARRANGE
    const input = [
      {
        track: "11:11",
        artist: "Dinosaur Pile-Up",
        releaseYear: 2015,
        album: "Eleven Eleven",
      },
      {
        track: "Powder Blue",
        artist: "Elbow",
        releaseYear: 2001,
        album: "Asleep In The Back",
      },
      {
        track: "Shake it off",
        artist: "TayTay",
        releaseYear: 2015,
        album: "1989",
      },
    ];
    //ACT
    const output = createRef(input, "artist", "album");
    const expected = {
      "Dinosaur Pile-Up": "Eleven Eleven",
      Elbow: "Asleep In The Back",
      TayTay: "1989",
    };
    //ASSERT
    expect(output).toEqual(expected);
  });
  it("should not mutate original array", () => {
    //ARRANGE
    const input = [
      {
        track: "11:11",
        artist: "Dinosaur Pile-Up",
        releaseYear: 2015,
        album: "Eleven Eleven",
      },
      {
        track: "Powder Blue",
        artist: "Elbow",
        releaseYear: 2001,
        album: "Asleep In The Back",
      },
    ];
    const copyInput = [
      {
        track: "11:11",
        artist: "Dinosaur Pile-Up",
        releaseYear: 2015,
        album: "Eleven Eleven",
      },
      {
        track: "Powder Blue",
        artist: "Elbow",
        releaseYear: 2001,
        album: "Asleep In The Back",
      },
    ];
    //ACT
    createRef(input, "artist", "album");
    //ASSERT
    expect(input).toEqual(copyInput);
    //Break by pushing
  });
});
