export function navbar(location) {
  return true; // The navbar is always active
}

export function employees(location) {
  return location.pathname === "/employees";
}

export function employeeDetails(location) {
  const regex = /^\/employees\/\d+?$/;
  return location.pathname.match(regex);
}