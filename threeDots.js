const ages = [12,20,23];
const ages2 = [11,23,63,26];
const ages3 = [22,24,23,21];
const allAges = [...ages,...ages2,5,...ages3];
console.log(allAges);