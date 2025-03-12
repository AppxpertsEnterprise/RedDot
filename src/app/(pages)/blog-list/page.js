import BlogTwoPage from '@/components/BlogTwoPage/BlogTwoPage';
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';

import React from 'react';

export const metadata ={
    title: "Reddot Enterprise solution.",
   
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Our News" subTitle="News List" />
            <BlogTwoPage />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;