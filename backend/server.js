const express = require("express");
const cors = require("cors");
require("dotenv").config();
const blogsRouter = require("./routes/blogs.routes");
const usersRouter = require("./routes/users.routes");
const { connectDB } = require("./db/connect");
const { default: mongoose } = require("mongoose");
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/blogs", blogsRouter);
app.use("/api/v1/user", usersRouter);

// db connect then app run

// async function start() {
//   try {
//     await connectDB()
//     .then((res)=>{
//       console.log("connected");
//     })
//     .catch((error)=>{
//       console.log(error);
//     })
//     app.listen(port, () => {
//       console.log(`App is running on port ${port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// start();
const MONGO_URI="mongodb+srv://adityasharma44159:Adityasharma12@cluster1.albhmzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

const connectmongodb=async()=>{
  await mongoose.connect(MONGO_URI)
  .then((res)=>{
    console.log("conncted ...")
  })
  .catch((error)=>{
    console.log(error);
  })

}


connectmongodb();
app.listen(port , ()=>{
  console.log("server is stated ...");
})
