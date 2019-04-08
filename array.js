



var videos=[{id:3,name:"islamic",uid:12},{id:2,name:"music",uid:11},{id:1,name:"documentary",uid:10}];

var reported=[{uid:10,vid:3},{uid:10,vid:1},{uid:12,vid:1}];

var users=[{id:1,name:"aman"},{id:2,name:"farooq"},{id:3,name:"usama"}];



"use strict"

console.log(videos);

console.log("------------------");

console.log(reported);


console.log("------------------");

console.log(users);

console.log("------------------");




//extract array if ids from video
console.log("maping an array from members");
var res;

res=videos.map(function (params) {
    return params.id;
});
console.log(res);



//extratct reported video by each users

var merged=merge(videos,users);

console.log(merged);

//extract all videos which are not reported by users

// join all data