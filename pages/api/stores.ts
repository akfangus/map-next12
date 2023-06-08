// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<StoreProject.Store[]>) {
    const stores = (await import('../../public/stores.json')).default as StoreProject.Store[];
    res.status(200).json(stores);
}
