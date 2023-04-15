/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  let arry = [
    { id: 5, name: "jordon", age: "21", profession: "backend-developer" },
    { id: 6, name: "ram", age: "22", profession: "frontend-developer" },
    { id: 7, name: "salim", age: "30", profession: "system-admin" },
  ];
  
  function PrintDeveloperbyMap() {
  
  let mappedValue = arr.filter(obj => obj.profession === "developer").map(obj => {
    
    return  obj.name ;
  })
  
   console.log(mappedValue);
  }
  
  function PrintDeveloperbyForEach() {
    let newArr= []
    arr.forEach(obj => {
      if (obj.profession === "developer") {
        newArr.push(obj.name)
      }
    });
    console.log(newArr)
  }
  
  function addData() {
    let obj = {id:4,name:"susan",age:"20",profession:"intern"}
    let addedobj = arr.push(obj);
    console.log(arr)
  }
  
  function removeAdmin() {
  const removed = arr.splice( arr.findIndex(a => a.profession === "admin"), 1)
  console.log(arr)
  }
  
  function concatenateArray() {
    let concated = [...arr,...arry];
    console.log(concated)
  }
  
