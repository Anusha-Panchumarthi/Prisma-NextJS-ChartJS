import { PrismaClient } from '@prisma/client'

const prisma =  new PrismaClient()

async function insert() {
    const newInstructor = await prisma.instructor.create({
        data:{
            id: '12101',
            name: 'Ramanujan',
            dept_name: 'Finance',
            salary: 56000
        }
    })
}
insert()
.then(async() =>{
    await prisma.$disconnect()
})
.catch(async(e)=>{
console.error(e)
await prisma.$disconnect()
process.exit(1)})

