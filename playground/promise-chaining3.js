//Goal:Use async await
//1.Create deleteTaskAndCount as an async function
//-Account id of task to remove 
//2.Use await to delete task and count up incomplete tasks
//3.Return the count 
//4.call the function and attach then/catch to log results
//5.Test your work'
require('../src/db/mongoose');
const Task =require('../src/models/task');

const deleteTaskAndCount=async(id) => {
    const task =await Task.findByIdAndDelete('5db993813e2d7b573ec7edfd');
    const count =await Task.countDocuments({completed: false});
    return count;
};
deleteTaskAndCount('5db993813e2d7b573ec7edfd').then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
});
// const deleteTaskAndCount=async(id)=>{
//     const user= await Task.findByIdAndDelete(id);
//     return count;
// };
// deleteTaskAndCount('5db993813e2d7b573ec7edfd').then((count)=>{
//     console.log(count);
// });


