import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  const { projects, auth } = props;
  if (auth.uid) {
    if (projects) {
      return (
        <div className='container section project-details'>
          <div className='card z-depth-0'>
            <div className='card-content'>
              <span className='card-title'>{projects.title}</span>
              <p>{projects.content}</p>
            </div>
            <div className='card-action grey lighten-4 grey-text'>
              <div>
                Posted by {projects.authorFirstName} {projects.authorLastName}
              </div>
              <div>2nd September, 2am</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container center'>
          <p>Loading Project...</p>
        </div>
      );
    }
  } else {
    return <Redirect to='/signin' />;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    projects: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);

// export default ProjectDetails;
