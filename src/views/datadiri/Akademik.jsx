import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/container/PageContainer'
import { TextField, Box, Typography, Breadcrumbs, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Akademik = () => {
    const [akademik, setAkademik] = useState([]);
    const [editMode, setEditMode] = useState(false)
    const [originalData, setOriginalData] = useState();
    useEffect(() => {
        getAkademik();
    }, [])
    const getAkademik = () => {
        const id = 1;
        axios.get("http://127.0.0.1:5000/akademik/alumni/"+id)
            .then((data) => {
                console.log(data?.data);
                setAkademik(data?.data);
                setOriginalData(data?.data)
            })
            .catch(err => console.log(err))
    };

    const handleChange = (field, value) => {
        setAkademik(prevData => ({
            ...prevData,
            [field]: value
        }));
    };
    
    const handleEditModeToggle = () => {
        if (editMode) {
            // If canceling edit mode, revert data to original
            setAkademik(originalData);
        }
        setEditMode(!editMode);
    };

    const handleSave = () => {
        // Send updated data to the server
        axios.put("http://127.0.0.1:5000/akademik/"+akademik?.id, akademik)
            .then(() => {
                // Optionally, perform any additional actions after successful save
                console.log("Data saved successfully!");
                // Switch back to read-only mode
                setEditMode(false);
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
                Biodata
            </Link>
            <Typography color="text.primary">Akademik</Typography>
        </Breadcrumbs>
        { akademik ? (
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
                            Akademik
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
                            )}
                        {/* <Button variant="contained">Simpan</Button> */}
                    </Box>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Angkatan
                    </FormLabel>
                    <TextField 
                        variant="outlined" 
                        value={akademik?.angkatan} 
                        onChange={(e) => handleChange('angkatan', e.target.value)}
                        disabled={!editMode} ></TextField>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Tahun Lulus
                    </FormLabel>
                    <TextField 
                        variant="outlined" 
                        value={akademik?.tahun_lulus}
                        onChange={(e) => handleChange('tahun_lulus', e.target.value)}
                        disabled={!editMode} ></TextField>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Tanggal Yudisium
                    </FormLabel>
                    <TextField 
                        variant="outlined" 
                        value={akademik?.tanggal_yudisium}
                        onChange={(e) => handleChange('tanggal_yudisium', e.target.value)}
                        disabled={!editMode}></TextField>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        IPK
                    </FormLabel>
                    <TextField 
                        variant="outlined" 
                        value={akademik?.ipk}
                        onChange={(e) => handleChange('ipk', e.target.value)}
                        disabled={!editMode}></TextField>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Lama Studi (Bulan)
                    </FormLabel>
                    <TextField 
                        variant="outlined" 
                        value={akademik?.lama_studi}
                        onChange={(e) => handleChange('lama_studi', e.target.value)}
                        disabled={!editMode}></TextField>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Nilai TOEFL
                    </FormLabel>
                    <TextField 
                        variant="outlined" 
                        value={akademik?.nilai_toefl}
                        onChange={(e) => handleChange('nilai_toefl', e.target.value)}
                        disabled={!editMode}></TextField>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Studi Lanjut?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={akademik?.studi_lanjut || ""}
                        onChange={(e) => handleChange('studi_lanjut', e.target.value)}
                        sx={{display: "flex", flexDirection: "row"}}
                        disabled={!editMode}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="Ya, Lanjut" />
                        <FormControlLabel value="0" control={<Radio />} label="Tidak/Belum" />
                    </RadioGroup>
                </FormControl>
            </Box>
        ) : null}
    </PageContainer>
  )
}

export default Akademik