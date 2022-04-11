// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getHello() {
  const response = { name: "Tam", skills: [
    {
      label: 'C Programming',
      color: 'primary'
    },
    {
      label: 'C++ Basic',
      color: 'tarnary'
    },
    {
      label: 'Python',
      color: 'secondary'
    },
    
    {
      label: 'Flask',
      color: 'primary'
    },
    {
      label: 'Django',
      color: 'tarnary'
    },
    {
      label: 'NodeJS',
      color: 'secondary'
    },
    {
      label: 'HTML',
      color: 'secondary'
    },
    {
      label: 'CSS',
      color: 'secondary'
    },
    {
      label: 'JavaScript',
      color: 'secondary'
    },
    {
      label: 'ExpressJS',
      color: 'primary'
    },
    {
      label: 'Arduino C',
      color: 'primary'
    },
    {
      label: 'PyFirmata',
      color: 'tarnary'
    },
    {
      label: 'MongoDB',
      color: 'primary'
    },
    {
      label: 'MySQL',
      color: 'primary'
    },
    {
      label: 'SQLite',
      color: 'primary'
    },
    {
      label: 'Adobe Photoshop',
      color: 'secondary'
    },
    {
      label: 'Adobe Illustrator',
      color: 'secondary'
    },
    {
      label: 'Adobe Animate',
      color: 'primary'
    },
    {
      label: 'Figma',
      color: 'secondary'
    },
    {
      label: 'Blender',
      color: 'primary'
    },
    {
      label: 'PHP',
      color: 'secondary'
    },
    {
      label: 'Material UI',
      color: 'secondary'
    },
    {
      label: 'JQuery',
      color: 'secondary'
    },
    {
      label: 'Filmora',
      color: 'primary'
    }
    
  ] };
  return response;
}

export default async function handler(req, res) {
  const jsonData = await getHello();
  res.status(200).json(jsonData);
}
