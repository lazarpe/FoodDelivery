import { AppUser } from "../models/user";

export function register(appUser: AppUser) {
  return fetch("http://localhost:8080/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appUser),
  });
}

export function login(appUser: AppUser) {
  var urlencoded = new URLSearchParams();
  urlencoded.append("name", appUser.name);
  urlencoded.append("password", appUser.password);

  return fetch("http://localhost:8080/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", //"Content-Type": "application/json",
    },
    body: urlencoded,
  });
}

export function logout() {
  localStorage.removeItem("access_token");
}

export function isLoggedIn() {
  return localStorage.getItem("access_token") != null;
}
