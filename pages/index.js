import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topo from '../components/Topo'
import Base from '../components/Base'

export default function Home() {
  return (
    <>
      <Head>
        <title>CDPI</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topo/>
      
      <div className={styles.container_content}>
        <div class={styles.container_root}>
          <h1>Seja bem vindo ao nosso catálogo de produtos importados</h1>
          <p>Nós somos uma empresa com o foco de venda e comercialização de produtos importados com os melhores preços criada em Dourados. O nosso principal objetivo é entregar em qualquer lugar do Brasil, com o menor preço e taxa possível, nossos produtos facilitando assim a sua vida. Quer aquele console que não chegou no Brasil ainda? Relaxa que nós conseguimos para você por um preço camarada e entregamos na porta da sua casa. "Mas eu moro em um lugar de difícil acesso". Não se preocupe, a nossa empresa acha você. 
          Então venha e confira os melhores preços e produtos do nosso site.</p>
          <br/>
          <a href='\products'>Abrir Catálogo</a>
        </div>
      </div>

      <Base/>
    </>
  )
}