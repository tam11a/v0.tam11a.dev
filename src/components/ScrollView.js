// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import React from 'react'
import { IconButton, Paper, Stack, Typography } from '@mui/material';

import { FiEdit2 } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs'; 

const ScrollView = ({componentList}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      //onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0: {
          slidesPerView: 1.3,
          spaceBetween: 2,
        },
        550: {
          slidesPerView: 1.5,
          spaceBetween: 5,
        },
        600: {
          slidesPerView: 2.5,
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: 3.5,
          // spaceBetween: 30,
        }
      }}
    >
        {
            componentList.map((comp, i) => 
                <SwiperSlide key={i}>
                    <Paper sx={{
                        m: 1,
                        p: 1,
                        minHeight: '190px',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 1
                    }}>
                        <Typography noWrap>{comp.title}</Typography>
                        <Typography variant={"normal"} flexGrow={1}>{comp.desc}</Typography>
                        <Stack direction={'row'} alignItems={'center'} spacing={1} color={'primary.main'} fontSize={'0.9rem'}>
                            <FiEdit2 />
                            <Typography color={'primary.main'} fontSize={'0.8rem'}>{comp.author}</Typography>
                        </Stack>
                        {/* <Typography variant='caption'>{comp.authorEmail}</Typography> */}
                        <Stack direction={'row'} alignItems={'center'} spacing={1} color={'secondary.main'} fontSize={'0.9rem'}>
                        <BiTimeFive />
                        <Typography variant='caption'>{comp.createdOn}</Typography>
                        </Stack>
                    </Paper>
                </SwiperSlide>
            )
        }
        {
            componentList && <SwiperSlide>
            <Paper sx={{
                m: 1,
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '190px',
                rowGap: 1
            }}>
                <Typography noWrap color={'primary.main'}>
                    See More
                </Typography>
                <IconButton color={'secondary'}>
                    <BsArrowRight />
                </IconButton>
            </Paper>
        </SwiperSlide>
        }
    </Swiper>
  )
}

export default ScrollView