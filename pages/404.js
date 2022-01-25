import { Box } from "@skynexui/components"
import appConfig from '../config.json'
import Link from 'next/link'


const Texto = (props) => {
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children}</Tag>

            <style jsx>{`
                h1{
                    color:white;
                    font-size: 40px;
                    font-weight: 700;
                }
                p {
                    color:white;
                    font-size: 20px;
                }
                span {
                    font-size: 1.2em;
                    font-weight: 700;
                }
            `}</style>
        </>
    )

}

const Anchor = (props) => {

    return (
        <>
            <a>{props.children}</a>


            <style jsx>{`

                a{
                    color:white;
                    font-size: 30px;
                }

                a:hover{
                    cursor: pointer !important;
                }
            
            `}</style>

        </>
    )

}

export default function _404() {
    return (<>

        <Box
            styleSheet={
                {
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundImage: 'url(https://wallpapercave.com/wp/wp3373427.jpg)',
                    backgroundSize: 'cover',

                }
            }
        >
            <Box
                styleSheet={{

                    width: '100%', maxWidth: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    height: '150px', backgroundColor: appConfig.theme.colors.neutrals[700], borderRadius: '20px',
                    flexDirection: 'column'

                }}

            >
                <Texto tag='h1'>404 - Page not Found</Texto>
                <Texto tag='p'>
                    <Link href={'/'}>
                        <a>
                            <Anchor >
                                Volte para a <Texto tag='span'>página inicial</Texto>
                            </Anchor>
                        </a>
                    </Link>
                </Texto>
            </Box>
        </Box>

    </>)
}