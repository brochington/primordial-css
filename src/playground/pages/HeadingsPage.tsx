import React, { FC } from 'react';

type Props = {};

const HeadingsPage: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div>
      <h1>Headings</h1>
      <div>
        <h1>H1 - Never Make fun of a Dog Holding Scissors</h1>
        <h2>H2 - Never Make fun of a Dog Holding Scissors</h2>
        <h3>H3 - Never Make fun of a Dog Holding Scissors</h3>
        <h4>H4 - Never Make fun of a Dog Holding Scissors</h4>
        <h5>H5 - Never Make fun of a Dog Holding Scissors</h5>
        <h6>H6 - Never Make fun of a Dog Holding Scissors</h6>
      </div>
    </div>
  );
};

export default HeadingsPage;
