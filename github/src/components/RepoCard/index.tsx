/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, makeStyles } from '@material-ui/core';
import { Topside, RepoIcon, Botside, StarIcon, ForkIcon } from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 16,
      borderRadius: 6,
      minWidth: 275,
    },
  });
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Topside>
          <header>
            <RepoIcon />
            <Link to={`/${username}/${reponame}`}>{reponame}</Link>
          </header>

          <p>{description}</p>
        </Topside>

        <Botside>
          <ul>
            <li>
              <div className={`language ${languageClass}`} />
              <span>{language}</span>
            </li>
            <li>
              <StarIcon />
              <span>{stars}</span>
            </li>
            <li>
              <ForkIcon />
              <span>{forks}</span>
            </li>
          </ul>
        </Botside>
      </CardContent>
    </Card>
  );
};

export default RepoCard;
