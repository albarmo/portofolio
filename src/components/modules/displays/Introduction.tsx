//@ts-nocheck
import React from 'react'
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../../../../public/assets/shape-geometrics.json'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const SquareCard: React.FC<{ item: any }> = ({ item }) => {
  return (
    <Box  w='80px'>
      <Image
        boxSize="80px"
        objectFit="cover"
        src={item.imgSrc}
        alt={item}
      />
      <Text textAlign={'center'} mt='2'>{item.title}</Text>
    </Box>
  )
}

const Introduction: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3.1,
    },
  }

  const skills = [
    { title: 'Typescript', imgSrc: 'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png' },
    { title: 'Javascript', imgSrc: 'https://miro.medium.com/v2/resize:fit:1200/1*yUNfohs9jA6GCDmyCYJTvA@2x.png' },
    { title: 'Golang Basic', imgSrc: 'https://pbs.twimg.com/profile_images/1142154201444823041/O6AczwfV_400x400.png' },
    { title: 'React', imgSrc: 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png' },
    { title: 'NextJs', imgSrc: 'https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg' },
    { title: 'Tailwind', imgSrc: 'https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png' },
    { title: 'Scss', imgSrc: 'https://indi.tech/wp-content/uploads/2022/06/useful-sass-scss-mixins-for-every-website.jpg' },
    { title: 'NodeJs', imgSrc: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png' },
    { title: 'PSQL', imgSrc: 'data:image/png;base64,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' },
    { title: 'React Native', imgSrc: 'https://www.ciat.edu/wp-content/uploads/2022/10/react-logo.svg' },
    { title: 'Ionic', imgSrc: 'https://images.prismic.io/ionicframeworkcom/66cfdbef-e59d-463a-8e24-12cb233e9d97_ionic+logo+blue.png?auto=compress,format' },
    { title: 'Expo', imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAD4+Pj8/Pzk5OT5+fn09PS0tLTHx8ft7e3w8PDS0tLAwMB9fX3c3NxJSUmurq6hoaEuLi6bm5vW1tZdXV2Dg4NycnLg4OBsbGwjIyO7u7uLi4vExMRUVFQ1NTWTk5M8PDxGRkYTExMbGxtaWlpubm4wMDCfn58QEBBkZGRAQEAnJycC2Y2mAAAOBUlEQVR4nN1d52IaMQwGjpVJNgnNgEDSkPL+z9fIN/CQzkucTb5fLQSwTrK27F4vOa42N5PUazgkXt76P1i9pF7HoTD86Fe4f0y9lkNg9NCXcDFOvR52XFWkPX1X//gapV4SK85mJVmraa83XZX/3v1JvSo+nD5VfLsq/1/zc3aWdl1cKJb13mvkcvRcvfR9knJlTPizKIn5uJRfHdZsfT52lXP3Wm26c/2ds/fync1RewCjecWp2wJ5d7Ir3xx2vi42XFf0fRKSWG3Q625XxYfSRaM15mRTPYCPbtfFhWFt2YltdjfbOzjHqFAbF+0Z91zGn7ILd9Xx6hgwqc0drkSK676C146XF43aDrxN8ffP//Y1HJdN1F00HfsYao9jMol7F22Avj+4MOk7KjE9R120Pa4w+n5w2u0yg1G7aAsiLpr+Iwg8EjFtBBB10Xq9k2+Kvn7/vuO1hqCxAJ+4xI2WNH39YzD6U4uLVsdQFHKP9xsXjbAQ9Qal8dTtgj1RWFy003krcSVw45IHahft3s1FOzoxbVw0IpFdx1DHKqaNi0ZEsZiLRqDbhbvC5qI9tNKkwkjkZIDzKs/ySrloWw8CMxTTy8oCbAgdcUa6aDjWmWnTxkVb4u+3uWgEiGgyEQaVizLHvS2vDVhj3jEN7ahsHKFBrzbttOBYZCWmzXNHeHjnuQEb5CSmX/tlLbVQ6eSJJsGCizTEYBjBeu6rhOdWjl6L9hjJgmQEGbiF5Zw09m7ViNefmxgC+9mUE8egSEDzNWXA0ul+nLUt3wEPiQlrIFhYBhInde76YjxGs2h+SExYjTEIZ6MV6gr9dh1PYC5iKrFQwJag8EAmYgpLURX7LReFN4lIUiHsgWboOfagQA5iOoaFmLb52bZ2NzwnoEgHxsIfXPJQ+IYnk7vEKawDUwgcqvQHRDDdIQgWsonpsmN6DIhdiOr0Ox4KF11TpENwCo16C6OwG4bEYkqz8LeIqaCCKLqf8VCY1uifwBIoz6qIi5waJBXTNhb2eiHZJwS3XVKkQbBwSb7NJKb/OqPHBLBw21Ks5aGwn66PXyjSNseRyf1OJ6Zin7V1LzGJ6XtnFGmw7EIAD4XJOmoFC9vT0kximqij1oGFvSkPhW9d0GMC+LO19BAOdjwkJmmuESy0ajmXpgsHJBFTFxayiel3FxRpcGNhb8QT6afoihbi55BDYRHTFEI6hB928TVe4un7SGIOhaFzmheMJjCNzyZY6CY7kWK6TpQShmU7VtnPowi8SeSwebCwN4gh8C3VVALUCNeuU7ufVjpI7FIR6MPCGDFdJOuEFlxx/uvTYKN/R33j493d3eMByX/0YmGv59/uVQJ1ZE4nn6vykW3fvicHohL6YxYeJaE/YQRirYkvenv47BDnTTySz5fAOIjAtall0O7iN/42VBC6ndfxB+5twRKMFk65uXEr98l9M08QebNw39nug5n+JXVWa/U1HY+KohgNJ3WOZMvr99z/fOXG7yOjAAp1PVpNgD2rPs5L1dnCGV1dhnzhvTeB+qxz2dyJND6e33CT+O3PwhAx1eSuVMdod3U14c82nSEKu96Tc6e+BK7UzwsnakM54SV/uVL/wMK//u0RvkZf8yfASqxp6y726M57USisu5CIqHzFVKVGdFi1VRFFt8TSkxYcr5aH9bx9Rx/10I9AVc+c2B5ruS6WpKptF8KOwBN/1mE8BV/KZ6F6YBkpFfELR880OCct3R+XiIRVoAaacSgSOTBeMfFA/7IXztpZWLWXLLH3vLSpmh+BPWzLCJfFg3ijCIb7L/12nXNC33z3oFCtF4KAW9yyqocueohfsJC2rI2+RLnsI6bKhirIh7ZHPQ8QO4ECD3NFvrtXl4bTDDjxoFCRNqh8WDqFm7aWyAkUCwslMUTVgoc2VSI+YL7FiWpC7MjsP7jxdKlS7p1B1bbb8K/JCgiRLEnTVf3BuK7wqfF0ZajlCSwJ6GH0lcgJ1Fv7/tpv8bgiHEgZqUi1XYZKi/t0iSLlrzYKpegT1QCuaGehtsnW2N+4i6kfhdLgWBSFwAGyr8WY3sKUmruYKtbPJqWyGYo5LqSVhWYpG/2plSuFhqZpcceUpqQYzxRmJCkWYrUXTPt9IX+HwrAWdFJUFYwIayG4RP0OloXBut2cxVRZKPz00o3AmAl+YCHlzqCsQYuLro3fyoQzSAgVkurN8uFem7B2hEtEtORjbojrNJSqEsFZwk2+njmIUKUtirQgup6wX3MV043iMcBGxFTIyKiffyF/5YY2FpI5Jsw5dQ2hFKdGKDKTiUjqJzwChl1IxF50UIQdF+AqpqpOBJdXK0QVU+RhhR9Q0MLCx5ZlIs6p67SXak6FcMtBzfB6hX0qPGMKKpDYhegvVcCMU9vfy1CrScJlquR0ML0lZD08sBDRF55GaO2VwSZBXIfztacDz3g9n198tDyhbTCBPfhWnIWW4i7iIbiKqRaHtm2GGlTR3w6ahbbEBBatuZ4Aov2gPWce4bCBIsXP9bXqfsROu4qprrptodcynECahfbRNMQ5dZ6d1X+yPVcX090HaSyUhS7dv8jHXEf1Dfvb1ngUUzwkWejUroY4p85DiWanApUGeY/q7tthjxPglBxEUnPOYor0kP/B9NQiLpcvdBimhx39L5P7heOJe7gqnuh8nEWe5CqWg+1C14EmxFV0H0pEmTP8eqo5uX66ji5tUyx078A33X2PaS/CiBejx7Pp2eOA4ywCUKSYsDh1jzyB2kTUuMcYzcEbhCkWumQ+/52JLBninHrMzu4OfSI0yCKSF3RRh7CHRH7DdE59hhIP3CQs3AgzVHc4SWBepoRA8SHZDA8K+9tDTsiKDAzCQmvf9qwWbOEumHvJb8T7gKfSCRaaj9Dm5suntcH/zcDUc3b2YBMlBa5Ibfky5XIxiCTMMzoLr1NMf3yqA/U64ywsVq2L0VxE0YFhGm7vkwiWB6EQPIdPv8UtDBcKKl9mfsB/KHE34T9qCFekrZNoSzOpLrac4ZyGzM7+veI+6hO+1eiWb+v7eUX1OmQITOc0bNprzqpWhdtiKHq6UL0jClNCFAzPJHh2dn41ZPIBxJm5BgvpJIt+ZmkDceCgoe99tamM7ezpYvl1fX37PI8J7VEWknaMuABIQAxEG68yjXiHkzioT+uUQQ2G7Fq3h5GSF2CYnQWEN7KhLCTmQmwlrRm6Eh4Kw6tN8GGdhXjI9GT9DZEjM8wOk5iG5mgwFqKl3oXDsEoBSstwTuNmZxsEiqloMtJYOMDynG6ZdJG00nV81OyshDDbUR17rAAp9RKnrxvAG9EjZmdlBImpOPZYK5ybOfWV+zQVOKdGNoNJTIOaE/Qzc3tYdcvn2aHOafjsrIoAbSp2iKoZRnoWl7ifgwJ83Ig0Q2dnNQRkhJFdqJ2F9OpbjLzCHnbg7KyOgAs94WP/FDdTW4u/qySa0Zfai1za1FtMqy0n7TO11BvUDwAFJ2Ow1n8oEYW/mFbO2XujGuRS70dYcg91TpnENKDzubYMlb2TCn7UBTJ2AL90/yOh0W/O4gafRQpWl+H314tYQud/Om3a611Wwfxius9bEFeMOQLy5Hr7XciIN4LA1uf6aPw6ZxQ71y+aUDUZ8BmjaUNgGm6gFNyj884ifNYdISZtGqwd9jek3TMknSEg1Mc1mMQ0Yo7kRVSZqGuK/SBKcto3MYmp/Vw8GsVtf3vNlG0Gs6pn7/xmZ0lE6YgBW6ZZiKQm7n6zsyTM4kMSiCzBUn0t7FwXAzFiygmhnLXXYu8SqnCIY3gCgDmnTGKayxV0YH20s7m9D8wgkIYgA8LF1aLnoOOHTGQipj0kxeUxO9uGXMRUkKOW2jwPzCCRiCIdwjhoaWQmbZrLTYkQeGo9p79MTO/Mx80kptlc6AkyqUWszh217cjhbi+AyD6pzimTmGZzoScsRh1S4BLT8CQSL0QfmLqYXyamIuhVs2NMNwlmclNiWWpTS2K/zOiXpTbVOfU5fqgFuYhpb9XXFV/UjcF7ZCOmIiRUgnKX6UIHeJ/meCiIPjC1CWfFQ2I2YgrOqXq8y28TUyGUinP6ey70rAC6Uy21uc7OWhA+CswM0WiilNqYxDSHe2cFio2+GiYxbTkPsGOAn6YOKfyGmxJlmM4pk5gu09CDAJxT5UAfpntn0TPGksBwTt1nZ9uRjZiKmFAptf2Oe2clGH1gTDclJrqCDgMsR2kOcD2JwIJ8xBTmp5RzwZnunV0moseECOzl6jSTmOaSGe6VnSZK5pSHwmwiqMo5ldusOMT0LRvfu1eNqMoRHYOYJrqulIJIIkr/L2K16TyTfoUGxgRt3L2zPH1NvICJC9k5jbrQMzMBLSG8bUn3Rdw7y31bEBdgglZuZwqd9spRQEvofWCBYnqbTQLKgBg/kp3TEPrSXFLqCgiZ5Ey1v5gu+K8kY4XunHrPzj7nUr0nAf2lcqnNj75Z1gJaQugWKXPqI6ZrtjusDgqo0kilNg8xzV9AS0AjhnTR4dj1JIJZTkFEK/QhhScbaSUij6HrFOBuSz2nTmJ6kUtjiRO0PrCxfXZ2llEY74SZKqfWaS/Ouxy7QTk305g2y1BidlGuC6oG06qyX7TR5zEhnxOKqu70XhqAlmmvLKNcJ1xWZRlRNCWnvTjGy9Kham1bn5H3zt5kG+U6YljNeD2McW16sHP3OkQ1PbOZIgdmxA3oZoOTio3GjMk6l3GReExQvzubFhIOnJqOd+ARB/niXGPjcUS5XijkMP8h3zxhDKZ199Asn4o1M0ZlX8YxRbneuJtt2NIw/wFWv7BM8LgMHgAAAABJRU5ErkJggg==' }
  ]



  return (
    <Container className="container xs:pt-8 sm:pt-10 xl:p-20 xs:w-5/6 xs:bg-blue-400 sm:bg-red-50 items-center text-white">
      <Flex
        w={['100vw', '100vw', 'container.sm', 'container.md', 'container.lg']}
        justifyContent="space-between"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
      >
        <Box p={[5, 5, 5]}>
          <Text className="text-3xl font-bold">#Tech</Text>
          <Text className="text-custom-yellow">Softawe Engineer</Text>
          <Text className="w-2/4 xs:w-full text-justify mt-3">
            I Love to code. Creativity Design, Adventures, I'm a software
            developer, i like to learn a new things and solve challenge with a
            creativity
          </Text>
        </Box>
        <Box>
          <Lottie options={defaultOptions} width={350} />
        </Box>
      </Flex>
      <Box
        p={[10, 15, 5]}
        w={['400px', '100%', 'container.sm', 'container.sm', 'container.lg']}
      >
        <Text className="text-custom-yellow mb-5">Tech Stack</Text>
        <Carousel responsive={responsive}>
          {skills?.map(
            (item: any, index: number) => (
              <SquareCard key={index} item={item} />
            ),
          )}
        </Carousel>
      </Box>
    </Container>
  )
}

export default Introduction
