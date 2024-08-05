import { v4 as uuidv4 } from 'uuid';
import BadRequestError from '../errors/bad-request.error';
import { ErrorMessage } from '../errors/error-consts';

interface User {
  id: string;
  name: string;
  age: number;
  isMarried: boolean;
}

let users: User[] = [
  { id: "1", name: 'Alice', age: 30, isMarried: true },
  { id: "2", name: 'Bob', age: 25, isMarried: false },
  { id: "3", name: 'Charlie', age: 35, isMarried: true },
];

const getAllUsers = async (query: any): Promise<User[]> => {
  let result = users;
  if (query.isMarried !== undefined) {
    result = result.filter(user => user.isMarried === (query.isMarried === 'true'));
  }
  if (query.age !== undefined) {
    result = result.filter(user => user.age == query.age);
  }
  return result;
};

const getUserById = async (id: string): Promise<User> => {
  const user = users.find(user => user.id === id);
  if (!user) throw new BadRequestError(ErrorMessage.userNotFound);
  return user;
};

const createUser = async (userData: Omit<User, 'id'>): Promise<User> => {
  const newUser: User = { id: uuidv4(), ...userData };
  users.push(newUser);
  return newUser;
};

const updateUser = async (id: string, userData: Partial<Omit<User, 'id'>>): Promise<User> => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) throw new BadRequestError(ErrorMessage.userNotFound);
  const updatedUser = { ...users[userIndex], ...userData };
  users[userIndex] = updatedUser;
  return updatedUser;
};

const deleteUser = async (id: string): Promise<void> => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) throw new BadRequestError(ErrorMessage.userNotFound);
  users.splice(userIndex, 1);
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser }