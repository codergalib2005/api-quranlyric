function generate(data) {
  const da = Object.keys(data).join(" ");

  return da;
}

console.log(
  generate({
    name: "Asadullah Hil Galib",
    email: "coderboygalif@gmail.com",
  })
);
