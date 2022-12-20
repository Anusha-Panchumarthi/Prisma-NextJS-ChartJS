// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req: NextApiRequest, res: NextApiResponse) =>{
  const data = req.body;
  try{
    const result = await prisma.instructor.groupBy({
        by: ['dept_name'],
        where:{
            OR:[
                { dept_name: 'Finance' },
                { dept_name: 'Physics' }
            ]
        },
        _sum:{
            salary: true
        }
  });
  //console.log(result)
    res.status(200).json(result);
  }
  catch(err){
    console.error(err);
    res.status(403).json({err: "Error occurred!"});
  }
};
