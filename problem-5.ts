const getProperty = <X, Y extends keyof X>(obj: X, property: Y): X[Y] => {
  return obj[property];
};
