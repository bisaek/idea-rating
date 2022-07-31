import prisma from "$lib/prisma";

// @ts-ignore
export async function PUT({ request }){
    const body = await request.json()
    //const { title, type, description } = body;
    console.log(body);

    const res = await prisma.idea.create({
        data: {  
            title: body.title as string, 
            description: body.description as string,
            type: body.type as string,
            tags: body.tags as string[],
            image: body.image as string,
        }
    })
    console.log(res)

    return{
        status: 200,
        body: {
            id: res.id,
        }
    }
}