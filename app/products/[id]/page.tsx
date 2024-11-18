export default function ProductPage({params}:{params:{id:string}}){
    const {id} = params
    return <h1>Product : {id}</h1>
}