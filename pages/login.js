import Head from 'next/head';
import Layout from '@/layout/Layout';
import Link from 'next/link';
import styles from '@/styles/Form.module.css';
import Image from 'next/image';
import { HiFingerPrint, HiAtSymbol } from 'react-icons/hi';
import { useState } from 'react';
import { useFormik } from 'formik';

import { useSession, signIn, signOut } from 'next-auth/react';
import login_validate from '@/lib/validate';

import { useRouter } from 'next/router';

export default function Login() {
    const [show, setShow] = useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit,
        validate: login_validate,
    });

    async function onSubmit(values) {
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: '/',
        });
        console.log(status);

        if (status.ok) {
            router.push(status.url);
        }
    }

    async function handleGoogleSignIn() {
        signIn('google', { callbackUrl: 'http://localhost:3000' });
    }

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-8'>
                <div className='title'>
                    <h1 className='text-gray-800 text-3xl font-bold py-2'>
                        Explore
                    </h1>
                </div>
                {/* form */}
                <form
                    className='flex flex-col gap-4'
                    onSubmit={formik.handleSubmit}
                >
                    <div
                        className={`${styles.input_group} ${
                            formik.errors.email && formik.touched.email ? (
                                'border-rose-600'
                            ) : (
                                <></>
                            )
                        }`}
                    >
                        <input
                            className={styles.input_text}
                            type='email'
                            name='email'
                            placeholder='Email'
                            {...formik.getFieldProps('email')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div
                        className={`${styles.input_group} ${
                            formik.errors.password &&
                            formik.touched.password ? (
                                'border-rose-600'
                            ) : (
                                <></>
                            )
                        }`}
                    >
                        <input
                            className={styles.input_text}
                            type={`${show ? 'text' : 'password'}`}
                            name='password'
                            placeholder='Password'
                            {...formik.getFieldProps('password')}
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className='icon flex items-center px-4'
                        >
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    <div className='input-button'>
                        <button className={styles.button} type='submit'>
                            Login
                        </button>
                    </div>
                    <div className='input-button'>
                        <button
                            onClick={handleGoogleSignIn}
                            className={styles.button_custom}
                            type='button'
                        >
                            <Image
                                src={'/assets/google.svg'}
                                width={20}
                                height={20}
                            />
                            Sign In with Google
                        </button>
                    </div>
                    <div className='input-button'>
                        <button className={styles.button_custom} type='button'>
                            <Image
                                src={'/assets/github.svg'}
                                width={20}
                                height={20}
                            />
                            Sign In with Github
                        </button>
                    </div>
                </form>
                {/* bottom */}
                <p className='text-center text-gray-400'>
                    Don't have an account yet ?{' '}
                    <Link href={'/register'} className='text-blue-700 hover:text-red-500'>
                        Sign Up
                    </Link>
                </p>
            </section>
        </Layout>
    );
}
