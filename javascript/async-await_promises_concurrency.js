//Based on the Fireship video: https://www.youtube.com/watch?v=vn3tm0quoqE

//patterns

//obtain a and b concurrently using await Promise.all
async function doSomething(x){
  return x+1;
}
async function main(){
  const a = doSomething(1);
  const b = doSomething(2);
  const both = await Promise.all([a,b]);
  console.log(both);
};
main();

//or obtain array values concurrently using array .map to call an async function then await the individual values before acting on them
async function doSomething(x){
  return x+1;
}
const someArray = [1,2];
const anotherArray = someArray.map(async y => {
  const z = await doSomething(y);
  //now act on z
  console.log(z);
});
  

//antipatterns

//executes sequentially; do not use when b does not depend on a
const a = await doSomething(1);
const b = await doSomething(2);

//executes sequentially; do not use when b does not depend on a
const both = async() => {
  const a = doSomething(1);
  const b = doSomething(2);
  return Promise.all([a,b]);
}
