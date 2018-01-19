window.logException = function(ex) {
  console.log(ex);
  debugger;
  const uuid = window.generateUuid();
  const exception = {
    message: ex.toString(),
    stack: ex.stack
  };
  window.logger({ exception }, uuid);
  console.error(`[faceblock] Caught exception ${uuid}. Please include this identifier if reporting a bug.`, exception);
};

window.logError = function(error) {
  const uuid = window.generateUuid();
  window.logger({ error }, uuid);
  console.error(`[faceblock] Caught error ${uuid}. Please include this identifier if reporting a bug.`, error);
};

window.logger = function(payload, uuid = window.generateUuid()) {
  window
    .postJSON('https://log.declaredintent.com/entries', {
      namespace: 'com.declaredintent.faceblock',
      useragent: navigator && navigator.userAgent,
      payload,
      uuid
    })
    .catch(() => {
      console.error('Got error trying to log error, giving up.');
    });
};

function errorHandler(err) {
  let error = {};

  if (err instanceof ErrorEvent) {
    error = {
      message: err.message
    };
  } else if (err.error) {
    error = {
      message: err.error.toString(),
      stack: err.error.stack
    };
  } else {
    error = {
      message: err.toString(),
      stack: err.stack
    };
  }

  try {
    window.logError(error);
  } catch (ex) {}
}

Vue.config.errorHandler = errorHandler;
window.addEventListener('error', errorHandler);