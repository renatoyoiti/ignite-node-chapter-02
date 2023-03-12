import expres from "express";

const app = expres();

app.get("/", (request, response) => {
  return response.json({
    msg: "Hello World! JS is nuts!",
  });
});

app.listen(3333, () => console.log("Server is running!"));
