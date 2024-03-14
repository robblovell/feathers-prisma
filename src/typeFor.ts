export const typeFor = (object: any) => {
  if (object === null) {
    return 'Null';
  }
  if (object === undefined) {
    return 'Undefined';
  }
  return object.constructor.name;
};
