
import FooterThree from '@/components/FooterThree/FooterThree';
import GalleryFilter from '@/components/GalleryFilter/GalleryFilter';

import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';

import React from 'react';

export const metadata =  {
    title: "Reddot Technologies.",
   
  };

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Gallery Filter" subTitle="Gallery" />
            <GalleryFilter />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;