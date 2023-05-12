//Write an asynchronous function that accepts a message string and
// a delay time in milliseconds.
// The function should log the message to the console after the 
//specified delay time.  

async function  greeting (message,delay){
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  };
  
  greeting("Hello",4000);

//You have an array of user IDs and a function getUserData(id)
// that returns a Promise with user data when given a user ID.
// Write an asynchronous function that fetches and logs the data for 
//each user ID one by one, in sequence.
const userIds=[2,3,4,5,6]

async function Data(index=0){
    if(index>=userIds.length){
        return;
    }


const userId=userIds[index];
try{
    const data =await getUserData(userId);
    console.log(data)
}
catch(error){
    console.error("Error in fetching user data")
}
await Data(index+1);
}

function getUserData(id) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        
        const userData = { id, name: `User ${id}`, age: 25 };
        resolve(userData);
      }, 1000); 
    });
  }
  
  
  Data();

//   You have an asynchronous function performTask() that returns a Promise. 
//The Promise resolves if the task is successful and rejects if there's an error. 
//Write a function that calls performTask() and logs a custom success message if the 
//task is successful, and a custom error message if there's an error.
let success=true
async function performTask(){ 
let promise=new Promise(function(resolve,reject){
    if(success){
        
        resolve("Task is successful")
    }
    else(
        
       reject("An error occured")
   )
    

 }).then(()=>{console.log("Continue with task ");})
.catch(()=>{console.log("I need  more tasks");})
.finally(()=>{console.log("You are going to make it");})
  
console.log(promise);
}
performTask();