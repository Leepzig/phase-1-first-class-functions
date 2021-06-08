
const receivesAFunction = (callback) => {
  return callback()
}

const returnsANamedFunction = () => {
  return function name() {}
}

const returnsAnAnonymousFunction = () => {
  return function() {}
}