module.exports.controllerHandler =
  (controller, mapRequestToParams) => async (req, res, next) => {
    const params = mapRequestToParams ? mapRequestToParams(req, res, next) : [];
    try {
      const result = await Promise.resolve(controller(...params));
      if (!res.headersSent) {
        if (result != null) {
          return res.json(result);
        }
        return res.sendStatus(204);
      }
    } catch (error) {
      return next(error);
    }
    return null;
  };

module.exports.jsonReplacer = (key, value) => {
  if (this[key] instanceof Date) {
    return this[key].toISOString();
  }
  return value;
};
