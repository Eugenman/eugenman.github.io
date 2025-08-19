import { ReactNode } from 'react'
import Navbar from '@components/Layout/Navbar'
import Footer from '@components/Layout/Footer'
import PageContainer from '@components/ui/PageContainer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  )
}
