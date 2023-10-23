const TodoAPI = async (url = '', options = null, errMessage = null) => {
  try {
    console.log('calling api');
    const response = await fetch(url, options);
    if (!response.ok) throw Error('Error while calling todo API: ');
  } catch (error) {
    errMessage = error.message;
  } finally {
    return errMessage;
  }
};

export default TodoAPI;
