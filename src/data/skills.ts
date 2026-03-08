export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React PDF'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Formik', 'Yup', 'Axios', 'Redux Toolkit'],
  },
  {
    title: 'Backend & Tools',
    items: ['Go', 'REST API', 'PostgreSQL', 'Git', 'Figma handoff'],
  },
]

export const allSkills = skillGroups.flatMap((group) => group.items)
