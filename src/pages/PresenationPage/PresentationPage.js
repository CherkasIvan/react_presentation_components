import {BUTTON_SIZE} from "../../constants/buttonSizes";
import Button from "../../components/Buttons";
import Text from "../../components/Text";
import {useState} from 'react';
import Link from "../../components/Link";
import RoundButtons from "../../components/RoundButtons";
import {Menu, Star, Add, East, Notification} from '../../assets'
import "./PresentationPage.css"
import Spiner from '../../components/Spiner'
import colors from '../../styles/colors'
import {AddIcon, StarFilledIcon, StarUnFilledIcon} from './PresentationPageStyles'

function PresentationPage() {

    const [buttonState, setButtonState] = useState(false);

    const handleClick = () => {
        setButtonState(!buttonState);
    }

    return (
        <div>

            <h1>
                Presentation Page
            </h1>
            <div className="buttonBox">
                <Button text={'Primary'}
                        color={colors.PRIMARY}>
                </Button>
                <Button text={'Continue'}
                        children={<AddIcon></AddIcon>}>
                </Button>
                <Button text={'Previos step'}></Button>
                <Button text={'Create new'}></Button>
                <Button text={'Primary'}></Button>

                <Button color={colors.DARK}
                        text={'Own the zone'}
                        onClick={handleClick}
                >
                    {buttonState ? <StarFilledIcon/> : <StarUnFilledIcon/>}
                </Button>


                <Button children={<Spiner></Spiner>}></Button>
            </div>
            <hr/>
            <hr/>

            {/*Text*/}
            <Text variant='h1' styleVariant={'header'}>Heading 1</Text>
            <Text variant='h2'>Heading 2</Text>
            <Text variant='h3'>Heading 3</Text>
            <Text variant='h4'>Heading 4</Text>
            <Text styleVariant={'bigP'}>Tristique tellus ultrices lacus facilisi purus dictum a rutrum adipiscing,
                vestibulum nam senectus
                pretium sapien maximus habitasse natoque laoreet, gravida pharetra lorem inceptos euismod vulputate nunc
                massa.</Text>
            <Text variant='description' styleVariant={'smallP'}>Lorem ipsum dolor sit amet consectetur adipiscing elit
                nullam, facilisi cursus
                lacinia a faucibus montes eu porttitor, nostra phasellus conubia blandit justo dapibus rutrum. Tristique
                magna aliquam eleifend duis pellentesque facilisi nibh porta varius himenaeos, hac inceptos mollis
                efficitur dapibus condimentum dis sit integer euismod nostra, feugiat hendrerit congue taciti primis nec
                rutrum ligula blandit. </Text>
            <hr/>
            <hr/>

            {/*Links*/}
            <div className='linksBox'>
                <Link styleVariant={'linkPrimary'} text={'Link Primary'}/>
                <Link styleVariant={'linkSecondary'} text={'Link Secondary'}/>
                <Link styleVariant={'linkDisabled'} text={'Link Disabled'}/>
                <Link styleVariant={'linkDestructive'} text={'Link Destructive'}/>
            </div>

            <hr/>
            <hr/>

            {/*RoundButtons*/}

            <div>
                <RoundButtons><Menu></Menu></RoundButtons>
                <RoundButtons><Star></Star></RoundButtons>
                <RoundButtons><Add></Add></RoundButtons>
                <RoundButtons><East></East></RoundButtons>
                <RoundButtons><Notification></Notification></RoundButtons>
            </div>

            <div className='Grey'>
                <RoundButtons><Menu></Menu></RoundButtons>
                <RoundButtons><Star></Star></RoundButtons>
                <RoundButtons><Add></Add></RoundButtons>
                <RoundButtons><East></East></RoundButtons>
                <RoundButtons><Notification></Notification></RoundButtons>
            </div>

        </div>
    )
}

export default PresentationPage


// <Button
// styleVariant={'primary'}
// color={'blue'}
// text={'Primary'}>
//     </Button>
// <Button styleVariant={'primary'}
//         color={"blue"}
//         iconLeft={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
//                        fill="#FFFFFF">
//             <path d="M0 0h24v24H0V0z" fill="none"/>
//             <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
//         </svg>}
//         text={'Previous step'}>
// </Button>
// <Button styleVariant={'primary'}
//         color={"blue"}
//         iconRight={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
//                         width="24px" fill="#FFFFFF">
//             <path d="M0 0h24v24H0V0z" fill="none"/>
//             <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
//         </svg>}
//         text={'Continue'}>
// </Button>
// <Button styleVariant={'primary'}
//         color={"blue"}
//         iconRight={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
//                         width="24px" fill="#FFFFFF">
//             <path d="M0 0h24v24H0V0z" fill="none"/>
//             <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
//         </svg>}
//         text={'Create New'}>
// </Button>
// <Button styleVariant={'primary'}
//         size={BUTTON_SIZE.small}
//         color={"blue"}
//         text={'Primary'}>
// </Button>
//
// <Button styleVariant={'secondary'}
//         color={"Gainsboro"}
//         text={'Secondary'}>
// </Button>
// <Button styleVariant={'secondaryLight'}
//         color={"inherit"}
//         text={'Secondary light'}>
// </Button>
// <Button styleVariant={'secondaryDark'}
//         color={"#00000F"}
//         text={'Secondary'}>
// </Button>
// <Button styleVariant={'disabled'}
//         text={'Disabled'}>
// </Button>
// <Button spinner={BUTTON_SIZE.spinner}>
// </Button>
//
// <Button styleVariant={'active'}
//         color={"LightSlateGray"}
//         text={'Active'}>
// </Button>
// <Button styleVariant={'activeVariant'}
//         color={"#D5E7EB"}
//         text={'Active variant'}>
// </Button>
// <Button styleVariant={'destructive'}
//         color={"#CE2743"}
//         text={'Destructive'}>
// </Button>
// <Button styleVariant={'link'}
//         color={"#f5f5f5"}
//         iconLeft={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
//                        fill="#000000">
//             <path d="M0 0h24v24H0V0z" fill="none"/>
//             <path
//                 d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
//         </svg>}
//         text={'https://something'}>
// </Button>
// <Button
//     styleVariant={'ownTheZone'}
//     color={"#0D192E"}
//     iconLeft={<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
//                    viewBox="0 0 24 24" width="24px" fill="orange">
//         <g>
//             <rect fill="none" height="24" width="24" x="0"/>
//             <path
//                 d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M12,2l-2.42,8H2 l6.17,4.41L5.83,22L12,17.31L18.18,22l-2.35-7.59L22,10h-7.58L12,2L12,2z"/>
//         </g>
//     </svg>}
//     iconLeftColored={<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
//                           height="24px" viewBox="0 0 24 24" width="24px" fill="orange">
//         <g>
//             <path d="M0,0h24v24H0V0z" fill="none"/>
//             <path d="M0,0h24v24H0V0z" fill="none"/>
//         </g>
//         <g>
//             <path
//                 d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
//         </g>
//     </svg>}
//     text={'Own the zone'}>
// </Button>