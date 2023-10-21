const getComposedRegex = (...regexes) =>
  new RegExp(regexes.map((regex) => regex.source).join("|"));
const AppConstants = {
 
};
export default AppConstants;
