import User from "./users.model";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log({ name, email, password });
  } catch (err) {
    console.log(err);
  }
};
export const login = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
export const googleLogin = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
