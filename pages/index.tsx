import { GetStaticProps } from 'next';
import React from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

// eslint-disable-next-line
function Home({ menu }: HomeProps): JSX.Element {
  return (
    <>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quisquam maxime cupiditate
      aliquid provident maiores atque, sit nostrum amet, dolorem distinctio magni, officiis ipsum
      iure sint modi eum quia dolore.
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
