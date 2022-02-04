import React from 'react';
import { Outlet } from 'react-router';
import Content from '../../components/main/Content';
import Layout from '../../layout/Layout';

const Home = () => {
  return (
    <>
      <Layout >
        <Content />
      </Layout>
    </>
  )
};

export default Home;
