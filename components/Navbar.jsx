import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const [dropdown, setDropdown] = React.useState(0)

  const menu = [
    {
      text: 'dropdown',
      links: [
        {
          text: 'Ссылка 1',
          link: '/link1',
        },
        {
          text: 'Ссылка 2',
          link: '/link2',
        },
        {
          text: 'Ссылка 3',
          link: '/link3',
        },
      ],
    },
    {
      link: 'contacts',
      text: 'Контакты',
    },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/`}>
          <img src='../logo.png' alt='Logo' />
        </Link>
        <div className={`${styles.menu} ${open && styles.open}`}>
          {menu.map((item) =>
            item.link ? (
              <Link key={item.text} href={item.link}>
                {item.text}
              </Link>
            ) : (
              <div
                className={styles.dropdown}
                onMouseEnter={() => setDropdown(item.text)}
                onMouseLeave={() => setDropdown(0)}
                key={item.text}
              >
                <div>{item.text}</div>
                <div className={`${styles.fade} ${dropdown === item.text && styles.open}`}>
                  {item.links.map((link) => (
                    <Link href={link.link} key={link.text}>
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
        <div className={`${styles.toggler} ${open && styles.open}`} onClick={() => setOpen(!open)}>
          <span />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
