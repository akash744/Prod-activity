const cards = [
    {
      id: 'card-1',
      title: 'Learning how to cook',
    },
    {
      id: 'card-2',
      title: 'Making sandwich',
    },
    {
      id: 'card-3',
      title: 'Taking the trash out',
    },
  ];
  
  const data : { [key: string]: any } = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'To-Do',
        cards,
      },
    },
    listIds: ['list-1'],
  };
  
  export default data;