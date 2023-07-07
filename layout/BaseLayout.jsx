// import Navbar from '@/components/Navbar'
// import Sidebar from '@/components/Sidebar'
// import Topbar from '@/components/Topbar'
// import React from 'react'

// const BaseLayout = ({ children }) => {
//   return (
//     <div className='layout'>
//       <Sidebar />
//       <div className='flex-1'>
//           <Navbar />
//           <div className="overflow-y-scroll">{children}</div>
//       </div>
//     </div>
//   )
// }

// export default BaseLayout
import Head from "next/head"
import Sidebar from "@/components/Sidebar"
import TopBar from "@/components/TopBar"
import { getSession, useSession } from "next-auth/react"
import Navbar from "@/components/Navbar"

export default function BaseLayout({ children }) {
   const { data: session } = useSession()
   return (
      <>
         <Head>
            <title>Admin Dashboard</title>
         </Head>
         <div className='flex bg-gray-100 font-sans text-gray-900'>
            <Sidebar />
            <main className='h-screen flex-1 flex flex-col bg-[#262847]' id='content' >
               <Navbar />
               <div className="overflow-y-scroll">
                  {children}
               </div>
            </main>
         </div>
      </>
   )
}


export async function getServerSideProps({ req }) {
   const session = await getSession({ req })

   console.log(req);
   if (!session) {
      return {
         redirect: {
            destination: '/login',
            permanent: false
         }
      }
   }

   return {
      props: { session }
   }
}
