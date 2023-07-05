// pages/api/:endpoint.ts
import { NextApiRequest, NextApiResponse } from 'next';

export  async function GET(req: NextApiRequest, res: NextApiResponse) {

    
    return new Response("hello")
}