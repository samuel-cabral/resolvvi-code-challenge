/* eslint-disable react/prop-types */
import React from 'react';

import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import { Avatar } from '@material-ui/core';

import MyContainer, {
  Flex,
  useFlexStyles,
  useAvatarStyles,
  Row,
  useRowStyles,
  useColumnStyles,
  Column,
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

const SimpleCard: React.FC<Props> = ({
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
  const flexClasses = useFlexStyles();
  const avatarClasses = useAvatarStyles();
  const rowClasses = useRowStyles();
  const columnClasses = useColumnStyles();
  const bull = <span className={rowClasses.bullet}>•</span>;

  return (
    <MyContainer>
      <Flex className={flexClasses.root}>
        <Avatar
          className={avatarClasses.root}
          src="https://avatars1.githubusercontent.com/u/23100510"
          alt={username}
        />

        <div>
          <h1 className={flexClasses.h1}>Samuel Cabral</h1>
          <h2 className={flexClasses.h2}>samuel-cabral</h2>
        </div>
      </Flex>

      <Row className={rowClasses.root}>
        <li className={rowClasses.li}>
          <GroupOutlinedIcon />
          <b className={rowClasses.b}>{234}</b>
          <span>followers</span>
          {bull}
        </li>
        <li className={rowClasses.li}>
          <b className={rowClasses.b}>{34}</b>
          <span>following</span>
        </li>
      </Row>

      <Column className={columnClasses.root}>
        {company && (
          <li className={columnClasses.li}>
            <BusinessOutlinedIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li className={columnClasses.li}>
            <LocationOnOutlinedIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li className={columnClasses.li}>
            <EmailOutlinedIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li className={columnClasses.li}>
            <LinkOutlinedIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </MyContainer>
  );
};

export default SimpleCard;
