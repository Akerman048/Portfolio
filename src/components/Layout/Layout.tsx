import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import s from '../Layout/Layout.module.css'



type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.content}>{children}</main>
      <Footer />
    </div>
  );
}