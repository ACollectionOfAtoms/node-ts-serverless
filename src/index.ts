export async function lol(): Promise<number> {
  return await 2;
};

export default async function hello() {
  const l = await lol();
  return l;
};
