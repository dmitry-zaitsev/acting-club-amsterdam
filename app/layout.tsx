import './globals.css'
import { actor } from '../src/style/fonts'

export const metadata = {
  title: 'Acting Club Amsterdam',
  description: 'Acting Club Amsterdam is an expat theater group in Amsterdam.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={actor.className}>{children}</body>
    </html>
  )
}
