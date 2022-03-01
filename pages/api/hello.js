// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getHello() {
  const response = { name: "Tam" };
  return response;
}

export default async function handler(req, res) {
  const jsonData = await getHello();
  res.status(200).json(jsonData);
}
