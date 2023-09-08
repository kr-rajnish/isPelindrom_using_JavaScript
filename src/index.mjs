import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// Q.1) is Pelindrom

/*
function isPelindrom(str) {
  let reversed = "";
  for(let char of str){
    reversed = char + reversed;
  }
  // if(str === reversed){
  //   console.log("true");
  // }else
  // console.log("false");
  console.log(str === reversed);
}
isPelindrom("adda");
*/

//using methods:
/*
function isPelindrom(str){
  const arr = str.split("");
  arr.reverse();
  const newStr = arr.join("");

  // if(str === newStr){
  //   console.log("true");
  // }else
  // console.log("false");
  console.log(str === newStr);
}
isPelindrom("adda");
*/

//another way
// /*
function isPelindrom(str){
  const newStr = str.split("").reverse().join("");
  console.log(str === newStr);
}
isPelindrom("a1dd1a");
// */