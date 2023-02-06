import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useRouter } from 'next/router'

type Props = {
  item: TProduct
}

const CardItem = ({ item }: Props) => {
  const router = useRouter()
  const handleOnClick = () => {
    router.push(`/product/${item.id}`)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleOnClick}>
        <CardMedia
          component="img"
          height="350"
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {'$' + item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardItem
