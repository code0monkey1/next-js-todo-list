// pages/api/:endpoint.ts
import { NextApiRequest, NextApiResponse } from 'next';

export  async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { endpoint } = req.query;
    console.log("endpoint",endpoint)
    const response = await fetch(`https://641fef8182bea25f6df72478.mockapi.io/api/v1/${endpoint}`);
    const data = await response.json();
    
    return new Response(JSON.stringify(data))
}