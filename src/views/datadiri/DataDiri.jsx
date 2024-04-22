import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/container/PageContainer'
import { TextField, Box, Typography, Breadcrumbs, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { DatePicker } from '@mui/x-date-pickers'
import axios from 'axios'
import dayjs from 'dayjs'

const DataDiri = () => {
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false)
    const [originalData, setOriginalData] = useState(null); 

    useEffect(() => {
        getDataDiri();
    }, [])

    const handleEditModeToggle = () => {
        if (editMode) {
            // If canceling edit mode, revert data to original
            setData(originalData);
        }
        setEditMode(!editMode);
    };

    const getDataDiri = () => {
        const id = 1;
        axios.get("http://127.0.0.1:5000/biodata/"+id)
            .then((data) => {
                // console.log()
                setData(data?.data);
                setOriginalData(data?.data)
            })
            .catch(err => console.log(err))
    };

    const handleChange = (field, value) => {
        setData(prevData => ({
            ...prevData,
            [field]: value
        }));
        console.log(data);
    };

    const handleSave = () => {
        console.log(data);
        // Send updated data to the server
        axios.put("http://127.0.0.1:5000/biodata/"+data?.id, data)
            .then((response) => {
                console.log(response);
                // Optionally, perform any additional actions after successful save
                console.log("Data saved successfully!");
                // Switch back to read-only mode
                setEditMode(false);
            })
            .catch(err => console.log(err))
    };

    console.log(data)
    return (
        <PageContainer title="Data Diri" description="Halaman Data Diri">
            <>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover"  href="/">
                        Dashboard
                    </Link>
                    <Link
                        underline="hover"
                        
                        href="/material-ui/getting-started/installation/"
                    >
                        Biodata
                    </Link>
                    <Typography color="text.primary">Data Diri</Typography>
                </Breadcrumbs>

                {data ? (
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
                                Data Diri
                            </Typography>
                            {!editMode ? (
                                    <Button variant="contained" onClick={handleEditModeToggle}>
                                        Ubah Data
                                    </Button>
                                ) : (
                                    <>
                                        <Box display={'flex'} flexDirection={'row'} gap={2}>
                                            <Button variant="contained" onClick={handleSave}>
                                                Simpan
                                            </Button>
                                            <Button variant="contained" onClick={handleEditModeToggle}>
                                                Batal
                                            </Button>
                                        </Box>
                                    </>
                                )
                            }
                            {/* <Button variant="contained">Ubah Data</Button> */}
                        </Box>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            No. Alumni
                        </FormLabel>
                        <TextField 
                            variant="outlined" 
                            value={data?.no_alumni} 
                            // onChange={(e) => handleChange('no_alumni', e.target.value)}
                            disabled>
                        </TextField>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            NIM
                        </FormLabel>
                        <TextField variant="outlined" value={data?.nim} disabled></TextField>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            Nama
                        </FormLabel>
                        <TextField 
                            variant="outlined" 
                            value={data?.nama} 
                            onChange={(e) => handleChange('nama', e.target.value)}
                            disabled={!editMode}></TextField>
                    </FormControl>
                    <FormControl >
                        <FormLabel id="demo-radio-buttons-group-label">Jenis Kelamin</FormLabel>
                        <RadioGroup
                            aria-labelledby="gender-radio-buttons-group-label"
                            value={data?.jenis_kelamin || ""}
                            name="radio-buttons-gender"
                            sx={{display: "flex", flexDirection: "row"}}
                            onChange={(e) => handleChange('jenis_kelamin', e.target.value)}
                            disabled={!editMode}
                        >
                            <FormControlLabel value="Laki-laki" control={<Radio />} label="Laki-laki" />
                            <FormControlLabel value="Perempuan" control={<Radio />} label="Perempuan" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            Alamat
                        </FormLabel>
                        <TextField 
                            multiline 
                            value={data?.alamat}  
                            onChange={(e) => handleChange('alamat', e.target.value)}
                            disabled={!editMode}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            Kode Pos
                        </FormLabel>
                        <TextField 
                            variant="outlined" 
                            value={data?.kode_pos} 
                            onChange={(e) => handleChange('kode_pos', e.target.value)}
                            disabled={!editMode}></TextField>
                    </FormControl>
                    <Box display={'flex'} flexDirection={'row'} gap={'16px'}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Tempat Lahir
                            </FormLabel>
                            <TextField 
                                variant="outlined" 
                                value={data?.tempat_lahir} 
                                onChange={(e) => handleChange('tempat_lahir', e.target.value)}
                                disabled={!editMode}></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Tanggal Lahir
                            </FormLabel>
                            <DatePicker
                                value={dayjs(data?.tanggal_lahir)} 
                                disabled={!editMode}/>
                        </FormControl>
                    </Box>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            No. Hp
                        </FormLabel>
                        <TextField 
                            variant="outlined" 
                            value={data?.no_hp} 
                            onChange={(e) => handleChange('no_hp', e.target.value)}
                            disabled={!editMode}></TextField>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Status</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label-status"
                            value={data?.menikah || ""}
                            name="radio-buttons-group-status"
                            sx={{display: "flex", flexDirection: "row"}}
                            onChange={(e) => handleChange('status', e.target.value)}
                            disabled={!editMode}
                        >
                            <FormControlLabel value="belum" control={<Radio />} label="Belum Menikah" />
                            <FormControlLabel value="sudah" control={<Radio />} label="Menikah" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            Tentang
                        </FormLabel>
                        <TextField 
                            variant='outlined' 
                            multiline 
                            value={data?.tentang} 
                            onChange={(e) => handleChange('tentang', e.target.value)}
                            disabled={!editMode}/>
                    </FormControl>
                </Box>
                ) : null}
            </>
            
        </PageContainer>
    )
}

export default DataDiri