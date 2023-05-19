import { PropsWithChildren} from 'react'

export default function RootLayout({ children }: PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
