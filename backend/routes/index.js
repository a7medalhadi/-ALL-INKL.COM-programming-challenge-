module.exports = function setupRoutes(router) {
    router.use("/data", require("./data.routes"));
}