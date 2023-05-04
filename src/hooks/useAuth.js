function useAuth() {
  let authenticated = false;
  if (localStorage.getItem("jwt")) {
    authenticated = true;
  }

  return authenticated;
}

export default useAuth;
