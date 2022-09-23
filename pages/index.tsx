import React from 'react';
import { Button, Htag, Ptag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Htag tag="h2">Текст</Htag>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка2
      </Button>
      <Ptag size="small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cum impedit officia
        et? Sed praesentium nihil illo. Suscipit quo asperiores velit repudiandae vero fugit,
        laudantium ipsam voluptatum nesciunt inventore cupiditate!
      </Ptag>
      <Ptag size="medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae sint at dolorem
        similique, pariatur, molestiae nesciunt, quia veniam itaque laborum aspernatur libero.
        Magni, omnis dolore rem totam provident commodi.
      </Ptag>
      <Ptag size="large">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laudantium, laboriosam
        quod odio expedita nemo quibusdam repellat, id qui architecto esse ad nihil accusamus eius,
        est iusto omnis cupiditate at.
      </Ptag>
    </>
  );
}
