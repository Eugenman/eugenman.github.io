import { ReactNode } from 'react'

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>
      {children}
    </main>
  )
}
