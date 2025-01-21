/*
Simplify path
("/home/");                   // output : /home
("/x/./y/xx/xx/z/");         //  output : /z
("/../")                     // output : /
("/home//test/");          // output: /home/test

*/


const simplifyPath = (sPath) =>{

let pila = [];

const parts = sPath.split('/');

for(const part of parts){
 
  if (part === ".."){
    pila.pop();
  }
  
  else if (part !== '.' && part !==''){
    pila.push(part);
  }

}

return `/${pila.join('/')}`;

}

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/x/./y/xx/xx/z/")); 
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//test/"));    