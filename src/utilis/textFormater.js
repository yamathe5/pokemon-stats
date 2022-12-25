function textFormater(text) {
  let str2 = text.charAt(0).toUpperCase() + text.slice(1);
  str2 = str2.replace(/-/g, " ");
  return str2;
}

export default textFormater;
