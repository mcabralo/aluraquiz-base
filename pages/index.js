import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
// eslint-disable-next-line import/no-named-as-default
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        {/* Primary Meta Tags  */}
        <title>AluraQuiz - Modelo Base</title>
        <meta name="title" content="AluraQuiz - Modelo Base" />
        <meta name="description" content="Projeto em desenvolvimento com a tecnologia NextJS" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz-base-puce.vercel.app/" />
        <meta property="og:title" content="AluraQuiz - Modelo Base" />
        <meta property="og:description" content="Projeto em desenvolvimento com a tecnologia NextJS" />
        <meta property="og:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-base-puce.vercel.app/" />
        <meta property="twitter:title" content="AluraQuiz - Modelo Base" />
        <meta property="twitter:description" content="Projeto em desenvolvimento com a tecnologia NextJS" />
        <meta property="twitter:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg" />
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma Submissão');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz seu nome aí"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizzes da Galera</h1>
            <p>Lorem Ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mcabralo" />
    </QuizBackground>
  );
}
