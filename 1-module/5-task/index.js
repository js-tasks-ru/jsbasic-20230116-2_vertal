function truncate(str, maxlength) {
  const postfixed = '…';
  return (str.length > maxlength) ?
    str.slice(0, maxlength - postfixed.length) + postfixed :
    str;
}
