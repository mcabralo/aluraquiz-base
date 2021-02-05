/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  // {/* <pre>
  //   {JSON.stringify(props, null, 4)}
  // </pre> */}
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respsotaConvertidaEmObjeto) => respsotaConvertidaEmObjeto);
      // .catch((err) => {
      //   console.error(err);
      // });

    // console.log('dbExterno', dbExterno);
    // console.log('Infos que o Next dá', context.query.id);

    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error();
    // redirect
  }
}
