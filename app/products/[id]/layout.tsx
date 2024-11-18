export default function ProductLayout({children}: {children:React.ReactNode}){

    return (
       <div>
         <h2>Featured Product</h2>
         {children}
       </div>
    )
}