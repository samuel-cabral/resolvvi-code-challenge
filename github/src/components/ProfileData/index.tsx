/* eslint-disable react/prop-types */
import React from 'react';

import { Divider } from '@material-ui/core';
import {
  Container,
  Flex,
  useFlexChildrenStyles,
  Avatar,
  Row,
  useRowChildrenStyles,
  iconCSS,
  PeopleIcon,
  Column,
  useColumnChildrenStyles,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
} from './styles';

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
}) => {
  const flexChildrenStyles = useFlexChildrenStyles();
  const rowChildrenStyles = useRowChildrenStyles();
  const columnChildrenStyles = useColumnChildrenStyles();
  const iconStyles = iconCSS();

  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />

        <div className={flexChildrenStyles.div}>
          <h1 className={flexChildrenStyles.h1}>{name}</h1>
          <h2 className={flexChildrenStyles.h2}>{username}</h2>
        </div>
      </Flex>

      <Row>
        <li className={rowChildrenStyles.li}>
          <PeopleIcon className={iconStyles.root} />
          <b>{followers}</b>
          <span className={rowChildrenStyles.span}>followers</span>
          <span>·</span>
        </li>
        <li className={rowChildrenStyles.li}>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>

      <Divider />

      <Column>
        {company && (
          <li className={columnChildrenStyles.li}>
            <CompanyIcon className={iconStyles.root} />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li className={columnChildrenStyles.li}>
            <LocationIcon className={iconStyles.root} />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li className={columnChildrenStyles.li}>
            <EmailIcon className={iconStyles.root} />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li className={columnChildrenStyles.li}>
            <BlogIcon className={iconStyles.root} />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
