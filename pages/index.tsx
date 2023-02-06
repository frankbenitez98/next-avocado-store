import CardItem from '@components/CardItem'
import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data))
  }, [])

  return (
    <>
      <Grid container spacing={4}>
        {productList.map((item) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: 'flex ',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default HomePage
