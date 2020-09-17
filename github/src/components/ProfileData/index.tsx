import React from 'react';

import { Container, Box, Avatar } from '@material-ui/core';

import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<Props> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => (
  <Container>
    <Box display="flex">
      <Avatar src={avatarUrl} alt={username} />

      <div>
        <h1>{name}</h1>
        <h2>{username}</h2>
      </div>
    </Box>

    <Box>
      <li>
        <PeopleAltOutlinedIcon />
        <b>{followers}</b>
        <span>followers</span>
        <span>·</span>
      </li>
      <li>
        <b>{following}</b>
        <span>following</span>
      </li>
    </Box>

    <Box>
      {company && (
        <li>
          <BusinessOutlinedIcon />
          <span>{company}</span>
        </li>
      )}
      {location && (
        <li>
          <LocationOnOutlinedIcon />
          <span>{location}</span>
        </li>
      )}
      {email && (
        <li>
          <EmailOutlinedIcon />
          <span>{email}</span>
        </li>
      )}
      {blog && (
        <li>
          <BookOutlinedIcon />
          <span>{blog}</span>
        </li>
      )}
    </Box>
  </Container>
);

export default ProfileData;
