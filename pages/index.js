import Head from 'next/head';
import Link from 'next/link';
import { useSession, getSession, signOut } from 'next-auth/react';
import BaseLayout from '@/layout/BaseLayout';

import { useSelector } from 'react-redux';
import { useGetUsersQuery } from '@/services/TMDB';

export default function Home() {
    // const { data: session } = useSession();

    const { data, error, isLoading } = useGetUsersQuery();
    console.log(data);

    function handleSignOut() {
        signOut();
    }

    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <BaseLayout>
                {/* {session ? User({ session, handleSignOut }) : Guest()} */}
            </BaseLayout>
        </>
    );
}

// Guest User
function Guest() {
    return (
        <main className='container mx-auto text-center py-20'>
            <h3 className='text-4xl font-bold'>Guest Home Page</h3>
            <div className='flex justify-center'>
                <Link
                    href={'/login'}
                    className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
                >
                    Sign In
                </Link>
            </div>
        </main>
    );
}

// Authorize User

function User({ session, handleSignOut }) {
    return (
        <main className='container mx-auto text-center py-20'>
            <h3 className='text-4xl font-bold'>Authorize Home Page</h3>
            <div className='details'>
                <h5>{session.user.username}</h5>
                <h5>{session.user.email}</h5>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={handleSignOut}
                    className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
                >
                    Sign Out
                </button>
            </div>
            <div className='flex justify-center'>
                <Link
                    href={'/profile'}
                    className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
                >
                    Profile
                </Link>
            </div>
        </main>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}
