import React from 'react'
import PageContainer from '../../components/container/PageContainer'
import { TextField, Box, Typography, Breadcrumbs, FormControl, FormLabel, Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { IconCheck } from '@tabler/icons-react'

const DataDiri = () => {
  return (
    <PageContainer title="Data Diri" description="Halaman Data Diri">
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover"  href="/">
                Dashboard
            </Link>
            <Typography color="text.primary">Tracer Instansi</Typography>
        </Breadcrumbs>

        <Box sx={{
                display: "flex", 
                flexDirection: "column", 
                gap: "16px", 
                border: "1px solid #e5e5e5",
                padding: "32px"
            }} >
                <Paper sx={{
                    background: "#efefef",
                    padding: "12px"
                }}
                elevation={0}
                >
                    Silahkan isi atau perbarui data Alumni bekerja saat ini, untuk membantu pimpinan mengisi data instansi/perusahaan di Kuesioner   
                </Paper>
                {/* <Box sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
                >
                    <Typography variant='h2'>
                        Data Diri
                    </Typography>
                    <Button variant="contained">Simpan</Button>
                </Box> */}
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                    Instansi/Perusahaan
                </FormLabel>
                <TextField variant="outlined" ></TextField>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                    Lingkup Instansi
                </FormLabel>
                <TextField variant="outlined" ></TextField>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                    Tahun Masuk
                </FormLabel>
                <TextField variant="outlined" ></TextField>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                    Email
                </FormLabel>
                <TextField variant="outlined" ></TextField>
            </FormControl>
            
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                    Alamat
                </FormLabel>
                <TextField multiline />
            </FormControl>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                    URL Tracer
                </FormLabel>
                <TextField variant="outlined" ></TextField>
            </FormControl>
            <Button variant="contained" startIcon={<IconCheck />}>Generate Link</Button>
        </Box>
    </PageContainer>
  )
}

export default DataDiri