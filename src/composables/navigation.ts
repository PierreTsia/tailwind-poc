export const RoutesParams: [string, string][] = [
  ["Home", "/"],
  ["Dashboard", "/dashboard"],
  ["Teams", "/teams"],
  ["Projects", "/projects"],
  ["Calendar", "/calendar"],
  ["Reports", "/reports"],
  ["Sandbox", "/sandbox"]
];
//const userMenuItems = ["Your profile", "Settings", "Logout"];
export const useNavigation = () => {
  const createItem = ([label, path]: [string, string]) => ({ label, path });
  const mainMenuItems = RoutesParams.map(createItem);
  return { mainMenuItems };
};
