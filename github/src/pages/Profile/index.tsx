import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';

import ProfileData from '../../components/ProfileData';

function Profile() {
  return (
    <>
      <CssBaseline />
      <Container>
        <ProfileData
          username="samuel-cabral"
          name="Samuel Cabral"
          avatarUrl="https://avatars1.githubusercontent.com/u/23100510"
          followers={887}
          following={7}
          company={undefined}
          location="Brazil"
          email="samuelcabral.mail@gmail.com"
          blog={undefined}
        />
      </Container>
    </>
  );
}
export default Profile;
