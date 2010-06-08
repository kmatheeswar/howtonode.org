var fs = require('fs');

exports.handle = function handle(err, req, res, next) {
  // Serve any file relative to the process.
  // NOTE security was sacrificed in this example to make the code simple.
  fs.readFile(req.url.substr(1), function (err, data) {
    if (err) {
      next(err);
      return;
    }
    res.simpleBody(200, data, "application/javascript");
  });
};