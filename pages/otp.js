import Head from 'next/head';
import Layout from '@/layout/Layout';
import Link from 'next/link';
import styles from '@/styles/Form.module.css';
import Image from 'next/image';
import { HiFingerPrint, HiAtSymbol, HiEye, HiEyeOff } from 'react-icons/hi';
import { useState } from 'react';
import { useFormik } from 'formik';

import { useSession, signIn, signOut } from 'next-auth/react';

import { useRouter } from 'next/router';

export default function Login() {
    const [show, setShow] = useState(false);
    const router = useRouter();

    

    const formik = useFormik({
        initialValues: {
            otp: '',
        },
    });

    return (
        <Layout>
            <Head>
                <title>OTP Verify</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-8'>
                <div className='title'>
                    <h1 className='text-gray-800 text-3xl font-bold py-2'>
                        OTP Verify
                    </h1>
                </div>
                {/* form */}
                <form className='flex flex-col gap-4'>
                    <div className={`${styles.input_group}`}>
                        <input
                            className={styles.input_text}
                            type={`${show ? 'text' : 'password'}`}
                            name='otp'
                            placeholder='Enter OTP'
                            {...formik.getFieldProps('otp')}
                        />
                        <span
                            className='icon flex items-center px-4'
                            onClick={() => setShow(!show)}
                        >
                            {show ? (
                                <HiEye size={25} />
                            ) : (
                                <HiEyeOff size={25} />
                            )}
                        </span>
                    </div>
                    <div className='input-button'>
                        <button className={styles.button} type='submit'>
                            Verify OTP
                        </button>
                    </div>
                </form>
                {/* bottom */}
                <p className='text-center text-gray-400'>
                    Don't get otp ?{' '}
                    <button className='text-blue-700 hover:text-red-500'>
                        Resend
                    </button>
                </p>
            </section>
        </Layout>
    );
}
