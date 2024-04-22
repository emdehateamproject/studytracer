import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/container/PageContainer'
import { TextField, Box, Typography, Breadcrumbs, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { DatePicker } from '@mui/x-date-pickers'
import axios from 'axios'

const Pekerjaan = () => {
    const [pekerjaan, setPekerjaan] = useState([]);
    const [editMode, setEditMode] = useState(false)
    const [originalData, setOriginalData] = useState(null); 

    useEffect(() => {
        getPekerjaan();
    }, [])

    const handleEditModeToggle = () => {
        if (editMode) {
            // If canceling edit mode, revert data to original
            setPekerjaan(originalData);
        }
        setEditMode(!editMode);
    };

    const getPekerjaan = () => {
        const id = 1;
        axios.get("http://127.0.0.1:5000/pekerjaan/"+id)
            .then((data) => {
                // console.log()
                setPekerjaan(data?.data);
                setOriginalData(data?.data)
            })
            .catch(err => console.log(err))
    };

    const handleChange = (field, value) => {
        setPekerjaan(prevData => ({
            ...prevData,
            [field]: value
        }));
        console.log(pekerjaan);
    };

    const handleSave = () => {
        console.log(pekerjaan);
        // Send updated data to the server
        axios.put("http://127.0.0.1:5000/pekerjaan/"+pekerjaan?.id, pekerjaan)
            .then((response) => {
                console.log(response);
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
            <Typography color="text.primary">Pekerjaan</Typography>
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
                    Pekerjaan
                </Typography>
                {/* <Button variant="contained">Simpan</Button> */}
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
            </Box>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Sedang Bekerja</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={pekerjaan?.is_working || ""}
                    name="radio-buttons-group"
                    onChange={(e) => handleChange('is_working', e.target.value)}
                    sx={{display: "flex", flexDirection: "row"}}
                >
                    <FormControlLabel value={"ya"} control={<Radio />} label="Iya" />
                    <FormControlLabel value={"tidak"} control={<Radio />} label="Tidak" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Sedang Mencari Pekerjaan</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={pekerjaan?.is_looking_for_job || ""}
                    name="radio-buttons-group"
                    onChange={(e) => handleChange('is_looking_for_job', e.target.value)}
                    sx={{display: "flex", flexDirection: "row"}}
                >
                    <FormControlLabel value={"ya"} control={<Radio />} label="Iya" />
                    <FormControlLabel value={"tidak"} control={<Radio />} label="Tidak" />
                </RadioGroup>
            </FormControl>
        </Box>
    </PageContainer>
  )
}

export default Pekerjaan