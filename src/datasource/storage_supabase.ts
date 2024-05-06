import type {
  GetFilesFn,
  GetFileFn,
  CreateFileFn,
  UpdateFileFn,
  DeleteFileFn,
} from './function_types';

const getFiles: GetFilesFn = async ({}) => {
  throw new Error('Not implemented');
};

const getFile: GetFileFn = async ({}) => {
  throw new Error('Not implemented');
};

const createFile: CreateFileFn = async ({}) => {
  throw new Error('Not implemented');
};

const updateFile: UpdateFileFn = async ({}) => {
  throw new Error('Not implemented');
};

const deleteFile: DeleteFileFn = async ({}) => {
  throw new Error('Not implemented');
};

export { getFiles, getFile, createFile, updateFile, deleteFile };
