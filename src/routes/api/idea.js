// @ts-ignore
export async function POST({ request }){
    const body = await request.json()
    const { title, type, idea } = body;
    console.log(body);
    return{
        status: 200,
        body: {
            title,
        }
    }
}