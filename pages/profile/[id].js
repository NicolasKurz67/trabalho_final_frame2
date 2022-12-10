import React from 'react';
import axios from "axios";
import styles from "../../styles/Produto.module.css"

import Head from 'next/head';
import Topo from '../../components/Topo';
import Base from '../../components/Base';

function Profile({product={}}){
    return (
        <>

            <Head>
                <title>Prova de Frameworks 2 - Nícolas Kurz Chimenes Silva</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Topo/>            
                    <div class={styles.container_produto}>
                        <div class={styles.grid_cards}>
                            <div class={styles.card_produto}>
                                <h1>{product.title}</h1>

                                <img src={product.image}></img>

                                <div class={styles.info}>
                                    <div class={styles.itens}>
                                        <span><b>Descrição:</b><p>{product.description}</p></span>
                                    </div>                                    
                                    <div class={styles.itens}>
                                        <span><b>Preço:</b><p>{product.price} $</p></span>
                                    </div>
                                    <div class={styles.itens}>
                                        <span><b>Rating:</b><p>{product.rating.rate}</p></span>
                                    </div>
                                    <div class={styles.itens}>
                                        <span><b>Nº de Produtos Vendidos:</b><p>{product.rating.count}</p></span>
                                    </div>
                                </div>
                                <a href='\products'>Voltar para o Catálogo</a>
                            </div>
                        </div>
                    </div>
                <Base/>
            </div>
        </>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id,
    );

    const product = await response.data;
    return {
        props: {product}
    }
}

export async function getStaticPaths(){
    const response = await axios.get(
        'https://fakestoreapi.com/products/'
    );

    const products = await response.data;
    const paths = products.map((product) => {
        return {params: {id: String(product.id)}};
    });

    return {
        paths,
        fallback:true,
    };
}

export default Profile;
