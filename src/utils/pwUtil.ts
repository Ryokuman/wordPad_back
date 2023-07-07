import { genSalt, hash } from "bcrypt";

type makePwResult = { pw: string; salt: string } | undefined;

async function makePw(input: string): Promise<makePwResult> {
  let result: makePwResult = undefined;

  await genSalt(10)
    .then(
      async (salt) =>
        await hash(input, salt).then((pw) => {
          result = { pw: pw, salt: salt };
        })
    )
    .catch((err) => console.error(err.message));

  return result;
}

async function checkPw(input: string, pw: string, salt: string): Promise<boolean> {
  let result = false;
  await hash(input, salt).then((e) => (result = pw === e));

  return result;
}

export { makePw, checkPw };
