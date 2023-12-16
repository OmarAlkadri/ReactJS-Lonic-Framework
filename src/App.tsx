import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { saveCampaign } from './utils/localStorage'
import { Autocomplete, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, FormControlLabel, Grid, IconButton, InputLabel, Radio, RadioGroup, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { useForm, Controller } from 'react-hook-form';
import { OfferViews } from './views/OfferViews'
import CampaignForm from './components/CampaignForm'

const steps = [
  'معلومات الحملة',
  'المحتوى الاعلاني',
  'المعاينة و النشر',
]

function App() {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={4}
      >
        <Grid item xs={5}>

          <Stepper activeStep={1}>
            {steps.map((label: string) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          item xs={4}>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: 'black' }}>حملة جديدة</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: 'red' }}>حملات اعلانية</span>{' '}
              <span style={{ color: 'black' }}>/ اضافة حملة جديدة</span>
            </Typography>
          </Grid>

        </Grid>

      </Grid>

      <Grid height={20}>
      </Grid>

      <Box component="section" sx={{ p: 2 }}>
        <CacheProvider value={cacheRtl}>

          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <Grid item xs>
              <CampaignForm></CampaignForm>

            </Grid>
            <Grid item xs>
              <OfferViews></OfferViews>
            </Grid>

          </Grid>
        </CacheProvider>

      </Box >

    </>
  )
}

export default App
