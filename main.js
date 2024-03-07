
let arr = [[[{ name: "Davlatshoh" }]], [], [{ age: 24 }]];

let array = [
  [[[{ a: [{ b: { name: "Davlatshoh" } }] }]], [[{ r: [{ age: "24" }] }]]],
  [[{ t: "yoshim" }]],
  [{ k: "da." }],
  [[[{ g: [[{ h: "Salom mening ismim" }]] }]]],
];

console.log(array[3][0][0][0].g[0][0].h,arr[0][0][0].name,array[1][0][0].t,  array[0][1][0][0].r[0].age,array[2][0].k);


