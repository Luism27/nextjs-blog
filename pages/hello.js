import Link from "next/link";
import Image from "next/image";
const hello = (props) => {
 return (
     <div>
         <h1>HOLA A TODOS</h1>
         <h2>
             <Link href="/">
                 <a href="">Back</a>
             </Link>
         </h2>
         <img src="/images/profile.jpeg" alt="profile" />
         <Image
            src={"/images/profile.jpeg"}
            width={144}
            height={144}
            alt="profile"
         />
     </div>
 )
}
export default hello