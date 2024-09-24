import express from "express";

const app = express();
app.use(express.json());

const tasks = [
  {id: 1, description: "Follow the lecture", completed: true},
  {id: 2, description: "Read the exercise", completed: false},
  {id: 3, description: "Create the server", completed: true},
]
app.get("/api/tasks", (req, res)=> {
  res.send(tasks)

    console.log('hello')
   /* res.json([
        {hello: "world"}
    ])*/
})
app.use(express.static("../client/dist"));
app.listen(5000);
