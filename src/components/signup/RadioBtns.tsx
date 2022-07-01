import { Grid, Typography, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'
const genders = [
    { genId: 1, genName: "남" },
    { genId: 2, genName: "여" }
]
const regions = [
    { regId: 1, regName: "서울/인천/경기(수도권)" },
    { regId: 2, regName: "대전/세종/충청/강원(충청권)" },
    { regId: 3, regName: "광주/전라/제주(전라권)" },
    { regId: 4, regName: "부산/대구/울산/경상(경상권)" }
]

const RadioBtns = () => {
    return (
        <>



            <Grid item xs={12}>
                <Grid container columns={12}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Typography>성별</Typography>
                    </Grid>
                    {genders.map(gender => {
                        return (
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label={gender.genName}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container columns={12}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Typography>출신지역</Typography>
                    </Grid>
                    {
                        regions.map(region => {
                            return (
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label={region.regName}
                                    />
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Grid>
        </>
    )
}

export default RadioBtns