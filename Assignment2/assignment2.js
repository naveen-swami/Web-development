// it works when you have integer array
// Array.__proto__.includesOneof = (arr) => {
//     return this.some(item => arr.include(item));
// }



// here arrow function does not work
// here __proto__ does not work
Array.prototype.includesOneof = function(arr) {

    console.log(this);
    console.log(arr);
           if(arr.length === 0){
               return false;
           }
    
        //    if(typeof obje[0] === Object)  => wrong way
        // we have to always insert into double colon 
           if(typeof arr[0] !== "object"){
              return arr.some(item => this.includes(item));
           } else { // for object and array we need to check there inside value
             for(let obj1 of arr)  {
                 if(this.some(obj2 => shallowCheck(obj1, obj2))){
                     return true;
                 }
             }   
           }
           return false;
        }
    
        function shallowCheck(obj1, obj2) {
    
            const key1 = Object.keys(obj1); // get keys of object 1
            const key2 = Object.keys(obj2); // get keys of object 2
          
            if(key1.length !== key2.length) {
                return false;
            }
    
            for(let key of key1) {
                if(obj1[key] !== obj2[key]){
                    return false;
                }
            }
            return true;
        }



let arr3 =[1, 2, 3, 4, 5, 6];
console.log(Array.isArray(arr3));
console.log(arr3. includesOneof([2, 8, 10])) //==>true
console.log(arr3. includesOneof([10, 11, 12])); //=>false
console.log(arr3. includesOneof([])); //=> Always false

const arr2 = [{name:"James Bond",code:"OO7"},{name:"Edward Donne",code:"OO1"}];
console.log(Array.isArray(arr2));
console.log(arr2.includesOneof([{name:"James Bond",code:'OO7'}]));
console.log(arr2.includesOneof([{name:"James Bond",code:'OO7',organization: 'MI6'}])); //false