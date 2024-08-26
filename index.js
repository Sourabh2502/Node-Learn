const express =require("express");
const users =require('./Mock_Data.json')
const app = express();
const PORT= 8000;
const fs =require("fs");


app.use(express.urlencoded({extended:false}));

app.get('/users',(req, res)=>{
    const html = `
     <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>`;

    res.send(html);
});

app.get('/api/users',(req, res)=>{
    return res.json(users);
});

app.route('/api/users/:id')
.get((req, res)=>{
    const id =Number(req.params.id);
    const user =users.find((user)=>user.id===id);
    return res.json(user);
})
.patch((req,res)=>{
   return  res.json({status:"pending"});
})
.delete((req,res)=>{
    return res.json({status:"pending"});
})

app.post('/api/users',(req,res)=>{
    const body=req.body;
    users.push({...body, id: users.length+1});
    fs.writeFile('./Mock_Data.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"success", id:users.length});
    });
       
});

// app.patch('/api/users/:id',(req,res)=>{
//     return res.json({status:"pending"});
// });
// app.delete('/api/users/:id',(req,res)=>{
//     return res.json({status:"pending"});
// });



app.listen(PORT,()=> console.log(`server started at ${PORT}`));