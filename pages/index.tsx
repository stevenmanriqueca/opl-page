import { MainLayout } from "@/components/layouts"
import { AppBar, Box, Button, Grid, IconButton, Paper, Stack, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { GraphFour, GraphOne, GraphThree, GraphTwo } from "@/components/graphs";





const HomePage = () => {
  return (
    <MainLayout title="Dashboard - OPL">

      <div style={{ position: "absolute", height: "150px", width: "100%" }} className="appbar">
        <Box sx={{ flexGrow: 1 }} >
          <div className="appbar">
            <Toolbar>
              <Typography variant="h4" component="div" align="center" fontWeight="bolder" sx={{ flexGrow: 1, color: "white" }}>
                OPL CARGA SAS - Dashboard Indicadores
              </Typography>
            </Toolbar>
          </div>

          <Box component="main" sx={{ p: 2 }} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Paper elevation={5} sx={{ width: "100%", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid darkblue", borderRadius: "15px" }}>
                  <div>
                    <Typography textAlign="center" fontSize={30} sx={{ color: "darkblue" }} fontWeight="bolder">Cuentas por pagar</Typography>
                    <Typography textAlign="center" fontSize={20} fontWeight="bolder">$ 25.410.000</Typography>
                  </div>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Paper elevation={5} sx={{ width: "100%", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid darkblue", borderRadius: "15px" }}>
                  <div >
                    <Typography align="center" fontSize={30} sx={{ color: "darkblue" }} fontWeight="bolder">Cuentas por cobrar</Typography>
                    <Typography align="center" fontSize={20} fontWeight="bolder">$ 29.013.750</Typography>
                  </div>
                </Paper>
              </Grid>






              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Paper elevation={5} sx={{ width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid darkblue", borderRadius: "15px" }}>
                  {/* <div >
                  <Typography align="center">Graph #2</Typography>
                </div> */}
                  <GraphTwo />
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Paper elevation={5} sx={{ width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid darkblue", borderRadius: "15px" }}>
                  <GraphThree />
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Paper elevation={5} sx={{ width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid darkblue", borderRadius: "15px" }}>
                  {/* <div >
                  <Typography align="center">Graph #2</Typography>
                </div> */}
                  <GraphFour />
                </Paper>
              </Grid>




              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper elevation={5} sx={{ overflowY: "scroll", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid darkblue" }}>
                  {/* <div >
                  <Typography align="center">Graph #1</Typography>
                </div> */}
                  <GraphOne />
                </Paper>
              </Grid>


              <Grid item xs={12}>
                <div style={{ width: "100%", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Typography align="center" fontWeight="bolder" sx={{ color: "darkblue" }}>Powered By A&T Soluciones Empresariales</Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box >
      </div>
    </MainLayout >

  )
}

export default HomePage