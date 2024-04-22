import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/container/PageContainer'
import { Box, Typography, Breadcrumbs, Button, Modal, Card, CardHeader, CardContent, FormControl, FormLabel, TextField, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'

const columns = [
    { field: 'no', headerName: 'No', width: 100 },
    { field: 'nama_kejuaraan', headerName: 'Nama Kejuaraan', width: 130 },
    { field: 'penyelenggara', headerName: 'Penyelenggara', width: 130 },
    { field: 'tahun', headerName: 'Tahun', width: 130 },
    { field: 'skala', headerName: 'Skala', width: 130 },
    { field: 'keterangan', headerName: 'Keterangan', width: 130 },
    { field: 'aksi', headerName: 'Aksi', width: 130 }
];

const rows = [
   
];

const style = {
    position: 'absolute',
    padding: '32px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "800px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const Prestasi = () => {
    const [prestasi, setPrestasi] = useState([]);
    // const [editMode, setEditMode] = useState(false)
    // const [originalData, setOriginalData] = useState(null); 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getPrestasi();
    }, [])

    const getPrestasi = () => {
        const id = 1;
        axios.get("http://127.0.0.1:5000/prestasi/alumni/"+id)
            .then((data) => {
                // console.log()
                const rowsWithNumbers = data?.data.map((item, index) => ({ ...item, no: index + 1 })); // Add sequential numbers starting from 1
                setPrestasi(rowsWithNumbers);
                // setRows(rowsWithNumbers);
                // setOriginalData(data?.data)
            })
            .catch(err => console.log(err))
    };
    

    return (
        <PageContainer title="Data Diri" description="Halaman Data Diri">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover"  href="/">
                    Dashboard
                </Link>
                <Link
                    underline="hover"
                    href="/material-ui/getting-started/installation/"
                >
                    Rekam Jejak
                </Link>
                <Typography color="text.primary">Prestasi</Typography>
            </Breadcrumbs>

            <Box sx={{
                display: "flex", 
                flexDirection: "column", 
                gap: "16px", 
                border: "1px solid #e5e5e5",
                padding: "32px"
            }} >
                <Box sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
                >
                    <Typography variant='h2'>
                        Prestasi
                    </Typography>
                    <Button variant="contained" onClick={handleOpen}>Tambah Data</Button>
                </Box>
                <Box>
                    {/* <div style={{width: '100%' }}> */}
                        <DataGrid
                            rows={prestasi}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                    {/* </div> */}
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card style={style}>
                    <CardHeader title="Tambah Data Prestasi"/>
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                    }}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Nama Kejuaraan
                            </FormLabel>
                            <TextField variant="outlined" ></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Penyelenggara
                            </FormLabel>
                            <TextField variant="outlined" ></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Tahun
                            </FormLabel>
                            <TextField variant="outlined" ></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Skala
                            </FormLabel>
                            <TextField variant="outlined" ></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Keterangan
                            </FormLabel>
                            <TextField multiline variant="outlined" ></TextField>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained'>Simpan</Button>
                    </CardActions>
                </Card>
            </Modal>
        </PageContainer>
    )
}

export default Prestasi