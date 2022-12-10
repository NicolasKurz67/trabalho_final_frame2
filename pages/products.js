import React from 'react';
import axios from 'axios';
import styles from "../styles/Produtos.module.css"

import Link from 'next/link';
import Head from 'next/head';


import Topo from '../components/Topo'
import Base from '../components/Base'

function Produtos({produtos}){
    return (
        <>
        <Head>
            <title>CDPI</title>
            <meta name="description" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

            <div>
                <Topo/>
                <div class={styles.container_produtos}>
                    <h1>Catálogo de Produtos</h1>
                    {produtos.map((produto) => (
                        <>
                            <div class={styles.grid_cards}>
                                <Link href='/profile/[id]' as={`/profile/${produto.id}`}>
                                    <div class={styles.card_produtos}>
                                        <h2>{produto.title}</h2>
                                        <span>{produto.description}</span>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ))}
                </div>
                <Base/>
            </div>
        </>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;
    return {
        props: {produtos:data}
    }
}

export default Produtos;