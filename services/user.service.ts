import * as userRepository from '../repositories/user.repository';

const getAllUsers = async (query: any) => {
  return await userRepository.getAllUsers(query);
};

const getUserById = async (id: string) => {
  return await userRepository.getUserById(id);
};

const createUser = async (userData: any) => {
  return await userRepository.createUser(userData);
};

const updateUser = async (id: string, userData: any) => {
  return await userRepository.updateUser(id, userData);
};

const deleteUser = async (id: string) => {
  return await userRepository.deleteUser(id);
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser }