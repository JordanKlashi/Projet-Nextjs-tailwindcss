import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-gray-900 text-gray-50'>
        <p>Layout.tsx</p>
        
        <div className='p-4'>{children}</div>
        </body>
    </html>
  )
}
