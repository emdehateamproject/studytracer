import { Box, Breadcrumbs, Button, Card, CardContent, CardHeader, CardMedia, FormControl, FormLabel, Grid, Input, Paper, TextField, Typography } from '@mui/material';
import TracerImage from '../../assets/images/tracerimage.png';
import PageContainer from '../../components/container/PageContainer';
import { Book, Download } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Alumni = () => {
  return (
    <>
        <PageContainer>
            <Box py={2}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        
                        href="/material-ui/getting-started/installation/"
                    >
                        Career Development Center
                    </Link>
                    <Typography color="text.primary">Pencarian Alumni</Typography>
                </Breadcrumbs>
            </Box>
            <Box>
                <Grid container spacing={2} sx={{
                    
                }}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{
                            width: "100%",
                            background: "#CAECFF",
                        }}>
                            <CardHeader
                                sx={{
                                    backgroundColor: "#05A7DB"
                                }}
                                title="Pencarian Alumni"
                            />
                            <CardContent sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <FormControl sx={{width: "100%"}}>
                                    <FormLabel>
                                        Nama Alumni
                                    </FormLabel>
                                    <TextField variant="filled" sx={{
                                        background: "#ffffff",
                                    }}></TextField>
                                </FormControl>
                                <FormControl sx={{width: "100%"}}>
                                    <FormLabel>
                                        NIM (Nomer Induk Mahasiswa)
                                    </FormLabel>
                                    <TextField variant="filled" sx={{
                                        background: "#ffffff",
                                    }} ></TextField>
                                </FormControl>
                                <Button fullWidth variant="contained">Cari</Button>
                                <Button fullWidth variant="outlined" >Pendaftaran Alumni</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Paper elevation={0} sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            background: "#efefef",
                            height: "100%"
                        }}>
                            <Typography textAlign={"center"}>Pencarian Data Alumni</Typography>
                            <Typography textAlign={"center"}>Anda Bisa Melakukan Pencarian Pada Form Sebelah Kiri</Typography>
                            <Typography textAlign={"center"}>Jika Anda Belum Terdaftar, Bisa Melakukan Pendaftaran Alumni</Typography>
                            <Button variant="contained">Pendaftaran Alumni</Button>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </PageContainer>
    </>
  )
}

export default Alumni