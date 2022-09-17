import type { NextApiRequest, NextApiResponse } from 'next'
import { useEffect, useState } from 'react'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"')
  res.statusCode = 401
  res.end(`Auth Required.`)
}
