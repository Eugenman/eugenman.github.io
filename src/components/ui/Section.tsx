import { ReactNode } from 'react'

export default function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ margin: '32px 0' }}>
      <h2 style={{ margin: '0 0 12px', fontSize: 24 }}>{title}</h2>
      <div>{children}</div>
    </section>
  )
}
