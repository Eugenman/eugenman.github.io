import Section from '@components/ui/Section'

export default function Home() {
  return (
    <>
      <h1 style={{ fontSize: 32, margin: '8px 0 16px' }}>Evgenii Kruglov</h1>
      <p>Senior Frontend Developer — React, TypeScript, performance, UX.</p>
      <Section title="Quick links">
        <ul>
          <li>Skills</li>
          <li>Projects</li>
          <li>Algorithms</li>
        </ul>
      </Section>
    </>
  )
}
