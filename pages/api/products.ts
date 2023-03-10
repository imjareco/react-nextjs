// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { products } from '@/config/mocks'
import { IProduct } from '@/products/models'
import type { NextApiRequest, NextApiResponse } from 'next'


const getProducts = (
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) => {
  const { query: { search = "" } } = req;

  const results = products.filter(({ name }) => name.toLowerCase().includes(search.toString()))

  res.status(200).json(results)
}

export default getProducts;
