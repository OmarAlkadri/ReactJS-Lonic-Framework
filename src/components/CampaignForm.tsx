/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Autocomplete,
    Button,
    Card,
    CardActions,
    CardContent,
    FormControlLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Loader from '../utils/Loader';

const CampaignForm = () => {
    const [targetAudienceOptions, setTargetAudienceOptions] = React.useState([{}])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        setLoading(true)
        setTargetAudienceOptions([
            { id: 1, label: 'الفئة الأولى' },
            { id: 2, label: 'الفئة الثانية' },
            { id: 3, label: 'الفئة الثالثة' },
        ])
        setTimeout(() => {
            setLoading(false)
        }, 100)

    }, [])
    const validationSchema = yup.object({
        title: yup.string().required('يرجى إدخال عنوان الحملة'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
        register
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Loader loaded={!loading} onlySpinner={false} >

            <form onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ maxWidth: 800, border: '1px groove grey' }}>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid justifyContent="flex-end" container direction="row" item xs={12}>
                                <Typography>عنوان الحملة</Typography>

                                <TextField
                                    id="title"
                                    name="title"
                                    label="ادخل عنوان الحملة هنا"
                                    fullWidth
                                    {...register('title')}
                                />
                            </Grid>

                            <Grid justifyContent="flex-end" container direction="row" item xs={12}>
                                <Typography>ارسل الحملة عبر</Typography>

                                <Grid justifyContent="flex-end" container direction="row" item xs={12}>
                                    <Controller
                                        name="gender"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <RadioGroup row {...field}>
                                                <FormControlLabel
                                                    labelPlacement="start"
                                                    value="male"
                                                    control={<Radio />}
                                                    label="sms رسالة"
                                                />
                                                <FormControlLabel
                                                    value="female"
                                                    labelPlacement="start"
                                                    control={<Radio />}
                                                    label="البريد الالكتروني"
                                                />
                                            </RadioGroup>
                                        )}
                                    />
                                </Grid>
                            </Grid>

                            <Grid justifyContent="flex-end" container direction="row" item xs={12}>
                                <Typography>عنوان الحملة</Typography>
                                <Grid justifyContent="flex-end" container direction="row" item xs={12}>
                                    <Autocomplete
                                        disablePortal
                                        fullWidth
                                        id="combo-box-demo"
                                        options={targetAudienceOptions}
                                        renderInput={(params) => (
                                            <TextField {...params} label="اختر الفئة المستهدفة من العملاء" />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button color="error" variant="contained" type="submit">
                            التالي
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </Loader>

    );
};

export default CampaignForm;
