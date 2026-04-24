import { ref } from 'vue';

export const useProjects = () => {
  const projects = ref([
    {
      id: 1,
      name: 'Project 1',
      description: 'Description for Project 1',
      category: 'Web Development',
      imageURL: 'https://picsum.photos/200/300?random=1',
      teamMembers: ['Alice', 'Bob', 'Charlie']
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description for Project 2',
      category: 'Web Development',
      imageURL: 'https://picsum.photos/200/300?random=2',
      teamMembers: ['David', 'Eve', 'Frank']
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'Description for Project 3',
      category: 'Design',
      imageURL: 'https://picsum.photos/200/300?random=3',
      teamMembers: ['Grace', 'Heidi', 'Ivan']
    },
  ]);



  return {
    projects,
  };
}