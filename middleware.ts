import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/index'],
}

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

<<<<<<< HEAD
    //if (user === '4dmin' && pwd === 'testpwd123') {
=======
   // if (user === '4dmin' && pwd === 'testpwd123') {
>>>>>>> db1f30bdbe6bd54247c83de1846c47f57a734a98
    if (user === 'admin' || pwd === 'admin') {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
