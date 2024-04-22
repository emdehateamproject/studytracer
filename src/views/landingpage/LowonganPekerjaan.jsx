import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import TracerImage from '../../assets/images/tracerimage.png';
import PageContainer from '../../components/container/PageContainer';
import { Book, Download } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LowonganPekerjaan = () => {
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
                    <Typography color="text.primary">Lowongan Kerja</Typography>
                </Breadcrumbs>
            </Box>

            <Box sx={{
                background: "#103E4D",
                padding: "12px",
                marginBottom: "12px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px"
            }}>
                <Book sx={{color: "#ffffff"}} />
                <Typography color="#ffffff" fontSize={16} fontWeight={700}>LOWONGAN PEKERJAAN</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card sx={{ border: "1px solid #efefef" }}>
                        <CardMedia
                            sx={{ height: 260 }}
                            image={TracerImage}
                            title="green iguana"
                        />
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#efefef"
                        }}>
                            <Typography gutterBottom variant="small" component="div">
                            INFO LOWONGAN KERJA PT Superior Prima Sukses - Procurement Staff dan Procurement Field Officer
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Card sx={{ border: "1px solid #efefef" }}>
                        <CardMedia
                            sx={{ height: 260 }}
                            image={TracerImage}
                            title="green iguana"
                        />
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#efefef"
                        }}>
                            <Typography gutterBottom variant="small" component="div">
                            INFO LOWONGAN KERJA PT Superior Prima Sukses - Procurement Staff dan Procurement Field Officer
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Card sx={{ border: "1px solid #efefef" }}>
                        <CardMedia
                            sx={{ height: 260 }}
                            image={TracerImage}
                            title="green iguana"
                        />
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#efefef"
                        }}>
                            <Typography gutterBottom variant="small" component="div">
                            INFO LOWONGAN KERJA PT Superior Prima Sukses - Procurement Staff dan Procurement Field Officer
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Card sx={{ border: "1px solid #efefef" }}>
                        <CardMedia
                            sx={{ height: 260 }}
                            image={TracerImage}
                            title="green iguana"
                        />
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#efefef"
                        }}>
                            <Typography gutterBottom variant="small" component="div">
                            INFO LOWONGAN KERJA PT Superior Prima Sukses - Procurement Staff dan Procurement Field Officer
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Card sx={{ border: "1px solid #efefef" }}>
                        <CardMedia
                            sx={{ height: 260 }}
                            image={TracerImage}
                            title="green iguana"
                        />
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#efefef"
                        }}>
                            <Typography gutterBottom variant="small" component="div">
                            INFO LOWONGAN KERJA PT Superior Prima Sukses - Procurement Staff dan Procurement Field Officer
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Card sx={{ border: "1px solid #efefef" }}>
                        <CardMedia
                            sx={{ height: 260 }}
                            image={TracerImage}
                            title="green iguana"
                        />
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#efefef"
                        }}>
                            <Typography gutterBottom variant="small" component="div">
                            INFO LOWONGAN KERJA PT Superior Prima Sukses - Procurement Staff dan Procurement Field Officer
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Card sx={{ border: "1px solid #efefef" }}>
                        <CardMedia
                            sx={{ height: 260 }}
                            image={TracerImage}
                            title="green iguana"
                        />
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#efefef"
                        }}>
                            <Typography gutterBottom variant="small" component="div">
                            INFO LOWONGAN KERJA PT Superior Prima Sukses - Procurement Staff dan Procurement Field Officer
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                
                
            </Grid>
        </PageContainer>
    </>
  )
}

export default LowonganPekerjaan