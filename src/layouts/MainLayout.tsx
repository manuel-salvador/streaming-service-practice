import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function MainLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{`${title} | Streaming Service`}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
