import React from 'react'
import Layout from '../components/Layout'

import First from '../components/First'
import styles from '../styles/contactsPage.module.scss'

const Contacts = () => {
  return (
    <Layout title={'Контакты'} desc={''}>
      <First>
        <div className={styles.contacts}>
          <h1>Контакты компании</h1>
        </div>
      </First>
    </Layout>
  )
}

export default Contacts
