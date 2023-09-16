export const validate = (email, password) => {
  const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!emailValid) return "Email not valid";
  if (!passValid) return "Password Not Valid";

  return null;
};
