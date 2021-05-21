import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useTranslation } from 'next-i18next'

export default function About() {
  const { t } = useTranslation('common')
  return (
    <div className={styles.container}>
      <Head>
        <title>About us</title>
        <meta name="description" content="The about us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Hola mundo... 
        {t('development')}
      </main>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({




  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})