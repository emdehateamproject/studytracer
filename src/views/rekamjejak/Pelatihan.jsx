import React from 'react'
import PageContainer from '../../components/container/PageContainer'
import { Box, Typography, Breadcrumbs, Button, Modal, Card, CardHeader, CardContent, FormControl, FormLabel, TextField, CardActionArea, CardActions, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 100,
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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

const Pelatihan = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <Typography color="text.primary">Pelatihan</Typography>
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
                        Data Pelatihan
                    </Typography>
                    <Button variant="contained" onClick={handleOpen}>Tambah Data</Button>
                </Box>
                <Box>
                    {/* <div style={{width: '100%' }}> */}
                        <DataGrid
                            rows={rows}
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
                                Nama Pelatihan
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
                                Keterangan
                            </FormLabel>
                            <TextField multiline variant="outlined" ></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Sertifikat</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="ada"
                                name="radio-buttons-group"
                                sx={{display: "flex", flexDirection: "row"}}
                            >
                                <FormControlLabel value="ada" control={<Radio />} label="Ada" />
                                <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Penyelenggara
                            </FormLabel>
                            <TextField variant="outlined" ></TextField>
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

export default Pelatihan