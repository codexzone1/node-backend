const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})



/* const Tasks = mongoose.model('tasks',{
    description:{
        type:String,
        trim:true,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})
 */
/* const task = new Tasks({
    description:"Some task",
    completed:true
})
 */

/* const me = new User({
    name: 'Shubham',
    email: 'shubhamkumar65553@gmail.com',
    password:' mkybgvj'
}) */

/* task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log('Error',error)
}) */

/* me.save().then(()=>{
     console.log(me)
}).catch((error)=>{
   console.log('Error',error)
}) */