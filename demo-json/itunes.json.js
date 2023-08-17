// import { json } from "express";
import mountainSongs from "./mountain.json" assert {type:"json"}

// console.log(Object.keys(mountainSongs))
// console.log(mountainSongs["results"][0])

const firstSong = mountainSongs["results"][0]
console.log(Object.keys(firstSong))

console.log(mountainSongs.results[0].trackName)