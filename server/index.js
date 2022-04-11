// const express = require("express");
// const next = require("next");

// const PORT = 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// (async () => {
//   try {
//     await app.prepare();
//     const server = express();
//     const showRoutes = require("./routes");
//     server.use("/contact", showRoutes);

//     // server.post("/contact", (_req, res) => {
//     //   return res.end("laallalal");
//     // });

//     server.all("*", (req, res) => {
//       return handle(req, res);
//     });

//     server.listen(PORT, (err) => {
//       if (err) throw err;
//       console.log("listening to server");
//     });
//   } catch (e) {
//     console.log(e);
//     process.exit(1);
//   }
// })();
