import userRepository from "@repositories/userRepository";

async function signUp(email: string, password: string) {
  try {
    const result = await userRepository.createUser(email, password);
    return result;
  } catch (error) {
    throw error;
  }
}

async function signIn(email: string, password: string) {
  try {
    const userData = await userRepository.findByEmail(email);

    const result = {
      id: userData[0].dataValues.id,
      email: userData[0].dataValues.email,
    };

    if (userData[0].password === password) return result;
    else throw new Error("wrong value");
  } catch (error) {
    throw error;
  }
}

export default { signIn, signUp };
