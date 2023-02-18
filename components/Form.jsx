import React from 'react'
import styles from './Form.module.scss'
import InputMask from 'react-input-mask'

const Form = () => {
  const [btnVal, setBtnVal] = React.useState('Отправить')
  const sendForm = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const checks = {
      name: document.getElementById('name'),
      contact: document.getElementById('contact'),
      message: document.getElementById('message'),
    }
    const submit = document.getElementById('submit')
    const data = new FormData()
    for (let k in checks) data.append(k, checks[k].value)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/post.php', true)
    xhr.onloadstart = () => setBtnVal('Отправка...')
    xhr.onloadend = () => {
      let res = JSON.parse(this.response)
      if (res) {
        setBtnVal('Отправлено')
        submit.className = styles.ok
      } else {
        setBtnVal('Заполните все поля')
        submit.className = styles.error
      }
      setTimeout(() => {
        setBtnVal('Отправить')
        submit.className = null
      }, 2000)
    }
    xhr.send(data)
    return false
  }

  return (
    <form action='' method='POST' onSubmit={(e) => sendForm(e)} className={styles.form}>
      <input type='text' id='name' name='name' placeholder='Ваше имя*' />
      <InputMask type='tel' name='phone' defaultValue='7' mask='+9 (999) 999-99-99' maskChar='' />
      <input type='text' id='contact' name='contact' placeholder='Как с вами связаться*' />
      <textarea id='message' name='message' placeholder='Ваше сообщение*' />
      <button type='submit' id='submit'>
        {btnVal}
      </button>
    </form>
  )
}

export default Form
