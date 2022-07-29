// @ts-ignore
export async function PUT({ request }){
    const body = await request.json()
    const { title, type, description } = body;
    console.log(body);
    return{
        status: 200,
        body: {
            title,
        }
    }
}