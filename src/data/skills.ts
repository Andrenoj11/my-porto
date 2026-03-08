export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Formik', 'Yup', 'Axios', 'WatermelonDB'],
  },
  {
    title: 'Backend & Tools',
    items: ['Go', 'REST API', 'PostgreSQL', 'Git', 'Figma handoff'],
  },
]

export const allSkills = skillGroups.flatMap((group) => group.items)
