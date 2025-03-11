const express = require("express");
const app = express();

app.disable("last-modified");
app.get("/", (req, res) => {
  const etag = req.get("If-None-Match");
  if (etag === "123456") {
    res.status(304);
    res.end();
    return;
  }
  res.setHeader("Etag", "123456");
  res.end("Hello World!");
});

app.get("/b", (req, res) => {
  const rawCookie = req.get("Cookie"); // 获取原始Cookie头
  console.log(rawCookie, "raw cookie");
  res.cookie("token", "123456", {
    path: "/b",
    httpOnly: true,
  });
  res.end("Hello World!");
});

app.get("/c", (req, res) => {
  // console.log(req.get("cookie"));
  res.cookie("token", "123", { maxAge: 5 * 1000, path: "/c", secure: true });
  res.end("Hello World!");
});

app.listen(3000);
