export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    //after fetching data dispatch the values

    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'tom',
        authorLastName: 'McDonald',
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: 'CREATE_PROJECT',
          project,
        });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
