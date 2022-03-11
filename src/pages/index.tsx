import React from 'react';
import TaskMain from './taskMain';

const Home = () => {
  return <TaskMain />;
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/taskMain',
      permanent: false,
    },
  };
}

export default Home;
