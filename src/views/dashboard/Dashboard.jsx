import React from 'react';
import PageContainer from '../../../src/components/container/PageContainer';

import HeroImg from '../../assets/images/hero.png';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <img src={HeroImg} style={{width: "100%" }}/>
      <h1>Tracer Study Universitas Ahmad Dahlan</h1>
      <p>Ayo sukseskan Tracer Study UAD, Kami butuh partisipasi Anda semua.</p>
      <p>
        UAD telah meluncurukan SITTra (Sistem Informasi dan Teknologi Tracer) 2019.<br/>
        SITTra ini merupakan system yang dikembangkan oleh UAD untuk melakukan tracer study (studi penulusuran alumni). System ini akan digunakan untuk mengukur proses Pendidikan di UAD dan juga digunakan untuk melakukan penulusuran jenjang karir para alumni UAD.
        Partisipasi para alumni dalam pengisian kuesioner SITTra ini akan sangat berguna bagi kemajuan UAD dan usaha kita dalam mempertahankan Akreditasi kita.
        Mohon dengan sangat para alumni dapat mengisi kuesioner SITTra.
        Silahkan klik LOG IN dan masukkan NIM dan password anda. Selamat berpartisipasi dan sukses selalu bagi para Alumni UAD
      </p>
    </PageContainer>
  );
};

export default Dashboard;
