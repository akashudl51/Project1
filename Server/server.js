
require("dotenv").config();
const express =require('express');

var bodyParser = require('body-parser')
 
const cors=require('cors');
const db =require("./db")
const app=express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.get("/api/v1/userdetails", async(req,res)=>{
   
         try{
     const result=await db.query("select * from  person")

    res.status(200).json({
        status:"success",
        data:{
            user:result.rows,
        },
    });
  }
  catch(err)
  {
    console.log(err);
  }
   
  });

  app.patch("/api/v1/userupdate/:srno", async(req,res)=>{
  
 
    try{
      const result = await db.query(
        "Update person Set empemail=$1,updated_at= CURRENT_TIMESTAMP where uid=$2",
        [req.body.email,req.params.srno]
      );

res.status(200).json({
   status:"success",
   data:{
       user:result.rows,
   },
});
}
catch(err)
{
console.log(err);
}

});



const port =process.env.PORT ||3001;
app.listen(port,()=>
{
    console.log(`Server is ready and listening to port ${port} `);
})
