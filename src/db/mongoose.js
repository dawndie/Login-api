const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('user', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model('Task',{
    description : {
        type: String
    },
    completed: {
        type: Boolean
    }
})


const task = new Task({
  description: 'work from home',
  completed: false  
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=> {
    console.log(error)
})