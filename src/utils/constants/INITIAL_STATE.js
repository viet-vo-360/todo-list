import { v4 as uuidv4 } from 'uuid';

export const FORM_INITIAL_STATE = [
  {
    key: uuidv4(),
    title: 'Do Housecleaning',
    date: '2020-04-15',
    category: 'Work',
    completed: 'false',
    dataIndex: 0,
  },
  {
    key: uuidv4(),
    title: 'Organize party with Hurricane team',
    date: '2020-04-16',
    completed: 'false',
    dataIndex: 0,
  },
  {
    key: uuidv4(),
    title: 'Go study English at the Center',
    date: '2020-04-14',
    completed: 'false',
    dataIndex: 0,
  },
  {
    key: uuidv4(),
    title: 'Have an appointment with a doctor at the hospital',
    date: '2020-04-20',
    completed: 'false',
    dataIndex: 0,
  },
  {
    key: uuidv4(),
    title: 'Go to the supermarket',
    date: '2020-04-20',
    completed: 'false',
    dataIndex: 0,
  }
];
