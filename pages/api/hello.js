// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getHello() {
  const response = { name: "Tam", skills: [
    {
      label: 'C Programming',
      color: 'secondary'
    },
    {
      label: 'C++ Programming',
      color: 'tarnary'
    },
    {
      label: 'Python Programming',
      color: 'primary'
    },
    
    {
      label: 'Flask',
      color: 'secondary'
    },
    {
      label: 'Django',
      color: 'tarnary'
    },
    {
      label: 'NodeJS',
      color: 'primary'
    },
    {
      label: 'HTML',
      color: 'primary'
    },
    {
      label: 'CSS',
      color: 'primary'
    },
    {
      label: 'JavaScript',
      color: 'primary'
    },
    {
      label: 'ExpressJS',
      color: 'secondary'
    },
    {
      label: 'Arduino C',
      color: 'secondary'
    },
    {
      label: 'PyFirmata',
      color: 'tarnary'
    },
    {
      label: 'MongoDB',
      color: 'secondary'
    },
    {
      label: 'MySQL',
      color: 'secondary'
    },
    {
      label: 'SQLite',
      color: 'secondary'
    },
    {
      label: 'Adobe Photoshop',
      color: 'primary'
    },
    {
      label: 'Adobe Illustrator',
      color: 'primary'
    },
    {
      label: 'Adobe Animate',
      color: 'secondary'
    },
    {
      label: 'Figma',
      color: 'primary'
    },
    {
      label: 'Blender',
      color: 'secondary'
    },
    {
      label: 'PHP',
      color: 'secondary'
    },
    {
      label: 'Material UI',
      color: 'primary'
    },
    {
      label: 'JQuery',
      color: 'primary'
    },
    {
      label: 'Filmora',
      color: 'secondary'
    },
    {
      label: 'ReactJS',
      color: 'primary'
    },
    {
      label: 'NextJS',
      color: 'primary'
    },
    {
      label: 'Wordpress',
      color: 'secondary'
    },
    {
      label: 'WIX',
      color: 'secondary'
    }
  ] };
  return response;
}

export default async function handler(req, res) {
  const jsonData = await getHello();
  res.status(200).json(jsonData);
}
